import SignUp from './signup';

const Subscribe = () => (
    <section>
        <div className="px-4 mx-auto max-w-7xl lg:px-8 mb-16">
            <div className="px-6 py-10 rounded-lg bg-gradient-to-l from-teal-400 to-brand-green sm:py-16 sm:px-12 lg:flex lg:items-center">
                <div className="lg:w-0 lg:flex-1">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white">
                        Sounds interesting?
                    </h2>
                    <p className="max-w-3xl mt-4 text-lg text-white">
                        Join the App Actions newsletter to hear about new
                        features.
                    </p>
                </div>

                <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 sm:flex-1">
                    <SignUp label="Subscibe" />
                </div>
            </div>
        </div>
    </section>
);

export default Subscribe;
