import { Heart, TwitterLogo } from 'phosphor-react';

function Footer() {
    return (
        <footer aria-labelledby="footerHeading">
            <h2 className="sr-only">Footer</h2>
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6">
                <div className="pt-8 sm:mt-12">
                    <p>
                        Made in Amsterdam{' '}
                        <Heart
                            className="inline-block"
                            color="#86BA90"
                            weight="fill"
                            size={22}
                        />
                    </p>

                    <p className="text-base sm:text-center text-gray-400">
                        © 2022 App Actions. All rights reserved.
                        <div>
                            <span className="block hidden mx-8">|</span>
                            <a
                                href="https://twitter.com/miklosme"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-block text-gray-400 align-middle hover:text-gray-500"
                            >
                                <span className="block sr-only">Twitter</span>
                                <TwitterLogo
                                    color="currentColor"
                                    weight="fill"
                                    size={22}
                                />
                            </a>
                        </div>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
