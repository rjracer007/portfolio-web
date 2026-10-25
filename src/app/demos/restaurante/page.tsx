"use client";
import { useState } from 'react';
import { Minus, Plus, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function RestauranteDemo() {
  const [cart, setCart] = useState<{[key: number]: number}>({});
  
  const menu = [
    { id: 1, name: "Hamburguesa Clásica", price: 12.99, desc: "Carne de res 200g, queso cheddar, lechuga, tomate y salsa secreta." },
    { id: 2, name: "Pizza Margarita", price: 14.50, desc: "Salsa de tomate artesanal, mozzarella fresca y albahaca." },
    { id: 3, name: "Tacos al Pastor (3)", price: 9.99, desc: "Cerdo marinado, piña, cebolla, cilantro y salsas." },
    { id: 4, name: "Limonada Natural", price: 3.50, desc: "Refrescante limonada endulzada con stevia o azúcar." }
  ];

  const addToCart = (id: number) => {
    setCart(prev => ({...prev, [id]: (prev[id] || 0) + 1}));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => {
      const newCart = {...prev};
      if (newCart[id] > 1) {
        newCart[id]--;
      } else {
        delete newCart[id];
      }
      return newCart;
    });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(cart).reduce((total, [id, qty]) => {
    const item = menu.find(m => m.id === parseInt(id));
    return total + (item ? item.price * qty : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-slate-50 max-w-md mx-auto shadow-2xl relative pb-24">
      {/* Header */}
      <header className="bg-orange-600 text-white p-4 sticky top-0 z-10 flex items-center shadow-md">
        <Link href="/#demos" className="mr-4"><ChevronLeft /></Link>
        <div>
          <h1 className="font-bold text-xl">Sabor & Arte</h1>
          <p className="text-xs text-orange-200">Abierto hasta las 11:00 PM</p>
        </div>
      </header>

      {/* Menu Categories */}
      <div className="flex gap-4 p-4 overflow-x-auto bg-white border-b sticky top-[72px] z-10 scrollbar-hide">
        <button className="px-4 py-1.5 bg-orange-100 text-orange-700 font-medium rounded-full text-sm whitespace-nowrap">Principales</button>
        <button className="px-4 py-1.5 text-slate-500 font-medium rounded-full text-sm whitespace-nowrap">Bebidas</button>
        <button className="px-4 py-1.5 text-slate-500 font-medium rounded-full text-sm whitespace-nowrap">Postres</button>
      </div>

      {/* Menu Items */}
      <div className="p-4 space-y-4">
        {menu.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm flex gap-4">
            <div className="w-24 h-24 bg-slate-200 rounded-xl flex-shrink-0 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80")'}}></div>
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-800 leading-tight">{item.name}</h3>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1">{item.desc}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold text-orange-600">${item.price.toFixed(2)}</span>
                
                {cart[item.id] ? (
                  <div className="flex items-center gap-3 bg-slate-100 rounded-full px-2 py-1">
                    <button onClick={() => removeFromCart(item.id)} className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-sm"><Minus className="w-4 h-4" /></button>
                    <span className="text-sm font-medium">{cart[item.id]}</span>
                    <button onClick={() => addToCart(item.id)} className="w-6 h-6 flex items-center justify-center bg-orange-600 text-white rounded-full shadow-sm"><Plus className="w-4 h-4" /></button>
                  </div>
                ) : (
                  <button onClick={() => addToCart(item.id)} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-orange-200 transition">Agregar</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Cart Button */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 left-0 right-0 px-4 max-w-md mx-auto z-20 animate-fade-in-up">
          <button className="w-full bg-orange-600 text-white rounded-2xl p-4 shadow-xl flex justify-between items-center hover:bg-orange-700 transition" onClick={() => alert("Simulando apertura del carrito. El botón 'Pedir por WhatsApp' estaría aquí.")}>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </div>
              <span className="font-bold">Ver pedido</span>
            </div>
            <span className="font-bold">${totalPrice.toFixed(2)}</span>
          </button>
        </div>
      )}
    </div>
  );
}
