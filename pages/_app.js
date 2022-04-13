import "../style/app.css"
import Head from 'next/head'

export default function  myapp({Component, pageProps}){
    return (
        <>
         <Component {...pageProps}/>
         <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          <title>My Rick</title>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
         </Head>
        </>
    )
}