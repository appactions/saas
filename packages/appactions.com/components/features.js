import Link from 'next/link';
import { Rainbow, Clock, ShieldCheckered, ArrowSquareUpRight, Student, Atom, ArrowsIn, Article, VideoCamera, Code } from 'phosphor-react';

const Features = () => (
    <section className="bg-white">
        <div className="max-w-screen-2xl mx-auto xl:px-40 lg:px-32 md:px-20 sm:px-12 px-5 py-10 md:py-12 lg:py-14 xl:py-18">
            <article className="w-full py-10 md:py-14 lg:py-20 border-gray-500 border-opacity-10 border-b-2 !pt-0">
                <div className="lg:flex">
                    <div className="flex flex-col sm:items-center lg:items-start lg:w-1/2">
                        <Rainbow className="w-20 h-auto" />
                        <h3 className="gotham font-medium text-gray-700 leading-tight text-3xl sm:text-4xl  pt-10 sm:text-center lg:text-left">
                            Built for developers
                        </h3>
                        {/* <p className="gotham font-medium mx-auto sm:leading-snug text-lg md:text-2xl lg:mt-3 mt-2 lg:!text-left text-gray-700 text-opacity-60 text-left sm:text-center">
                            (...)
                        </p> */}
                        <div className="mt-12">
                            <Link href="https://docs.appactions.com">
                                <a className="py-3 px-4 text-center whitespace-nowrap flex items-center font-medium leading-6 gotham rounded-md transition duration-150 ease-in-out sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto focus:outline-none focus:ring bg-brand-green hover:opacity-85 text-lg text-white hover:opacity-85 ring-green-400">
                                    Learn more
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-4/6 grid sm:grid-cols-2 gap-10 md:gap-16 mt-20 lg:mt-0 lg:ml-20 flex-shrink-0">
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Clock size={32} />
                                    </div>
                                    Low maintenance
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    E2E tests traditionally required a lot of
                                    maintenance. We figured out a way to
                                    separate implementation details from the
                                    test declaration in a better way. This
                                    results in future-proof tests that only need
                                    your attention when UX changes.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <ShieldCheckered size={32} />
                                    </div>
                                    Enhanced stability
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    Integrating with React has a serious
                                    benefit: the test runner can make informed
                                    decisions based on your app's state, making
                                    significantly more stable tests.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <ArrowSquareUpRight size={32} />
                                    </div>
                                    Incremental adaptation
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    App Actions composes great with Cypress. If
                                    you already have a Cypress codebase, gradual
                                    migration will be a breeze.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Student size={32} />
                                    </div>
                                    Gentle learning curve
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    No need to learn extensive APIs, test writing happens by an intuitive test recorder.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className="w-full py-10 md:py-14 lg:py-20 border-gray-500 border-opacity-10 border-b-2">
                <div className="lg:flex">
                    <div className="flex flex-col sm:items-center lg:items-start lg:w-1/2">
                        <Atom className="w-20 h-auto" />
                        <h3 className="gotham font-medium text-gray-700 leading-tight text-3xl sm:text-4xl  pt-10 sm:text-center lg:text-left">
                            Innovative features
                        </h3>
                        {/* <p className="gotham font-medium mx-auto sm:leading-snug text-lg md:text-2xl lg:mt-3 mt-2 lg:!text-left text-gray-700 text-opacity-60 text-left sm:text-center">
                            (...)
                        </p> */}
                        <div className="mt-12">
                            <Link href="https://docs.appactions.com">
                                <a className="py-3 px-4 text-center whitespace-nowrap flex items-center font-medium leading-6 gotham rounded-md transition duration-150 ease-in-out sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto focus:outline-none focus:ring hover:opacity-85 text-lg bg-brand-green text-white hover:opacity-85 ring-green-400">
                                    Learn more
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-4/6 grid sm:grid-cols-2 gap-10 md:gap-16 mt-20 lg:mt-0 lg:ml-20 flex-shrink-0">
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <ArrowsIn size={32} />
                                    </div>
                                    All React renderers
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    In React apps, your choice of renderer is
                                    just an implementation detail. So is in App
                                    Actions. We support all renderers, including
                                    react-three-fiber.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Article size={32} />
                                    </div>
                                    Declarative interface
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    React is declarative, your tests should be
                                    too. App Actions tests are using a
                                    declarative YAML format, which makes tests
                                    cleaner, easier to maintain and makes test
                                    recording more powerful.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <VideoCamera size={32} />
                                    </div>
                                    Test recording
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    Writing tests is boring, let's record them. Thanks to our declarative interface, output is easy to read and maintain. 
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Code size={32} />
                                    </div>
                                    Result is code
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                We believe test recorders shouldn't create a
                                    walled garden, the output should be
                                    high-quality code, that you can check into
                                    your version control system.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            {/* <article className="w-full py-20 md:py-28 lg:py-40 border-gray-500 border-opacity-10 border-t-2 !pb-0">
                <div className="lg:flex">
                    <div className="flex flex-col sm:items-center lg:items-start lg:w-1/2">
                        <Heart className="w-20 h-auto" />
                        <h3 className="gotham font-medium text-gray-700 leading-tight text-3xl sm:text-4xl  pt-10 sm:text-center lg:text-left">
                            GraphQL Performance Monitoring &amp; Error Tracking
                        </h3>
                        <p className="gotham font-medium mx-auto sm:leading-snug text-lg md:text-2xl lg:mt-3 mt-2 lg:!text-left text-gray-700 text-opacity-60 text-left sm:text-center">
                            Understand the health of your GraphQL API and track
                            problems in real-time.
                        </p>
                        <div className="mt-12">
                            <a className="py-3 px-4 text-center whitespace-nowrap flex items-center font-medium leading-6 gotham rounded-md transition duration-150 ease-in-out sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto focus:outline-none focus:ring hover:opacity-85 bg-red-600 text-white hover:opacity-85 ring-red text-lg">
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-4/6 grid sm:grid-cols-2 gap-10 md:gap-16 mt-20 lg:mt-0 lg:ml-20 flex-shrink-0">
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Heart size={32} />
                                    </div>
                                    Identify weak spots
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    Track all HTTP &amp; GraphQL errors.
                                    Understand when and where users run into
                                    issues and fix them.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Heart size={32} />
                                    </div>
                                    Optimize performance
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    Check the origin response times for each
                                    query and mutation. Know where to optimize
                                    your API.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Heart size={32} />
                                    </div>
                                    Get alerts in real-time
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    Learn about performance drops and errors the
                                    second your users do and resolve them
                                    quickly.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Heart size={32} />
                                    </div>
                                    Control notifications
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    Define who gets notified about what on
                                    Email, Slack or Pagerduty. Always contact
                                    the right person.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article> */}
        </div>
    </section>
);

export default Features;
