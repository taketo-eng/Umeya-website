import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5F7QWL8"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
