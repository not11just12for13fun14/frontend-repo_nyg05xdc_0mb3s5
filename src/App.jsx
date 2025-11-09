import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-inter bg-white text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-amber-200 bg-amber-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 text-sm text-amber-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Auric Candle Co. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-amber-700">About</a>
            <a href="#products" className="hover:text-amber-700">Shop</a>
            <a href="#contact" className="hover:text-amber-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
