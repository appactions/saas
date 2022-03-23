import Link from 'next/link';
import {
    ArrowSquareUpRight,
    ArrowsIn,
    Article,
    Atom,
    CaretRight,
    Clock,
    Code,
    Rainbow,
    ShieldCheckered,
    Student,
    VideoCamera,
} from 'phosphor-react';
import FeatureHeader from './feature-header';
import { motion } from 'framer-motion';

const container = {
    // hidden: { opacity: 0 },
    show: {
        // opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const Features = () => (
    <section className="bg-white">
        <div className="max-w-screen-2xl mx-auto xl:px-10 lg:px-32 md:px-20 sm:px-12 px-5 py-10 md:py-12 lg:py-14 xl:py-18">
            <article className="w-full sm:border-gray-500 !pt-0">
                <div className="lg:flex">
                    <FeatureHeader
                        icon={<Atom className="mr-4 w-12 sm:w-20 h-auto sm:mr-0" />}
                        title="Built for developers"
                        ctaHref="https://docs.appactions.com/#innovation"
                    />
                    <motion.div
                        className="mt-6 lg:w-4/6 grid sm:grid-cols-2 gap-10 md:gap-16 sm:mt-20 lg:mt-0 lg:ml-20 flex-shrink-0"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={item}>
                            <div className="font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <ArrowsIn size={32} />
                                    </div>
                                    All React renderers
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    In React apps, your choice of the renderer is just an implementation detail. So is
                                    in App Actions. We support all renderers, including react-three-fiber.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div variants={item}>
                            <div className="font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Article size={32} />
                                    </div>
                                    Declarative interface
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    React is declarative; your tests should be too. App Actions tests use a declarative
                                    YAML format, making tests cleaner, easier to maintain, and more powerful test
                                    recording.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={item}>
                            <div className="font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Clock size={32} />
                                    </div>
                                    Low maintenance
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    E2E tests traditionally required a lot of maintenance. We figured out a way to
                                    separate implementation details from the test declaration better. This results in
                                    future-proof tests that only need your attention when UX changes.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div variants={item}>
                            <div className="font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Code size={32} />
                                    </div>
                                    Result is code
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    We believe test recorders shouldn't create a walled garden; the output should be
                                    high-quality code that you can check into your version control system.
                                </p>
                            </div>
                        </motion.div>
                        <div className="mt-2 sm:mt-12">
                            {/* <Link href="https://docs.appactions.com/#innovation">
                                <a className="sm:hidden py-3 px-4 text-center whitespace-nowrap flex items-center font-medium leading-6 rounded-md transition duration-150 ease-in-out sm:flex-shrink-0 inline-flex items-center sm:w-auto focus:outline-none focus:ring bg-brand-green hover:opacity-85 text-lg text-white hover:opacity-85 ring-green-400">
                                    Learn more <CaretRight className="ml-2" />
                                </a>
                            </Link> */}
                        </div>
                    </motion.div>
                </div>
            </article>

            <hr className="hidden sm:block mt-4 h-0.5 bg-gradient-to-r from-[#CA3CFF] to-[#EC7D10]" />

            <article className="w-full mt-20 sm:mt-40">
                <div className="lg:flex">
                    <FeatureHeader
                        icon={<Rainbow className="mr-4 w-12 sm:w-20 h-auto sm:mr-0" />}
                        title="Great for testers"
                        ctaHref="https://docs.appactions.com/#for-developers"
                    />

                    <motion.div
                        className="mt-6 lg:w-4/6 grid sm:grid-cols-2 gap-10 md:gap-16 sm:mt-20 lg:mt-0 lg:ml-20 flex-shrink-0"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={item}>
                            <div className="font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <VideoCamera size={32} />
                                    </div>
                                    Test recording
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    Writing tests is boring; let's record them. Thanks to our declarative interface, the
                                    output is easy to read and maintain.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div variants={item}>
                            <div className="font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <ShieldCheckered size={32} />
                                    </div>
                                    Enhanced stability
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    Integrating with React has a serious benefit: the test runner can make informed
                                    decisions based on your app's state, making significantly more stable tests.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div variants={item}>
                            <div className="font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <ArrowSquareUpRight size={32} />
                                    </div>
                                    Incremental adaptation
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    App Actions composes great with Cypress. Gradually migration will be a breeze if you
                                    already have a Cypress codebase.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div variants={item}>
                            <div className="font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Student size={32} />
                                    </div>
                                    Gentle learning curve
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    There is no need to learn extensive APIs; test writing happens by an intuitive test
                                    recorder.
                                </p>
                            </div>
                        </motion.div>
                        <div className="mt-2 sm:mt-12">
                            {/* <Link href="https://docs.appactions.com/#for-developers">
                                <a className="sm:hidden py-3 px-4 text-center whitespace-nowrap flex items-center font-medium leading-6 rounded-md transition duration-150 ease-in-out sm:flex-shrink-0 inline-flex items-center sm:w-auto focus:outline-none focus:ring bg-brand-green text-lg text-white ring-green-400 hover:opacity-80">
                                    Learn more <CaretRight className="ml-2" />
                                </a>
                            </Link> */}
                        </div>
                    </motion.div>
                </div>
            </article>

            <hr className="hidden sm:block mt-4 h-0.5 bg-gradient-to-r from-[#CA3CFF] to-[#EC7D10]" />
        </div>
    </section>
);

export default Features;
