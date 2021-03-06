import React from "react";
import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Page title</title>
                <meta name="description" content="Page description" />
                <link rel="icon" href="/favicon.icon" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
