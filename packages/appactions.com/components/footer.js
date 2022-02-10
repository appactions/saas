import { Heart, TwitterLogo } from 'phosphor-react';
import Line from './line';

function Footer() {
    return (
        <footer aria-labelledby="footerHeading">
            <h2 className="sr-only">Footer</h2>

            <div className="max-w-7xl mx-auto flex px-4 py-4 flex-col sm:flex-row sm:justify-around sm:px-8 sm:py-8 max-w-7xl">
                <p className="mt-4 sm:mt-0">
                    {' '}
                    Made in Amsterdam{' '}
                    <Heart
                        className="inline-block"
                        color="#86BA90"
                        weight="fill"
                        size={22}
                    />
                </p>
                <p> © 2022 App Actions. All rights reserved.</p>
                <p>
                    {' '}
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
                </p>
            </div>
        </footer>
    );
}

export default Footer;
