import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-100/70 via-white to-white pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
            <Sparkles size={16} />
            <span className="text-xs font-medium">New: Gilded Sandalwood Collection</span>
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-amber-900">
            Hand‑Poured Luxury Candles
          </h1>
          <p className="mt-4 text-amber-800/80 text-lg leading-relaxed">
            Elevate your rituals with rich aromas and a warm golden glow. Crafted in small batches with natural soy wax, cotton wicks, and premium oils.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="rounded-full bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 text-amber-950 px-6 py-3 font-semibold shadow hover:shadow-lg transition-shadow">
              Explore Products
            </a>
            <a href="#about" className="rounded-full border border-amber-300 text-amber-900 px-6 py-3 font-semibold hover:bg-amber-50 transition-colors">
              Our Story
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-100 border border-amber-200 shadow-inner p-6">
            <div className="h-full w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-amber-200/70 blur-2xl" />
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-yellow-300/60 blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
