"use client";
import { useState } from 'react';
import { Search, MapPin, Bed, Bath, Square, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function InmobiliariaDemo() {
  const [filter, setFilter] = useState('todos');

  const properties = [
    { id: 1, title: "Apartamento Moderno Centro", price: 250000, type: "venta", beds: 2, baths: 2, sqft: 85, location: "Centro Histórico" },
    { id: 2, title: "Casa Familiar con Jardín", price: 1200, type: "alquiler", beds: 4, baths: 3, sqft: 210, location: "Zona Norte" },
    { id: 3, title: "Loft Industrial Minimalista", price: 185000, type: "venta", beds: 1, baths: 1, sqft: 65, location: "Distrito Arte" },
    { id: 4, title: "Ático con Vista al Mar", price: 2800, type: "alquiler", beds: 3, baths: 2, sqft: 120, location: "Costera" }
  ];

  const filtered = properties.filter(p => filter === 'todos' || p.type === filter);

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Header */}
      <header className="bg-white px-6 py-4 shadow-sm flex items-center gap-4 sticky top-0 z-20">
        <Link href="/#demos" className="text-slate-500 hover:text-slate-800"><ChevronLeft /></Link>
        <div className="font-bold text-xl text-blue-900">Inmuebles Elite</div>
      </header>

      {/* Hero Search */}
      <div className="bg-blue-900 text-white px-6 py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80")'}}></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Encuentra tu lugar ideal</h1>
          
          <div className="max-w-2xl mx-auto bg-white rounded-full p-2 flex items-center shadow-lg">
            <div className="pl-4 text-slate-400"><Search className="w-5 h-5" /></div>
            <input type="text" placeholder="Buscar por zona o ciudad..." className="w-full px-4 py-2 outline-none text-slate-800" />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition">Buscar</button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex gap-4 mb-8 border-b pb-4">
          <button onClick={() => setFilter('todos')} className={`font-medium pb-4 -mb-[17px] border-b-2 transition ${filter === 'todos' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>Todos</button>
          <button onClick={() => setFilter('venta')} className={`font-medium pb-4 -mb-[17px] border-b-2 transition ${filter === 'venta' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>En Venta</button>
          <button onClick={() => setFilter('alquiler')} className={`font-medium pb-4 -mb-[17px] border-b-2 transition ${filter === 'alquiler' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>En Alquiler</button>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(prop => (
            <div key={prop.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition group">
              <div className="h-56 bg-slate-200 relative bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80")'}}>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-900">
                  {prop.type === 'venta' ? 'Venta' : 'Alquiler'}
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                  ${prop.price.toLocaleString()} {prop.type === 'alquiler' && '/mes'}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                  <MapPin className="w-4 h-4" /> {prop.location}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{prop.title}</h3>
                
                <div className="flex justify-between items-center text-slate-600 text-sm mb-6 border-t pt-4">
                  <div className="flex items-center gap-2"><Bed className="w-4 h-4 text-blue-600"/> {prop.beds}</div>
                  <div className="flex items-center gap-2"><Bath className="w-4 h-4 text-blue-600"/> {prop.baths}</div>
                  <div className="flex items-center gap-2"><Square className="w-4 h-4 text-blue-600"/> {prop.sqft}m²</div>
                </div>

                <button className="w-full bg-blue-50 text-blue-700 font-bold py-3 rounded-xl hover:bg-blue-600 hover:text-white transition">
                  Contactar Agente
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
