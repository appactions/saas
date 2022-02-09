import { features } from 'misc/features';
import FeatureCard from './feature-card';

const Features = () => (
    <section>
        {features.map((feature, index) => {
            const textAlign =
                index % 2
                    ? 'text-left flex-row'
                    : 'text-right flex-row-reverse';

            return (
                <FeatureCard className="px-4 mt-16 md:mt-32" key={index}>
                    <div className={`flex ${textAlign}`}>
                        <div className="max-h-full h-30 bg-zinc-900 w-1/2 border-solid border-yellow-300 border-2"></div>
                        <div>
                            <h2 className="my-4 text-4xl font-slab text-gray md:text-5xl lg:text-6xl">
                                {feature.title}
                            </h2>
                            <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                {feature.subtitle}
                            </p>
                        </div>
                    </div>
                </FeatureCard>
            );
        })}
    </section>
);

export default Features;
