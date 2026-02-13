import { motion } from 'framer-motion';
import { products } from '../data/products';

export default function Hero() {
    // Fallback images if product URLs are failing
    const brownieImg = "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&w=300&q=80";
    const cookieImg = "https://images.unsplash.com/photo-1499636138143-bd649025ebeb?auto=format&fit=crop&w=300&q=80";

    return (
        <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-secondary">
            {/* Decorative Blob */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute w-[500px] h-[500px] bg-primary rounded-full blur-3xl opacity-50"
            />

            {/* Floating Brownie (Top Leftish) */}
            <motion.div
                initial={{ opacity: 0, x: -100, rotate: -20 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -20, 0],
                    rotate: [-20, -10, -20]
                }}
                transition={{
                    opacity: { duration: 1, delay: 0.5 },
                    x: { duration: 1, delay: 0.5 },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-1/4 left-10 md:left-1/4 w-32 h-32 md:w-48 md:h-48 z-0 pointer-events-none drop-shadow-2xl"
            >
                <img src="/brownie.png" alt="Brownie" className="w-full h-full object-contain mix-blend-multiply" />
            </motion.div>

            {/* Floating Cookie (Bottom Rightish) */}
            <motion.div
                initial={{ opacity: 0, x: 100, rotate: 20 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, 20, 0],
                    rotate: [20, 30, 20]
                }}
                transition={{
                    opacity: { duration: 1, delay: 0.7 },
                    x: { duration: 1, delay: 0.7 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-1/4 right-10 md:right-1/4 w-28 h-28 md:w-40 md:h-40 z-0 pointer-events-none drop-shadow-2xl"
            >
                <img src="/donut.png" alt="Donut" className="w-full h-full object-contain" />
            </motion.div>

            <div className="z-10 text-center">
                <motion.h1
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                    className="text-8xl md:text-9xl font-black text-accent drop-shadow-lg font-heading leading-none"
                >
                    Kuki
                </motion.h1>
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-primary-dark tracking-[0.2em] mt-[-10px] font-heading"
                >
                    BAKERY
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-6 text-xl font-body text-accent-light"
                >
                    Cake • Brownie • Cookie • Cupcake • Chocolate
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 z-10 text-accent"
            >
                <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold mb-2">Scroll to Taste</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </motion.div>
        </section>
    );
}
