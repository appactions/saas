import { docs } from 'misc/constants';
import Link from 'next/link';
import { CaretRight } from 'phosphor-react';

const FeatureHeader = ({ icon, title }) => (
    <div className="flex flex-col sm:items-center lg:items-start lg:w-1/2">
        <div className="flex flex-row items-center sm:flex-col  lg:items-baseline">
            {icon}
            <h3 className="gotham font-medium text-gray-700 leading-tight text-3xl sm:text-4xl sm:pt-10 sm:text-center lg:text-left">
                {title}
            </h3>
        </div>

        <hr className="mt-4 h-0.5 bg-gradient-to-r from-[#CA3CFF] to-[#EC7D10]" />

        <div className="mt-4 sm:mt-12">
            <Link href={docs}>
                <a className="hidden sm:block py-3 px-4 text-center whitespace-nowrap flex items-center font-medium leading-6 gotham rounded-md transition duration-150 ease-in-out sm:flex-shrink-0 inline-flex items-center sm:w-auto focus:outline-none focus:ring bg-brand-green text-lg text-white ring-green-400 hover:opacity-80">
                    Learn more <CaretRight className="ml-2 inline" />
                </a>
            </Link>
        </div>
    </div>
);

export default FeatureHeader;
