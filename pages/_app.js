import "../style/app.css"
import Head from 'next/head'

export default function  myapp({Component, pageProps}){
    return (
        <>
         <Component {...pageProps}/>
         <Head>
          <title>My Rick</title>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.ico" />
         </Head>
        </>
    )
}