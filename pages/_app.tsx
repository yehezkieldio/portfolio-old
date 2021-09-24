import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

import "bulma/css/bulma.min.css";
import "../styles/globals.scss";

function Portfolio({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>

				<title>Yehezkiel Dio — a web developer</title>
				<link rel="shortcut icon" href="/favicon.ico" />

				<meta name="robots" content="index,follow" />
				<meta name="googlebot" content="index,follow" />
				<meta name="google" content="nositelinkssearchbox" />
				<meta name="google" content="notranslate" />

				<meta
					name="google-site-verification"
					content={
						process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_TOKEN
					}
				/>

				<meta property="og:image" content="/Avatar.jpg" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
export default appWithTranslation(Portfolio);
