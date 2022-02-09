import { Heart } from 'phosphor-react';

const Features = () => (
    <section className="bg-white">
        <div className="max-w-screen-2xl mx-auto xl:px-40 lg:px-32 md:px-20 sm:px-12 px-5 py-30 md:py-40 lg:py-48 xl:py-60">
            <article className="w-full py-20 md:py-28 lg:py-40 border-gray-500 border-opacity-10 border-t-2 !pt-0 border-none">
                <div className="lg:flex">
                    <div className="flex flex-col sm:items-center lg:items-start lg:w-1/2">
                        <Heart className="w-20 h-auto" />
                        <h3 className="gotham font-medium text-gray-700 leading-tight text-3xl sm:text-4xl  pt-10 sm:text-center lg:text-left">
                            GraphQL Edge Caching
                        </h3>
                        <p className="gotham font-medium mx-auto sm:leading-snug text-lg md:text-2xl lg:mt-3 mt-2 lg:!text-left text-gray-700 text-opacity-60 text-left sm:text-center">
                            Make your GraphQL API blazing fast worldwide, not
                            just in us-east-1.
                        </p>
                        <div className="mt-12">
                            <a href="/graphql-edge-caching">
                                <button
                                    tabIndex={-1}
                                    className="text-center whitespace-nowrap flex items-center font-medium leading-6 gotham rounded-md transition duration-150 ease-in-out sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto focus:outline-none focus:ring bg-blue-600 hover:opacity-85 text-lg text-white hover:opacity-85 ring-blue"
                                    style={{ padding: '14px 17px' }}
                                >
                                    Learn more
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid sm:grid-cols-2 gap-10 md:gap-16 mt-20 lg:mt-0 lg:ml-40 flex-shrink-0">
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Heart size={32} />
                                    </div>
                                    Be blazing fast
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    Get ~40ms response times worldwide. Get your
                                    users the speed they deserve.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Heart size={32} />
                                    </div>
                                    Cache any APIs
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    Add caching to any GraphQL API. Just like
                                    you're used to with REST APIs.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Heart size={32} />
                                    </div>
                                    Shield your API
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    Protect your API from traffic spikes and
                                    downtime. Allow your users to rely on you,
                                    always.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Heart size={32} />
                                    </div>
                                    Lighten the load
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    Reduce your origin load by up to 95%. Handle
                                    any traffic spike, avoid downtime and save
                                    costs.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Heart size={32} />
                                    </div>
                                    Operate continuously
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    Resolve stability issues with auto retries
                                    and stale-while-revalidate. Steady wins the
                                    race.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className="w-full py-20 md:py-28 lg:py-40 border-gray-500 border-opacity-10 border-t-2">
                <div className="lg:flex">
                    <div className="flex flex-col sm:items-center lg:items-start lg:w-1/2">
                        <Heart className="w-20 h-auto" />
                        <h3 className="gotham font-medium text-gray-700 leading-tight text-3xl sm:text-4xl  pt-10 sm:text-center lg:text-left">
                            GraphQL Analytics
                        </h3>
                        <p className="gotham font-medium mx-auto sm:leading-snug text-lg md:text-2xl lg:mt-3 mt-2 lg:!text-left text-gray-700 text-opacity-60 text-left sm:text-center">
                            Understand your API’s usage, track user behavior and
                            change your schema with confidence.
                        </p>
                        <div className="mt-12">
                            <a href="/graphql-analytics">
                                <button
                                    tabIndex={-1}
                                    className="text-center whitespace-nowrap flex items-center font-medium leading-6 gotham rounded-md transition duration-150 ease-in-out sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto focus:outline-none focus:ring hover:opacity-85 text-lg bg-blue-400 text-white hover:opacity-85 ring-blue-400"
                                    style={{ padding: '14px 17px' }}
                                >
                                    Learn more
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid sm:grid-cols-2 gap-10 md:gap-16 mt-20 lg:mt-0 lg:ml-40 flex-shrink-0">
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Heart size={32} />
                                    </div>
                                    Track all operations
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    Get a real-time grip on your API’s usage.
                                    Because knowledge is power – to improve.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Heart size={32} />
                                    </div>
                                    Iterate confidently
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    Edit your schema based on usage data and
                                    insights. Rely on facts and be confident in
                                    your changes.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="gotham font-medium">
                                <h4 className="text-gray-700 leading-tight text-lg flex items-center">
                                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                                        <Heart size={32} />
                                    </div>
                                    Get deep insights
                                </h4>
                                <p className="text-lg text-gray-700 opacity-60 pt-4">
                                    See which country, page and user sent which
                                    request. Get granular insights and always
                                    know what's going on.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className="w-full py-20 md:py-28 lg:py-40 border-gray-500 border-opacity-10 border-t-2 !pb-0">
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
                            <a href="/graphql-performance-monitoring-error-tracking">
                                <button
                                    tabIndex={-1}
                                    className="text-center whitespace-nowrap flex items-center font-medium leading-6 gotham rounded-md transition duration-150 ease-in-out sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto focus:outline-none focus:ring hover:opacity-85 bg-red-600 text-white hover:opacity-85 ring-red text-lg"
                                    style={{ padding: '14px 17px' }}
                                >
                                    Learn more
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid sm:grid-cols-2 gap-10 md:gap-16 mt-20 lg:mt-0 lg:ml-40 flex-shrink-0">
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
            </article>
        </div>
    </section>
);

export default Features;
