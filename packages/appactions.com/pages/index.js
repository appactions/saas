import SignUp from 'components/signup';
import Demo from 'components/demo';
import { motion } from 'framer-motion';
import GradientBackground from 'components/gradient-background-3';

export default function Home() {
    return (
        <>
            <GradientBackground colors={['#86BA90', '#ace2b7', '#86BA90', '#ace2b7']} height={400} />
            <section className="mt-16 mb-32 sm:mt-24">
                <div className="mx-auto max-w-7xl">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="hidden mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 lg:block">
                            <div className="sticky top-32">
                                <Demo />
                            </div>
                        </div>
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
                                <h1 className="text-4xl font-extrabold tracking-tight sm:leading-none lg:text-5xl xl:text-6xl">
                                    <span className="md:block">
                                        <span className="whitespace-nowrap">
                                            Session-recording for <span className="text-brand-green">React</span>.
                                        </span>
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-gray-900 mb-28 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                    Create high-quality end-to-end tests, that scale.
                                </p>
                                <div className="mb-32 lg:hidden">
                                    <Demo />
                                </div>
                                <div className="mt-10 sm:mt-12">
                                    <p className="my-3 font-sans font-bold tracking-wider text-black uppercase text-md md:text-lg">
                                        SIGN UP TO HEAR AS SOON AS WE LAUNCH!
                                    </p>
                                    <SignUp light />
                                </div>

                                <FeatureCard className="mt-32">
                                    <h2 className="my-4 text-4xl font-slab text-gray md:text-5xl lg:text-6xl">
                                        Low maintanence
                                    </h2>
                                    <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        Spend significantly less time maintaing your E2E test suite. App Action tests
                                        are completely implementation details free, meaning a refactor will never break
                                        your tests.
                                    </p>
                                </FeatureCard>

                                <FeatureCard className="mt-32">
                                    <h2 className="my-4 text-4xl font-slab text-gray md:text-5xl lg:text-6xl">
                                        Any platform
                                    </h2>
                                    <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        When an app is written in React, the host platform is just an implementation
                                        detail. You can use App Actions with ReactDOM, React Native, or even with React
                                        Three Fiber.
                                    </p>
                                </FeatureCard>

                                <FeatureCard className="mt-32">
                                    <h2 className="my-4 text-4xl font-slab text-gray md:text-5xl lg:text-6xl">
                                        Amazing reliability
                                    </h2>
                                    <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        Integrating directly with the app code is the perfect level of abstraction: the
                                        test runner always know what's happening, and false results will never happen.
                                    </p>
                                </FeatureCard>

                                <FeatureCard className="mt-32">
                                    <h2 className="my-4 text-4xl font-slab text-gray md:text-5xl lg:text-6xl">
                                        Batteries included
                                    </h2>
                                    <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        We baked in many best practices, so you don't have to wonder what's the best way
                                        to do something.
                                    </p>
                                </FeatureCard>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                                        Just a browser extension
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-500">
                                        Other tools require you to use a dedicated browser. App Actions's only interface
                                        is a new tab on the standard developer tool window.
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

            <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
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
            </section>

            <section className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
                <h2 className="my-4 text-4xl font-slab text-gray md:text-5xl lg:text-6xl">
                    Frequently asked questions
                </h2>
                <div className="mt-8">
                    <dl className="divide-y divide-gray-200">
                        {faqs.map((faq, index) => (
                            <div key={index} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                                <dt className="text-base font-medium text-gray-900 md:col-span-5">{faq.question}</dt>
                                <dd className="mt-2 md:mt-0 md:col-span-7">
                                    <p className="text-base text-gray-500">{faq.answer}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            <section className="relative">
                <div className="absolute left-0 right-0 h-1/2 bg-warm-gray-50" aria-hidden="true" />
                <div className="relative px-4 mx-auto max-w-7xl lg:px-8">
                    <div className="px-6 py-10 rounded-lg bg-gradient-to-l from-teal-400 to-brand-green sm:py-16 sm:px-12 lg:py-20 lg:px-20 lg:flex lg:items-center">
                        <div className="lg:w-0 lg:flex-1">
                            <h2 className="text-3xl font-extrabold tracking-tight text-white">
                                Want to be an early adopter?
                            </h2>
                            <p className="max-w-3xl mt-4 text-lg text-white">
                                Join the newletter to get notified when App Actions is available.
                            </p>
                        </div>
                        <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                            <SignUp label="Sign Up" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const faqs = [
    {
        question: 'How does this compare to Cypress?',
        answer: 'Our current release is a plugin for Cypress. In the future, it will become a standalone browser extension.',
    },
    {
        question: "What's the benefit of using this instead of just plain Cypress?",
        answer: 'App Actions tests are authored on a high level, which enables session-recording, better quality tests, and much better experience when it comes to running and maintaining the test suite. Also, we support react-three-fiber!',
    },
    {
        question: "What's the learning curve?",
        answer: 'There are two parts of using App Action, the integration and the actual test writing. The first requires learning our API, but that does not concern the whole team, and once done, requires surprisingly little attention. The testing part almost have no learning curve. In ideal situtation the while test writing happens as session-recording, which is just manual testing your app once.',
    },
    {
        question: 'Does the session recording work with react-three-fiber?',
        answer: 'Yes! All features work across all React renderers.',
    },
    {
        question: 'Who finds the most value in the current version?',
        answer: "There are two types of teams in this category. (1) React Three Fiber users: session-recording based tests are probably perform much better for non-conventional app (like non-CRUDs). (2) A team that wants to introduce testing to a large project, that doesn't have a lot of tests. Writing unit tests for somebody else's code is very difficult and slow process. Doing session-recording instead is way better investment.",
    },
    {
        question: 'My question is not in this list. Who can answer me?',
        answer: (
            <>
                We are going to set up a Discord soon, but in the meantime, feel free to slide into my DMs:{' '}
                <a className="underline" href="https://twitter.com/miklosme" target="_blank" rel="noopener noreferrer">
                    @miklosme
                </a>
                .
            </>
        ),
    },
];

function FeatureCard({ children, className }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
}
