import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks for reaching out! We will get back to you shortly.');
  };

  return (
    <section id="contact" className="py-20 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900">Contact Us</h2>
            <p className="mt-3 text-amber-800/85">Whether it's a custom scent or wholesale inquiry, we'd love to hear from you.</p>
            <div className="mt-6 space-y-3 text-amber-900">
              <p className="inline-flex items-center gap-2"><Mail size={18}/> hello@auriccandles.com</p>
              <p className="inline-flex items-center gap-2"><Phone size={18}/> +1 (555) 012‑3456</p>
              <p className="inline-flex items-center gap-2"><MapPin size={18}/> 18 Golden Lane, Aurora City</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-amber-200 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-amber-800/80 mb-1">First name</label>
                <input required type="text" className="w-full rounded-lg border border-amber-300/80 bg-amber-50/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div>
                <label className="block text-sm text-amber-800/80 mb-1">Last name</label>
                <input required type="text" className="w-full rounded-lg border border-amber-300/80 bg-amber-50/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-amber-800/80 mb-1">Email</label>
                <input required type="email" className="w-full rounded-lg border border-amber-300/80 bg-amber-50/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-amber-800/80 mb-1">Message</label>
                <textarea required rows={4} className="w-full rounded-lg border border-amber-300/80 bg-amber-50/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
            </div>
            <button type="submit" className="mt-4 w-full rounded-full bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 text-amber-950 px-6 py-3 font-semibold shadow hover:shadow-md transition-shadow">Send Message</button>
            {status && <p className="mt-3 text-amber-800/90">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
