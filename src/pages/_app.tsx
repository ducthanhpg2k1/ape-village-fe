"use client";

import Head from "next/head";
import "../styles/globals.scss";
import "../styles/tailwind.css";
import { DefaultSeo, DefaultSeoProps } from "next-seo";
import type { AppProps } from "next/app";
import AppLayout from "@/layout/AppLayout";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "sonner";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const SEO: DefaultSeoProps = {
  titleTemplate: "Ape Village",
  defaultTitle: "Ape Village",
  description: "Ape Village",
  openGraph: {
    title: "Ape Village",
    description: "Ape Village",
    images: [
      {
        url: "banner-1.png",
        width: 800,
        height: 400,
        alt: "Title Banner Alt",
      },
    ],
  },
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index,follow" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#476055" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />

        <meta name="title" content="Ape Village" />
        <meta name="description" content="Ape Village" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <NextNProgress
        options={{ showSpinner: false }}
        color="#d96919"
        height={2}
      />
      <AppLayout>
        <Toaster position="top-center" />
        {getLayout(<Component {...pageProps} />)}
      </AppLayout>
    </>
  );
}
// @ts-ignore
export default MyApp;
