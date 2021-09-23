import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import "bulma/css/bulma.min.css";
import "../styles/globals.scss";

function Portfolio({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
export default appWithTranslation(Portfolio);
