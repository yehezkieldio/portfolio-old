import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/index.scss";

export const _app = ({ Component, pageProps }: AppProps) => {
    if (process.browser) {
        const currentTheme = localStorage.getItem("theme")
            ? localStorage.getItem("theme")
            : null;

        if (currentTheme) {
            document.documentElement.setAttribute("data-theme", currentTheme);
        }
    }
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="theme-color" content="#d3e4eb" />

                <title>Yehezkiel Dio — a web developer</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default _app;
