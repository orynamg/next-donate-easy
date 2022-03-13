import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html data-theme="mytheme">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet"></link>
      </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}