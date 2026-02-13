import { useState } from 'react';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Gallery from './components/Gallery';
import OrderButton from './components/OrderButton';
import FeedbackSection from './components/FeedbackSection';
import OrderModal from './components/OrderModal';
import { products } from './data/products';

function App() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  return (
    <div className="font-body text-accent bg-secondary min-h-screen">
      <Hero />

      <main>
        {products.map((product, index) => (
          <ProductSection
            key={index}
            {...product}
          />
        ))}

        <Gallery />
        <FeedbackSection />
      </main>

      <footer className="bg-accent text-secondary py-12 text-center">
        <h2 className="text-3xl font-heading mb-4">Kuki's Bakery</h2>
        <p className="mb-4">Baking the world a better place, one crumb at a time.</p>
        <a
          href="https://www.instagram.com/k.u.k.i.sbakery?igsh=YzNmN29pZzNoaXU1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-6 text-primary hover:text-white transition-colors transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <p className="text-sm opacity-70">© {new Date().getFullYear()} Kuki's Bakery. All rights reserved.</p>
      </footer>

      <OrderButton onClick={() => setIsOrderOpen(true)} />
      <OrderModal isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
    </div>
  );
}

export default App;
