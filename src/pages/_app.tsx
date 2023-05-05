import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import { Noto_Sans_JP } from "next/font/google"
import Script from "next/script"
import { appWithTranslation } from "next-i18next"
import { GoogleTagManager } from "@/components/seo/GTM"

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "500", "700", "900"],
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GoogleTagManager />
      <Script type="application/ld+json" id="structerd_data">{`
      {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "name": "梅屋",
        "image": "https://umeya.life/logo.png",
        "url": "https://umeya.life",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "黒木町黒木37",
            "addressLocality": "八女市",
            "addressRegion": "福岡県",
            "postalCode": "834-1292",
            "addressCountry": "JP"
        }
      }
      `}</Script>
      <Script strategy="worker" id="adobe-font">
        {`
   (function(d) {
    var config = {
      kitId: 'rhz1urq',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
        `}
      </Script>

      <div className={`${noto.variable} font-sans overflow-hidden`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default appWithTranslation(App)
