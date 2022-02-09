import SignUp from 'components/signup';
import Demo from 'components/demo';
import Hero from 'components/hero';
import CallToActionEmail from 'components/call-to-action-email';
import Features from 'components/features';
import Extension from 'components/extension';
import Questions from 'components/questions';

export default function Home() {
    return (
        <>
            <section className="mt-16 sm:mt-24">
                <div className="mx-auto max-w-7xl">
                    <Hero />
                    <Demo />
                    <CallToActionEmail />
                    <Features />
                    {/*

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

            <Questions />
        </>
    );
}
