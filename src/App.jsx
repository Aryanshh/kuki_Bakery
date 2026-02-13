```javascript
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
        <p className="text-sm opacity-70">© {new Date().getFullYear()} Kuki's Bakery. All rights reserved.</p>
      </footer>

      <OrderButton onClick={() => setIsOrderOpen(true)} />
      <OrderModal isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
    </div>
  );
}

export default App;
```
