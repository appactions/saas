import Head from 'next/head';
import Header from 'components/header';
import Footer from 'components/footer';
import mixpanel from 'mixpanel-browser';
import GradientBackground from 'components/gradient-background-5';
import './style.css';

mixpanel.init('232eac1a8b458a5743596e54316177f8', {
    debug: process.env.NODE_ENV === 'development',
});

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>App Actions</title>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

                {/* Essential META Tags */}
                <meta property="og:title" content="App Actions — Effortless React testing" />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://appactions.com/thumbnail.png" />
                <meta property="og:url" content="https://appactions.com/" />
                <meta
                    property="og:description"
                    content="App Actions is a next generation testing tool for React: declarative interface, low maintenance, test recording, enhanced stability, incremental adaptation. Supports all React renderers, including react-three-fiber."
                />
                <meta property="og:site_name" content="App Actions" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image:alt" content="Effortless React testing" />
                <meta name="twitter:title" content="App Actions — Effortless React testing" />
                <meta
                    name="twitter:description"
                    content="App Actions is a next generation testing tool for React: declarative interface, low maintenance, test recording, enhanced stability, incremental adaptation. Supports all React renderers, including react-three-fiber."
                />
                <meta name="twitter:image" content="https://appactions.com/thumbnail.png" />

                {/* Non-Essential, But Required for Analytics
                <meta property="fb:app_id" content="your_app_id" />
                <meta name="twitter:site" content="@website-username" /> */}

                {/* Hotjar Tracking Code for react-app-actions.com */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(h,o,t,j,a,r){
                                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                                h._hjSettings={hjid:2331826,hjsv:6};
                                a=o.getElementsByTagName('head')[0];
                                r=o.createElement('script');r.async=1;
                                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                                a.appendChild(r);
                            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
                    }}
                />
            </Head>

            <div className="flex flex-col justify-between min-h-screen">
                <GradientBackground
                    tl={['#CA3CFF', '#FF809D']}
                    tr={['#FBACBE', '#C32EFA']}
                    bl={['#EC7D10', '#9DCDA7']}
                    br={['#ACE2B7', '#D97512']}
                />
                <Header />

                <Component {...pageProps} />

                <Footer />
            </div>
        </>
    );
}

export default MyApp;
