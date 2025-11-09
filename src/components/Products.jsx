import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Gilded Sandalwood',
    desc: 'Velvety sandalwood with amber resin and a whisper of vanilla.',
    price: '$28',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Champagne Fig',
    desc: 'Sparkling citrus over ripe fig and golden musk.',
    price: '$28',
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'White Linen',
    desc: 'Clean cotton, soft iris, and creamy tonka for a serene aura.',
    price: '$26',
    image: 'https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXaGl0ZSUyMExpbmVufGVufDB8MHx8fDE3NjI3MDM4MTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900">Our Signature Collection</h2>
            <p className="mt-2 text-amber-800/80">Gold‑kissed vessels, clean burns, unforgettable scent throw.</p>
          </div>
          <div className="hidden md:flex items-center gap-1 text-amber-800/70">
            <Star className="fill-amber-400 text-amber-400" size={16} />
            <span className="text-sm">Hand‑poured in small batches</span>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl overflow-hidden border border-amber-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src={p.image} alt={p.name} className="h-64 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-amber-900 font-semibold text-lg">{p.name}</h3>
                <p className="mt-1 text-amber-800/80 text-sm">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-amber-900 font-bold">{p.price}</span>
                  <button className="rounded-full bg-amber-500/90 hover:bg-amber-500 text-amber-950 px-4 py-2 text-sm font-semibold shadow">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
