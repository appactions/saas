import Logo from 'components/logo';
import Link from 'next/link';

function Header() {
    return (
        <div className="relative">
            <div className="px-4 mx-auto max-w-7xl sm:px-6">
                <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                    <div className="flex-1 justify-start lg:w-0 lg:flex-1">
                        <Link href="/">
                            <a className="text-xl font-medium block p-2 w-52 text-white opacity-80">
                                <span className="inline-block w-9 h-6 align-middle mr-2">
                                    <Logo />
                                </span>
                                App Actions
                            </a>
                        </Link>
                    </div>
                    <nav className="flex space-x-10">
                        <Link href="https://docs.appactions.com/">
                            <a className="text-xl font-medium text-white opacity-80 border-b-2 border-transparent hover:border-white">
                                Docs
                            </a>
                        </Link>
                        <Link href="https://docs.appactions.com/#getting-started">
                            <a className="hidden md:block text-xl font-medium text-white opacity-80 border-b-2 border-transparent hover:border-white">
                                Getting started
                            </a>
                        </Link>
                        <Link
                            target="_blank"
                            href="https://calendly.com/miklosme/demo-with-miklos"
                        >
                            <a className="hidden sm:block text-xl font-medium text-white opacity-80 border-b-2 border-transparent hover:border-white">
                                Book a demo
                            </a>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
