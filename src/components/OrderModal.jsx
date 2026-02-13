import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';

export default function OrderModal({ isOpen, onClose }) {
    const [step, setStep] = useState('selection'); // selection, details, confirming, success
    const [cart, setCart] = useState({});
    const [formData, setFormData] = useState({ name: '', whatsapp: '' });

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setStep('selection');
            setCart({});
            setFormData({ name: '', whatsapp: '' });
        }
    }, [isOpen]);

    const updateQuantity = (id, change) => {
        setCart(prev => {
            const current = prev[id] || 0;
            const next = Math.max(0, current + change);
            if (next === 0) {
                const { [id]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [id]: next };
        });
    };

    const totalAmount = Object.entries(cart).reduce((sum, [id, qty]) => {
        const product = products.find(p => p.id === parseInt(id));
        return sum + (product?.price || 0) * qty;
    }, 0);

    const handleConfirm = () => {
        if (!formData.name || !formData.whatsapp) {
            alert("Please fill in your details!");
            return;
        }
        setStep('confirming');

        // Simulate API call / Animation delay
        setTimeout(() => {
            setStep('success');
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                    onClick={onClose}
                />

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
                >
                    {/* Header */}
                    <div className="bg-primary p-6 text-center relative">
                        <h2 className="text-2xl font-heading text-white font-bold">
                            {step === 'success' ? 'Order Confirmed!' : 'Place Your Order'}
                        </h2>
                        {step !== 'success' && (
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    <div className="p-6 overflow-y-auto flex-1">
                        {step === 'selection' && (
                            <div className="space-y-4">
                                <p className="text-accent text-center mb-4">Select your treats:</p>
                                {products.map(product => (
                                    <div key={product.id} className="flex items-center justify-between border-b border-secondary pb-4 last:border-0">
                                        <div className="flex items-center gap-3">
                                            <img src={product.image} alt={product.title} className="w-12 h-12 rounded-lg object-cover" />
                                            <div>
                                                <h4 className="font-bold text-accent">{product.title}</h4>
                                                <p className="text-sm text-gray-500">${product.price}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 bg-secondary rounded-full px-3 py-1">
                                            <button
                                                onClick={() => updateQuantity(product.id, -1)}
                                                className="text-accent font-bold w-6 h-6 flex items-center justify-center hover:bg-white rounded-full transition"
                                            >
                                                -
                                            </button>
                                            <span className="font-bold text-accent w-4 text-center">{cart[product.id] || 0}</span>
                                            <button
                                                onClick={() => updateQuantity(product.id, 1)}
                                                className="text-accent font-bold w-6 h-6 flex items-center justify-center hover:bg-white rounded-full transition"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                <div className="pt-4 mt-4 border-t-2 border-primary border-dashed">
                                    <div className="flex justify-between items-center text-xl font-bold text-accent">
                                        <span>Total:</span>
                                        <span>${totalAmount}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => totalAmount > 0 ? setStep('details') : alert("Please select an item!")}
                                    className="w-full bg-accent text-white font-bold py-3 rounded-xl mt-4 hover:bg-opacity-90 transition shadow-lg"
                                >
                                    Next
                                </button>
                            </div>
                        )}

                        {step === 'details' && (
                            <div className="space-y-4">
                                <div className="bg-secondary p-4 rounded-xl mb-6">
                                    <h4 className="font-bold text-accent mb-2">Order Summary</h4>
                                    {Object.entries(cart).map(([id, qty]) => {
                                        const p = products.find(x => x.id == id);
                                        return (
                                            <div key={id} className="flex justify-between text-sm text-accent-light">
                                                <span>{p.title} x {qty}</span>
                                                <span>${p.price * qty}</span>
                                            </div>
                                        )
                                    })}
                                    <div className="border-t border-accent border-opacity-20 mt-2 pt-2 flex justify-between font-bold text-accent">
                                        <span>Total</span>
                                        <span>${totalAmount}</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="block">
                                        <span className="text-accent font-bold">Your Name</span>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full mt-1 p-3 border-2 border-secondary rounded-xl focus:border-primary outline-none"
                                            placeholder="e.g. Cookie Monster"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="text-accent font-bold">WhatsApp Number</span>
                                        <input
                                            type="tel"
                                            value={formData.whatsapp}
                                            onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                                            className="w-full mt-1 p-3 border-2 border-secondary rounded-xl focus:border-primary outline-none"
                                            placeholder="+1 234 567 8900"
                                        />
                                    </label>
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <button
                                        onClick={() => setStep('selection')}
                                        className="flex-1 bg-gray-200 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-300 transition"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={handleConfirm}
                                        className="flex-1 bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-dark transition shadow-lg"
                                    >
                                        Confirm Order
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 'confirming' && (
                            <div className="flex flex-col items-center justify-center py-10">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mb-4"
                                />
                                <p className="text-accent font-bold">Processing your sweetness...</p>
                            </div>
                        )}

                        {step === 'success' && (
                            <div className="text-center py-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl"
                                >
                                    ✓
                                </motion.div>
                                <h3 className="text-2xl font-bold text-accent mb-2">Order Confirmed!</h3>
                                <p className="text-accent-light mb-6">Receipt shared to {formData.whatsapp}</p>

                                <div className="bg-secondary p-4 rounded-xl">
                                    <p className="text-sm font-bold text-accent">Payment details would be shared over WhatsApp</p>
                                </div>

                                <button
                                    onClick={onClose}
                                    className="w-full bg-primary text-white font-bold py-3 rounded-xl mt-8 hover:bg-primary-dark transition shadow-lg"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
