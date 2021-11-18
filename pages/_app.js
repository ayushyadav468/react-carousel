import Head from 'next/head';

import '../styles/globals.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta httpEquiv='Cache-control' content='public' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
