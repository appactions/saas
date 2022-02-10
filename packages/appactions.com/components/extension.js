import { motion } from 'framer-motion';
import { GlobeSimple } from 'phosphor-react';
import Line from './line';

const Extension = () => (
    <section>
        <div className="relative bg-white pb-16 overflow-hidden">
            <div className="relative">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-12 lg:max-w-none lg:mx-0 lg:px-0">
                        <div>
                            <div className="mt-6">
                                <div className="flex flex-row items-center sm:flex-col sm:items-baseline">
                                    <GlobeSimple className="mr-4 w-12 sm:w-20 h-auto sm:mr-0" />{' '}
                                    <h3 className="gotham font-medium text-gray-700 leading-tight text-3xl sm:text-4xl sm:pt-10 sm:text-center lg:text-left">
                                        Browser extension
                                    </h3>
                                </div>
                                <Line />
                                <p className="mt-8 text-lg text-gray-500">
                                    Our test recording tool is just a browser
                                    extension. It appears as a new tab on the
                                    standard DevTools window. You can record and
                                    save tests to your project folder with a
                                    click.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                        <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                            <motion.img
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="/img/browser-extension.png"
                                alt="Inbox user interface"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Extension;
