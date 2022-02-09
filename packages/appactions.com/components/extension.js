import { motion } from 'framer-motion';

const Extension = () => (
    <section>
        <div className="relative bg-white pt-32 pb-16 overflow-hidden">
            <div className="relative">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0">
                        <div>
                            <div>
                                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-brand-green text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6"
                                        height="1em"
                                        width="1em"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        fill="transparent"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M0 0h24v24H0z" stroke="none" />
                                        <rect x={4} y={4} width={16} height={16} rx={1} />
                                        <path d="M4 8L20 8" />
                                        <path d="M8 4L8 8" />
                                    </svg>
                                </span>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                    Browser extension
                                </h2>
                                <p className="mt-4 text-lg text-gray-500">
                                    Our test recording tool is just a browser extension. It appears as a new tab on the
                                    standard DevTools window. You can record and save tests to your project folder with
                                    a click.
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
