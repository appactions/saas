import { faqs } from 'misc/faq';
import { motion } from 'framer-motion';

const container = {
    // hidden: { opacity: 0 },
    show: {
        // opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },
};

const Questions = () => (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="my-4 text-4xl font-slab text-gray md:text-5xl lg:text-6xl">
            Frequently asked questions
        </h2>
        <div className="mt-8">
            <motion.dl
                className="divide-y divide-gray-200"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
            >
                {faqs.map((faq, index) => (
                    <motion.li
                        variants={item}
                        key={index}
                        className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
                    >
                        <dt className="text-base font-medium text-gray-900 md:col-span-5">
                            {faq.question}
                        </dt>
                        <dd className="mt-2 md:mt-0 md:col-span-7">
                            <p className="text-base text-gray-500">
                                {faq.answer}
                            </p>
                        </dd>
                    </motion.li>
                ))}
            </motion.dl>
        </div>
    </section>
);

export default Questions;
