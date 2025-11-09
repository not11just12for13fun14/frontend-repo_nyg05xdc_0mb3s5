import React from 'react';
import { Candle, ShoppingBag, Phone, Info, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-amber-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 text-white shadow">
            <Candle size={18} />
          </span>
          <div className="leading-tight">
            <p className="font-semibold tracking-wide text-amber-800">Auric Candle Co.</p>
            <p className="text-xs text-amber-700/70">Hand-poured luxury</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-amber-900">
          <a href="#home" className="hover:text-amber-700 inline-flex items-center gap-1"><Home size={16}/> Home</a>
          <a href="#products" className="hover:text-amber-700 inline-flex items-center gap-1"><ShoppingBag size={16}/> Products</a>
          <a href="#about" className="hover:text-amber-700 inline-flex items-center gap-1"><Info size={16}/> About</a>
          <a href="#contact" className="hover:text-amber-700 inline-flex items-center gap-1"><Phone size={16}/> Contact</a>
        </nav>

        <a href="#products" className="md:inline-flex hidden rounded-full bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 text-amber-950 px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition-shadow">
          Shop Candles
        </a>
      </div>
    </header>
  );
};

export default Navbar;
