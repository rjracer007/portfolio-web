import { 
  Utensils, Home, Store, Smartphone, Laptop, ShoppingBag, 
  Zap, Timer, PiggyBank, Handshake, ChevronDown, MessageCircle, 
  CalendarCheck, Menu, Linkedin, Github, Instagram, Mail 
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  return (
    <main>
      {/* Menú Superior (Navbar) */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-2xl tracking-tight text-blue-700">DevPortfolio.</span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center font-medium">
              <Link href="#inicio" className="text-slate-600 hover:text-blue-600 transition">Inicio</Link>
              <Link href="#servicios" className="text-slate-600 hover:text-blue-600 transition">Servicios</Link>
              <Link href="#demos" className="text-slate-600 hover:text-blue-600 transition">Demos</Link>
              <Link href="#proceso" className="text-slate-600 hover:text-blue-600 transition">Proceso</Link>
              <Link href="#contacto" className="text-slate-600 hover:text-blue-600 transition">Contacto</Link>
              <Link href="#contacto" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition shadow-md hover:shadow-lg">Agendar Llamada</Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-slate-600 hover:text-slate-900 focus:outline-none">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section id="inicio" className="pt-32 pb-24 bg-slate-900 text-white text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 mt-10">
          <ScrollReveal delay={0.1}>
            <div className="inline-block bg-slate-800/80 backdrop-blur-sm rounded-full px-5 py-2 text-sm font-medium mb-8 border border-slate-700 text-blue-200">
              ⚡ Diseño moderno, carga en menos de 1 segundo y 100% optimizado para móviles.
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Aplicaciones web y tiendas online a medida para hacer crecer tu negocio local
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Desarrollamos sitios web ultrarrápidos, menús digitales y portales interactivos diseñados para aumentar tus ventas y automatizar tus procesos sin pagar comisiones a terceros.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#demos" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-8 rounded-full transition shadow-lg shadow-blue-900/50 text-lg">
                Ver Demos en Vivo
              </Link>
              <Link href="#contacto" className="bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold py-3.5 px-8 rounded-full transition text-lg">
                Agendar Asesoría (15 min)
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Soluciones */}
      <section id="servicios" className="py-24 px-4 max-w-7xl mx-auto">
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Soluciones diseñadas para tu sector</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Soluciones de software concretas para automatizar, vender más y mejorar la experiencia de tus clientes.</p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Utensils className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-1 text-slate-900">Restaurantes y Gastronomía</h3>
              <p className="text-blue-600 font-medium mb-4">Menú Digital & Sistema de Pedidos Propios</p>
              
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">Olvídate de los archivos PDF lentos y de las altas comisiones de las apps de delivery. Ofrece a tus clientes un menú interactivo en tiempo real donde pueden pedir directo por WhatsApp o pagar en línea.</p>
              
              <div className="space-y-3">
                <p className="font-semibold text-sm text-slate-900">Incluye:</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Menú SPA dinámico y de carga instantánea.</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Módulo de gestión de precios y platillos en tiempo real.</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Recepción de pedidos estructurados en WhatsApp o panel web.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Home className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-1 text-slate-900">Inmobiliarias y Bienes Raíces</h3>
              <p className="text-blue-600 font-medium mb-4">Portal Inmobiliario Interactivo</p>
              
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">Muestra tus propiedades con una experiencia moderna, filtros rápidos por precio/zona y captura de prospectos calificados de forma automática.</p>
              
              <div className="space-y-3">
                <p className="font-semibold text-sm text-slate-900">Incluye:</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Buscador y filtros instantáneos sin recargar la página.</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Integración con mapas y galerías de alta calidad.</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Formulario de contacto directo asignado a cada propiedad.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Store className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-1 text-slate-900">Comercio Local (E-Commerce)</h3>
              <p className="text-blue-600 font-medium mb-4">Tienda Online a Medida sin Límites</p>
              
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">Vende tus productos 24/7 con un flujo de compra ágil, integrando pasarelas de pago locales y gestión de inventario personalizada.</p>
              
              <div className="space-y-3">
                <p className="font-semibold text-sm text-slate-900">Incluye:</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Pasarelas de pago (Stripe, Mercado Pago, etc.).</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Catálogo de productos con variantes (tallas, colores).</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Panel de administración intuitivo para gestionar pedidos.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Demos */}
      <section id="demos" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Explora cómo se verá tu proyecto</h2>
              <p className="text-slate-600 text-lg">Para entender el valor de una aplicación web, la mejor manera es probarla en vivo.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-10">
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white group flex flex-col h-full">
                <div className="bg-slate-100 h-56 relative flex items-center justify-center border-b border-slate-200">
                  <div className="text-center flex flex-col items-center">
                    <Smartphone className="w-10 h-10 text-slate-300 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-slate-400 font-medium text-sm">Mockup visual (Teléfono y Laptop)</p>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="inline-block self-start text-xs font-bold text-orange-700 bg-orange-100 px-3 py-1 rounded-full uppercase tracking-wider mb-4">Demo Restaurante</span>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Sabor & Arte - Sistema de Pedidos</h3>
                  <p className="text-slate-600 text-sm mb-8 flex-grow">Demo funcional de un menú digital con carrito de compras y envío de la orden estructurada directo a WhatsApp.</p>
                  <div className="flex flex-col gap-3 mt-auto">
                    <Link href="/demos/restaurante" className="text-center bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold py-2.5 rounded-lg transition">Ver Demo en Vivo</Link>
                    <Link href="#contacto" className="text-center border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium py-2.5 rounded-lg transition">Solicitar una Solución Similar</Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white group flex flex-col h-full">
                <div className="bg-slate-100 h-56 relative flex items-center justify-center border-b border-slate-200">
                  <div className="text-center flex flex-col items-center">
                    <Laptop className="w-10 h-10 text-slate-300 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-slate-400 font-medium text-sm">Mockup visual (Teléfono y Laptop)</p>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="inline-block self-start text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider mb-4">Demo Inmobiliaria</span>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Inmuebles Elite</h3>
                  <p className="text-slate-600 text-sm mb-8 flex-grow">Portal con filtros dinámicos en tiempo real sin recargar la página, y mapas interactivos integrados para explorar las zonas.</p>
                  <div className="flex flex-col gap-3 mt-auto">
                    <Link href="/demos/inmobiliaria" className="text-center bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold py-2.5 rounded-lg transition">Ver Demo en Vivo</Link>
                    <Link href="#contacto" className="text-center border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium py-2.5 rounded-lg transition">Solicitar una Solución Similar</Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white group flex flex-col h-full">
                <div className="bg-slate-100 h-56 relative flex items-center justify-center border-b border-slate-200">
                  <div className="text-center flex flex-col items-center">
                    <ShoppingBag className="w-10 h-10 text-slate-300 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-slate-400 font-medium text-sm">Mockup visual (Teléfono y Laptop)</p>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="inline-block self-start text-xs font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full uppercase tracking-wider mb-4">Demo E-commerce</span>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Moda Local - Tienda a Medida</h3>
                  <p className="text-slate-600 text-sm mb-8 flex-grow">Tienda online con gestión de variantes de productos (tallas, colores) y checkout optimizado con pasarela de pago.</p>
                  <div className="flex flex-col gap-3 mt-auto">
                    <Link href="/demos/ecommerce" className="text-center bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold py-2.5 rounded-lg transition">Ver Demo en Vivo</Link>
                    <Link href="#contacto" className="text-center border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium py-2.5 rounded-lg transition">Solicitar una Solución Similar</Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Propuesta de Valor */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Desarrollo moderno, rápido y a tu medida</h2>
              <p className="text-slate-400 text-lg">Por qué esta es la mejor opción frente a agencias tradicionales o constructores genéricos como WordPress.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <ScrollReveal delay={0.2} direction="right">
              <div className="flex">
                <div className="flex-shrink-0 mr-5 text-blue-400">
                  <Zap className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Carga Ultrarrápida (SPAs)</h4>
                  <p className="text-slate-400 leading-relaxed">Tu sitio web o app cargará al instante, mejorando dramáticamente la experiencia de tu cliente y favoreciendo tu posicionamiento en Google.</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3} direction="left">
              <div className="flex">
                <div className="flex-shrink-0 mr-5 text-green-400">
                  <Timer className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Tiempos de Entrega Rápida</h4>
                  <p className="text-slate-400 leading-relaxed">Gracias a metodologías ágiles y tecnologías de vanguardia, ponemos en marcha tu proyecto en tiempo récord.</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4} direction="right">
              <div className="flex">
                <div className="flex-shrink-0 mr-5 text-orange-400">
                  <PiggyBank className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Cero Cuotas Ocultas</h4>
                  <p className="text-slate-400 leading-relaxed">El sitio web es 100% tuyo. Sin depender de plataformas con suscripciones costosas mes a mes ni cobros de comisiones por cada venta.</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.5} direction="left">
              <div className="flex">
                <div className="flex-shrink-0 mr-5 text-purple-400">
                  <Handshake className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Acompañamiento Directo</h4>
                  <p className="text-slate-400 leading-relaxed">Tratas directamente con el desarrollador. Sin intermediarios, sin ejecutivos de cuentas y sin demoras en la comunicación.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Proceso */}
      <section id="proceso" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Proceso de Trabajo</h2>
              <p className="text-slate-600 text-lg">Simplicidad y transparencia. Así es como llevamos tu idea a la realidad.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-slate-200 z-0"></div>
            
            <ScrollReveal delay={0.2}>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-blue-200 border-4 border-slate-50 transition-transform duration-300 hover:scale-110">1</div>
                <h4 className="text-lg font-bold mb-3 text-slate-900">Llamada Corta <br/>(15 min)</h4>
                <p className="text-slate-600 text-sm leading-relaxed px-2">Analizamos las necesidades de tu negocio y elegimos la mejor solución que encaje.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-blue-200 border-4 border-slate-50 transition-transform duration-300 hover:scale-110">2</div>
                <h4 className="text-lg font-bold mb-3 text-slate-900">Propuesta y <br/>Prototipo</h4>
                <p className="text-slate-600 text-sm leading-relaxed px-2">Definimos el alcance, los tiempos y mostramos una demo de la estructura a construir.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-blue-200 border-4 border-slate-50 transition-transform duration-300 hover:scale-110">3</div>
                <h4 className="text-lg font-bold mb-3 text-slate-900">Desarrollo y <br/>Ajustes</h4>
                <p className="text-slate-600 text-sm leading-relaxed px-2">Construimos la aplicación web, garantizando rapidez y realizamos todas las pruebas.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.5}>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-blue-200 border-4 border-slate-50 transition-transform duration-300 hover:scale-110">4</div>
                <h4 className="text-lg font-bold mb-3 text-slate-900">Lanzamiento y <br/>Entrega</h4>
                <p className="text-slate-600 text-sm leading-relaxed px-2">Conectamos tu dominio, activamos los pagos y te enseñamos a administrar tu sitio.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Preguntas Frecuentes</h2>
              <p className="text-slate-600">Resolvemos las dudas comunes para que tomes la mejor decisión.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="space-y-4">
              <details className="group bg-slate-50 p-6 rounded-2xl border border-slate-200 cursor-pointer transition hover:bg-slate-100">
                <summary className="flex justify-between items-center font-semibold text-lg text-slate-900 list-none">
                  ¿Cuánto tiempo tarda en estar lista mi web o app?
                  <span className="transition-transform duration-300 group-open:-rotate-180 text-blue-600">
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <p className="text-slate-600 mt-4 leading-relaxed pt-2 border-t border-slate-200">
                  Los proyectos de página web o menú digital suelen estar listos en 1 a 2 semanas. Proyectos más complejos de e-commerce o portales inmobiliarios toman entre 2 y 4 semanas.
                </p>
              </details>
              
              <details className="group bg-slate-50 p-6 rounded-2xl border border-slate-200 cursor-pointer transition hover:bg-slate-100">
                <summary className="flex justify-between items-center font-semibold text-lg text-slate-900 list-none">
                  ¿Necesito saber de programación para administrar mi página?
                  <span className="transition-transform duration-300 group-open:-rotate-180 text-blue-600">
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <p className="text-slate-600 mt-4 leading-relaxed pt-2 border-t border-slate-200">
                  Para nada. Te entregamos un panel muy sencillo e intuitivo para actualizar precios, productos o propiedades en segundos. Además, incluyo una capacitación corta.
                </p>
              </details>
              
              <details className="group bg-slate-50 p-6 rounded-2xl border border-slate-200 cursor-pointer transition hover:bg-slate-100">
                <summary className="flex justify-between items-center font-semibold text-lg text-slate-900 list-none">
                  ¿Qué incluye el mantenimiento mensual?
                  <span className="transition-transform duration-300 group-open:-rotate-180 text-blue-600">
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <p className="text-slate-600 mt-4 leading-relaxed pt-2 border-t border-slate-200">
                  Nos encargamos de mantener el servidor activo, realizar respaldos de seguridad, gestionar la renovación del dominio y hacer pequeños cambios que necesites mes a mes, para que no te preocupes por temas técnicos.
                </p>
              </details>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Contacto */}
      <section id="contacto" className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">¿Listo para llevar tu negocio al siguiente nivel?</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">Agenda una llamada gratuita de 15 minutos o envíame un mensaje directo. Conversemos sobre tu proyecto sin ningún compromiso.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid lg:grid-cols-5 gap-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <ScrollReveal direction="right" delay={0.2} className="lg:col-span-2 bg-gradient-to-br from-blue-700 to-blue-900 text-white p-10 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-8">Contacto directo</h3>
              
              <Link href="https://wa.me/573117915164?text=Hola,%20me%20interesa%20una%20página%20web" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition mb-4 shadow-lg shadow-green-900/20 hover:-translate-y-1">
                <MessageCircle className="w-6 h-6" />
                <span className="text-lg">Hablar por WhatsApp</span>
              </Link>

              <a href="mailto:rjracer007@gmail.com" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl transition mb-8 border border-white/20 hover:-translate-y-1">
                <Mail className="w-5 h-5" />
                <span>rjracer007@gmail.com</span>
              </a>
              
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 mt-auto backdrop-blur-sm">
                <h4 className="font-bold mb-2 text-lg flex items-center"><CalendarCheck className="w-5 h-5 mr-3 text-blue-300" /> Agenda en línea</h4>
                <p className="text-blue-100 mb-5 text-sm leading-relaxed">Reserva un espacio en mi calendario que mejor te acomode a través de Calendly.</p>
                <Link href="https://calendly.com/rjracer007" target="_blank" rel="noopener noreferrer" className="block w-full bg-white/20 hover:bg-white/30 text-white text-center p-3 rounded-xl font-medium transition hover:scale-105">
                  Agendar Llamada
                </Link>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.3} className="lg:col-span-3 p-10 lg:p-14">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Déjame tus datos</h3>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="font-bold text-2xl tracking-tight text-white mb-2 block">DevPortfolio.</span>
          <p className="mb-4 text-sm text-slate-500">&copy; {new Date().getFullYear()} Estiven Garcia Piedrahita. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4">
            <Link href="https://www.linkedin.com/in/estivengarciapiedrahita/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition hover:scale-110"><Linkedin className="w-5 h-5" /></Link>
            <Link href="https://github.com/rjracer007" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition hover:scale-110"><Github className="w-5 h-5" /></Link>
            <Link href="https://www.instagram.com/ztv07/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition hover:scale-110"><Instagram className="w-5 h-5" /></Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
