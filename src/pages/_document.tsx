import { GoogleTagManager, GoogleTagManagerId } from "@/components/seo/GTM"
import { googleTagManagerId } from "@/utils/gtm"
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <GoogleTagManager
          googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
        />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}"
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
