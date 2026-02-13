import { motion } from 'framer-motion';

const images = [
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Cake
    'https://images.unsplash.com/photo-1606313564200-e75d5e30476d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Brownie
    'https://images.unsplash.com/photo-1499636138143-bd649025ebeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Cookie
    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Croissant
    'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Cupcake
    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Pie
];

export default function Gallery() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    className="text-5xl font-black text-accent text-center mb-16"
                >
                    Sweet Gallery
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-2xl shadow-lg aspect-square group cursor-pointer"
                        >
                            <img
                                src={src}
                                alt={`Gallery ${index}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    View Delight
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
