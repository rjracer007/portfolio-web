"use client";
import { useState } from 'react';
import { ShoppingBag, Heart, Search, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function EcommerceDemo() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 1, name: "Camiseta Básica Premium", price: 29.99, category: "Ropa" },
    { id: 2, name: "Zapatillas Urbanas", price: 89.50, category: "Calzado" },
    { id: 3, name: "Gafas de Sol Vintage", price: 45.00, category: "Accesorios" },
    { id: 4, name: "Mochila de Cuero", price: 110.00, category: "Accesorios" },
    { id: 5, name: "Sudadera con Capucha", price: 55.00, category: "Ropa" },
    { id: 6, name: "Reloj Minimalista", price: 125.00, category: "Accesorios" }
  ];

  return (
    <div className="min-h-screen bg-white pb-12">
      {/* Navbar */}
      <nav className="border-b px-6 py-4 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur z-20">
        <div className="flex items-center gap-4">
          <Link href="/#demos" className="text-slate-500 hover:text-slate-800"><ChevronLeft /></Link>
          <div className="font-bold text-2xl tracking-tighter">MODA LOCAL</div>
        </div>
        <div className="flex items-center gap-6 text-slate-700">
          <Search className="w-5 h-5 cursor-pointer hover:text-purple-600 transition" />
          <Heart className="w-5 h-5 cursor-pointer hover:text-purple-600 transition" />
          <div className="relative cursor-pointer group">
            <ShoppingBag className="w-5 h-5 group-hover:text-purple-600 transition" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Nueva Colección</h1>
            <p className="text-slate-500 mt-2">Encuentra tu estilo perfecto.</p>
          </div>
          <select className="border border-slate-200 text-sm rounded-lg px-4 py-2 outline-none cursor-pointer focus:border-purple-500 transition">
            <option>Más recientes</option>
            <option>Precio: Menor a Mayor</option>
            <option>Precio: Mayor a Menor</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map(p => (
            <div key={p.id} className="group">
              <div className="aspect-[3/4] bg-slate-100 rounded-2xl mb-4 relative overflow-hidden bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80")'}}>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition z-10">
                  <Heart className="w-4 h-4" />
                </button>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-end justify-center pb-6">
                  <button onClick={() => setCartCount(c => c+1)} className="bg-white text-slate-900 font-bold px-6 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition hover:bg-purple-600 hover:text-white">
                    Agregar
                  </button>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">{p.category}</p>
                <h3 className="font-semibold text-slate-900 truncate" title={p.name}>{p.name}</h3>
                <p className="font-bold text-slate-900 mt-1">${p.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
