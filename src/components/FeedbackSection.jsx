import { motion } from 'framer-motion';

const reviews = [
    {
        name: "Sarah J.",
        comment: "The chocolate cupcakes are absolutely divine! Best I've ever had.",
        rating: 5,
        color: "bg-primary"
    },
    {
        name: "Mike T.",
        comment: "Ordered a birthday cake and it was a masterpiece. Highly recommend!",
        rating: 5,
        color: "bg-secondary"
    },
    {
        name: "Emily R.",
        comment: "Those cookies... I can't stop eating them. Crunchy and chewy perfection.",
        rating: 5,
        color: "bg-primary"
    },
    {
        name: "David L.",
        comment: "Fast delivery and beautiful packaging. A true premium experience.",
        rating: 4,
        color: "bg-secondary"
    }
];

export default function FeedbackSection() {
    return (
        <section className="py-20 bg-white bg-opacity-50">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-5xl font-black text-accent text-center mb-16"
                >
                    Love from Our Kuki Fans
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`${review.color} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2`}
                        >
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`text-xl ${i < review.rating ? 'text-accent' : 'text-gray-300'}`}>
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p className="text-accent text-lg mb-6 italic leading-relaxed">"{review.comment}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-accent">
                                    {review.name.charAt(0)}
                                </div>
                                <h4 className="font-bold text-accent text-lg">{review.name}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
