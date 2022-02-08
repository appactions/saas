import FeatureCard from './feature-card';

const Features = () => (
    <section>
        <FeatureCard className="mt-32">
            <div className="flex text-left">
                <div className="max-h-full h-30 bg-zinc-900 w-1/2 border-solid border-yellow-300 border-2"></div>
                <div>
                    <h2 className="my-4 text-4xl font-slab text-gray md:text-5xl lg:text-6xl">Low maintanence</h2>
                    <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        E2E tests traditionally required a lot of maintenance. We figured out a way to separate
                        implementation details from the test declaration in a better way. This results in future-proof
                        tests that only need your attention when UX changes.
                    </p>
                </div>
            </div>
        </FeatureCard>

        <FeatureCard className="mt-32">
            <div className="flex text-right">
                <div>
                    <h2 className="my-4 text-4xl font-slab text-gray md:text-5xl lg:text-6xl">All React renderers</h2>
                    <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        In React apps, your choice of renderer is just an implementation detail. So is in App Actions.
                        We support all renderers, including react-three-fiber.
                    </p>
                </div>
                <div className="max-h-full h-30 bg-zinc-900 w-1/2 border-solid border-yellow-300 border-2"></div>
            </div>
        </FeatureCard>

        <FeatureCard className="mt-32">
            <h2 className="my-4 text-4xl font-slab text-gray md:text-5xl lg:text-6xl">Amazing reliability</h2>
            <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Integrating directly with the app code is the perfect level of abstraction: the test runner always know
                what's happening, and false results will never happen.
            </p>
        </FeatureCard>

        <FeatureCard className="mt-32">
            <h2 className="my-4 text-4xl font-slab text-gray md:text-5xl lg:text-6xl">Enhanced stability</h2>
            <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Integrating with React has a serious benefit: the test runner can make informed decisions based on your
                app’s state, making significantly more stable tests.
            </p>
        </FeatureCard>

        <FeatureCard className="mt-32">
            <h2 className="my-4 text-4xl font-slab text-gray md:text-5xl lg:text-6xl">Pragmatic test recording</h2>
            <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Writing tests is boring, let’s record them. We believe test recorders shouldn’t create a walled garden,
                the output should be high-quality code, that you can check into your version control system.
            </p>
        </FeatureCard>

        <FeatureCard className="mt-32">
            <h2 className="my-4 text-4xl font-slab text-gray md:text-5xl lg:text-6xl">Declarative interface</h2>
            <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                React is declarative, your tests should be too. App Actions tests are using a declarative YAML format,
                which makes tests cleaner, easier to maintain and makes test recording more powerful.
            </p>
        </FeatureCard>
        <FeatureCard className="mt-32">
            <h2 className="my-4 text-4xl font-slab text-gray md:text-5xl lg:text-6xl">Incremental adaptation</h2>
            <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                App Actions composes great with Cypress. If you already have a Cypress codebase, gradual migration will
                be a breeze.
            </p>
        </FeatureCard>
    </section>
);

export default Features;
