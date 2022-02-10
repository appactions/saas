import Demo from 'components/demo';
import Hero from 'components/hero';
import CallToActionEmail from 'components/call-to-action-email';
import Features from 'components/features';
import Extension from 'components/extension';
import Questions from 'components/questions';
import Subscribe from 'components/subscribe';

const Home = () => (
    <div className="mt-16 sm:mt-24 max-w-full mx-auto md:max-w-7xl">
        <Hero />
        <Demo />
        <CallToActionEmail />
        <Features />
        <Extension />
        <Questions />
        <Subscribe />
    </div>
);

export default Home;
