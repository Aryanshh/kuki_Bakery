import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-secondary">
            {/* Decorative Blob */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute w-[500px] h-[500px] bg-primary rounded-full blur-3xl opacity-50"
            />

            <div className="z-10 text-center">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-8xl font-black text-accent drop-shadow-lg"
                >
                    Kuki's
                </motion.h1>
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-4xl font-bold text-primary-dark mt-2 tracking-widest"
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
