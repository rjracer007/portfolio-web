"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// 1. Definimos el esquema de validación estricto con Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  business: z.string().optional(),
  phone: z.string().min(10, { message: "Ingresa un número de teléfono válido (ej. +57 311...)" }),
  message: z.string().min(10, { message: "Por favor, cuéntame un poco más. (mínimo 10 caracteres)" })
});

// Inferimos automáticamente los tipos de TypeScript desde el esquema
type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // 2. Inicializamos React Hook Form conectado a Zod
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      business: "",
      phone: "",
      message: ""
    }
  });

  // 3. Esta función solo se ejecuta si la validación de Zod es exitosa
  const onSubmit = async (data: ContactFormValues) => {
    setStatus("submitting");

    const endpoint = "https://formspree.io/f/mrpeqllp";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          _subject: `Nuevo cliente interesado: ${data.name} (${data.business || 'Sin sector'})`,
          Nombre: data.name,
          Negocio: data.business || "No especificado",
          Teléfono: data.phone,
          Mensaje: data.message
        })
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {status === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6 flex items-start gap-3">
          <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          <p>¡Gracias por tu mensaje! Me pondré en contacto contigo muy pronto.</p>
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 flex items-start gap-3">
          <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <p>Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o escríbeme por WhatsApp.</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre *</label>
          <input
            {...register("name")}
            type="text"
            className={`w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white focus:ring-2 outline-none transition ${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-500 focus:border-blue-500'}`}
            placeholder="Tu nombre"
          />
          {errors.name && <p className="text-red-500 text-xs mt-2 font-medium">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Negocio / Sector</label>
          <input
            {...register("business")}
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Ej. Restaurante"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Teléfono / WhatsApp *</label>
        <input
          {...register("phone")}
          type="tel"
          className={`w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white focus:ring-2 outline-none transition ${errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-500 focus:border-blue-500'}`}
          placeholder="+57 311 000 0000"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-2 font-medium">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Mensaje *</label>
        <textarea
          {...register("message")}
          rows={4}
          className={`w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white focus:ring-2 outline-none transition resize-none ${errors.message ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-500 focus:border-blue-500'}`}
          placeholder="Me gustaría modernizar el menú de mi local..."
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-2 font-medium">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-xl transition shadow-md shadow-blue-500/30 text-lg mt-2 flex justify-center items-center"
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </span>
        ) : (
          "Enviar Mensaje"
        )}
      </button>
    </form>
  );
}
