import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/index.scss";

export const _app = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <title>yehezkieldio</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default _app;
