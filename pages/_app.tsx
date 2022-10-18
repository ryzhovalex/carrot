import "../styles/globals.css"; 
import type { AppProps } from 'next/app'
import HeaderComponent from "../components/HeaderComponent";
import Head from "next/head";

function AppRoot({ Component, pageProps }: AppProps) {
  return (
    <>
    <div className='dark bg-c60 w-full h-full'>
      <Head>
        <title>Carrot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComponent/>

      <Component {...pageProps} />

    </div>
    </>
  )
}

export default AppRoot
