import { motion } from 'framer-motion';

const Hero = () => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    >
        <div className="px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:leading-none lg:text-5xl xl:text-6xl text-white opacity-80">
                Effortless React testing
            </h1>

            <p className="mt-3 text-base mb-28 sm:mt-5 sm:text-xl lg:text-lg xl:text-3xl lg:mx-40 text-white opacity-80">
                App Actions is a next generation testing tool for React:
                declarative interface, low maintenance, test recording, enhanced
                stability, incremental adaptation. Supports all React renderers,
                including{' '}
                <span className="whitespace-nowrap">react-three-fiber.</span>
            </p>
        </div>
    </motion.section>
);

export default Hero;
