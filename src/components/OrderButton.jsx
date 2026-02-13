import { motion } from 'framer-motion';

export default function OrderButton({ onClick }) {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed top-8 right-8 z-50 bg-accent text-white font-bold py-4 px-8 rounded-full shadow-2xl flex items-center gap-3 hover:bg-black transition-colors"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 2, type: 'spring' }}
        >
            <span className="text-xl">🍪</span>
            <span>Order Now</span>
        </motion.button>
    );
}
