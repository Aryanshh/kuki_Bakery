import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Gallery from './components/Gallery';
import OrderButton from './components/OrderButton';

function App() {
  const products = [
    {
      title: "Celebration Cakes",
      description: "Handcrafted layers of joy for every occasion. Our cakes are baked with love and decorated to perfection to make your special moments even sweeter.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "bg-white",
      align: "left"
    },
    {
      title: "Fudgy Brownies",
      description: "Rich, dense, and dangerously chocolatey. These brownies are the ultimate comfort food, made with premium cocoa and melted chocolate chunks.",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "bg-secondary",
      align: "right"
    },
    {
      title: "Signature Cookies",
      description: "Crispy edges, chewy centers, pure bliss. From classic chocolate chip to adventurous new flavors, our cookies are baked fresh daily.",
      image: "https://images.unsplash.com/photo-1499636138143-bd649025ebeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "bg-white",
      align: "left"
    },
    {
      title: "Artisan Cupcakes",
      description: "Little bites of heaven with buttercream swirls. Perfect for parties or a personal treat, our cupcakes come in a variety of delightful flavors.",
      image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "bg-secondary",
      align: "right"
    },
    {
      title: "Premium Chocolates",
      description: "Smooth, velvety, and ethically sourced cocoa. Experience the luxury of fine chocolate, crafted into elegant truffles and bars.",
      image: "https://images.unsplash.com/photo-1511381971708-e5e641c75543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "bg-white",
      align: "left"
    }
  ];

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
      </main>

      <footer className="bg-accent text-secondary py-12 text-center">
        <h2 className="text-3xl font-heading mb-4">Kuki's Bakery</h2>
        <p className="mb-4">Baking the world a better place, one crumb at a time.</p>
        <p className="text-sm opacity-70">© {new Date().getFullYear()} Kuki's Bakery. All rights reserved.</p>
      </footer>

      <OrderButton />
    </div>
  );
}

export default App;
