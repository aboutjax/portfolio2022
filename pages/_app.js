import React from "react";
import "../styles/globals.css";
import Layout from "../components/layout";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-QQ7B8F4CHY" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-QQ7B8F4CHY');
        `}
      </Script>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
