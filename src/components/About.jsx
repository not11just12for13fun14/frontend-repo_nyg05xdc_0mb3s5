import React from 'react';
import { Leaf, Hand } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900">Our Story</h2>
          <p className="mt-4 text-amber-800/85 leading-relaxed">
            Auric Candle Co. began with a simple ritual: lighting a candle at dusk to welcome calm. We craft with intention—natural soy wax, lead‑free cotton wicks, and premium, phthalate‑free oils—so every glow feels clean, warm, and truly luxurious.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40">
              <div className="inline-flex items-center gap-2 text-amber-900 font-semibold"><Leaf size={18}/> Clean Ingredients</div>
              <p className="mt-1 text-sm text-amber-800/80">100% soy wax, no dyes unless requested, and responsibly sourced oils.</p>
            </div>
            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40">
              <div className="inline-flex items-center gap-2 text-amber-900 font-semibold"><Hand size={18}/> Hand‑Poured</div>
              <p className="mt-1 text-sm text-amber-800/80">Small batches for consistent quality and a beautiful, even burn.</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-100 border border-amber-200 shadow-inner p-6">
            <div className="h-full w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2OTY2NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
