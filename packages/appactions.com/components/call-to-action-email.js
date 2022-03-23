import SignUp from 'components/signup';

const CallToActionEmail = () => (
    <section>
        <div className="px-4 mx-auto max-w-7xl lg:px-8">
            <div className="px-4 text-left py-10 md:px-4 rounded-lg sm:py-16 sm:px-12 lg:flex lg:items-center">
                <div className="lg:w-0 sm:flex-1">
                    <h2 className="text-3xl font-extrabold tracking-tight">
                        Want to be an early adopter?
                    </h2>
                    <p className="max-w-3xl mt-4 text-lg">
                        Join the App Actions newsletter to learn about new
                        features, guides, and case studies.
                    </p>
                </div>
                <div className="w-3/4 mx-auto mt-12 sm:w-full sm:max-w-l lg:mt-0 lg:ml-8 sm:flex-1">
                    <SignUp label="Subscribe" />
                </div>
            </div>
        </div>
    </section>
);

export default CallToActionEmail;
