import SignUp from 'components/signup';
import Demo from 'components/demo';
import GradientBackground from 'components/gradient-background-4';
import { motion } from 'framer-motion';
import Hero from 'components/hero';
import CallToActionEmail from 'components/call-to-action-email';
import Features from 'components/features';
import Extension from 'components/extension';
import Questions from 'components/questions';

export default function Home() {
    return (
        <>
            {/* <GradientBackground tl={'#86BA90'} tr={'#ace2b7'} bl={'#86BA90'} br={'#ace2b7'} /> */}

            <section className="mt-16 mb-32 sm:mt-24">
                <div className="mx-auto max-w-7xl">
                    <Hero />
                    <CallToActionEmail />
                    <Features />
                    {/* <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="hidden mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 lg:block"></div>
                        <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                            <div>
                                <h3 className="font-sans text-lg font-bold tracking-widest text-black uppercase">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 32 32"
                                        className="inline-block w-6 h-6 mb-1 mr-2"
                                        style={{ color: '#61dafb' }}
                                        height="1em"
                                        width="1em"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        fill="transparent"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <g
                                            transform="translate(.648 2.438) scale(.05696)"
                                            fill="none"
                                            fillRule="evenodd"
                                        >
                                            <circle r={50.167} cy={237.628} cx={269.529} fill="currentColor" />
                                            <g stroke="currentColor" strokeWidth={24}>
                                                <path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44C36.184 297.006.62 265.085.62 237.628c0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z" />
                                                <path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z" />
                                                <path d="M180.82 289.482c-33.745-58.282-56.72-117.287-66.31-166.255-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z" />
                                            </g>
                                        </g>
                                    </svg>
                                    App Actions
                                </h3>

                                <div className="mt-10 sm:mt-12">
                                    <p className="my-3 font-sans font-bold tracking-wider text-black uppercase text-md md:text-lg">
                                        SIGN UP TO HEAR AS SOON AS WE LAUNCH!
                                    </p>
                                    <SignUp light />
                                </div>
                            </div>
                        </div>
                    </div>  */}
                </div>
            </section>

            <Extension />

            {/* <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h2 className="my-4 text-4xl font-slab text-gray md:text-5xl lg:text-6xl">
                    E2E - implementation details = FLOW
                </h2>
                <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    End-to-end tests traditionally require a lot of developer attention. They are flaky, slow, and
                    changes make them out of date way too often. This makes E2E testing an expensive investment.
                </p>
                <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    App Actions uses a <span className="highlight">declarative API</span> to define user flows.
                    Implementation details are moved to drivers, living outside of the test scope. This makes sure code
                    refactors don't break tests, because under the hood changes won't affect how users use your app.
                </p>
            </section> */}

            <Questions />
        </>
    );
}


