import SignUp from 'components/signup';

const CallToActionEmail = () => (
    <section>
        <div
            className="absolute left-0 right-0 h-1/2 bg-warm-gray-50"
            aria-hidden="true"
        />
        <div className="relative px-4 mx-auto max-w-7xl lg:px-8">
            <div className="px-4 text-left py-10 rounded-lg sm:py-16 sm:px-12 lg:py-20 lg:px-20 lg:flex lg:items-center">
                <div className="lg:w-0 lg:flex-1">
                    <h2 className="text-3xl font-extrabold tracking-tight">
                        Want to be an early adopter?
                    </h2>
                    <p className="max-w-3xl mt-4 text-lg">
                        Join the App Actions newsletter to hear first about new
                        features, guides, and case studies.
                    </p>
                </div>
                <div className="mt-12 sm:w-full sm:max-w-l lg:mt-0 lg:ml-8 lg:flex-1">
                    <SignUp label="Subscribe" />
                </div>
            </div>
        </div>
    </section>
);

export default CallToActionEmail;
