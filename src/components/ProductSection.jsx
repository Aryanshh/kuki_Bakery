import { motion } from 'framer-motion';

export default function ProductSection({ title, description, image, align = 'left', color = 'bg-white' }) {
    // align 'left' means text left, image right.
    // wait, usually "left" means image on left.
    // Let's standard: align='left' -> Image Left, Text Right.

    return (
        <section className={`min-h-[80vh] flex items-center justify-center py-20 ${color}`}>
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                {align === 'left' ? (
                    <>
                        <ImageBlock image={image} />
                        <TextBlock title={title} description={description} />
                    </>
                ) : (
                    <>
                        <TextBlock title={title} description={description} align="right" />
                        <ImageBlock image={image} />
                    </>
                )}
            </div>
        </section>
    );
}

const ImageBlock = ({ image }) => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex-1 w-full"
    >
        <div className="relative group">
            <div className="absolute inset-0 bg-accent rounded-3xl rotate-3 opacity-20 transition-transform group-hover:rotate-6"></div>
            <img
                src={image}
                alt="Bakery Item"
                className="w-full h-[400px] object-cover rounded-3xl shadow-xl relative z-10 transform transition-transform group-hover:scale-105"
            />
        </div>
    </motion.div>
);

const TextBlock = ({ title, description, align = 'left' }) => (
    <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`flex-1 text-${align} md:text-left`}
    >
        <h3 className="text-6xl font-black text-accent mb-6 leading-tight">{title}</h3>
        <p className="text-xl text-accent-light leading-relaxed mb-8">{description}</p>
        <button className="px-8 py-3 bg-primary text-accent font-bold rounded-full hover:bg-primary-dark transition shadow-lg transform hover:-translate-y-1">
            View {title}
        </button>
    </motion.div>
);
