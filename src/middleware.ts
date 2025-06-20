import { NextResponse, type NextRequest } from 'next/server'

const locales = ['ja', 'en']
const defaultLocale = 'ja'

const socialMediaCrawlers = [
  'facebookexternalhit', 'Facebot', 'Twitterbot', 'LinkedInBot', 'Pinterest',
  'Slackbot', 'Discordbot', 'WhatsApp', 'Googlebot', 'bingbot', 'Baiduspider', 'Yahoo'
];

function isSocialMediaCrawler(request: NextRequest) {
  const ua = request.headers.get('user-agent') || ''
  return socialMediaCrawlers.some(crawler => ua.toLowerCase().includes(crawler.toLowerCase()))
}

function getLocale(request: NextRequest) {
  const cookieLocale = request.cookies.get('preferred-locale')?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return defaultLocale
  const locale = acceptLanguage.split(',')[0].split('-')[0]
  return locales.includes(locale) ? locale : defaultLocale
}

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (isSocialMediaCrawler(request)) {
    const headers = new Headers(request.headers)
    headers.set('x-locale', defaultLocale)
    return NextResponse.next({ request: { headers } })
  }

  if (!hasLocale) {
    const locale = getLocale(request)
    if (locale !== defaultLocale) {
      // e.g. /about -> /ja/about
      let redirectPath = `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`
      if (redirectPath.length > `/${locale}/`.length && redirectPath.endsWith('/')) {
        redirectPath = redirectPath.slice(0, -1)
      }

      return NextResponse.redirect(new URL(redirectPath, request.url))
    }
  }

  // x-locale
  const headers = new Headers(request.headers)
  const lang = locales.find((locale) => pathname.startsWith(`/${locale}`))
  headers.set('x-locale', lang || defaultLocale)

  return NextResponse.next({ request: { headers } })
}

export const config = {
  // Match only internationalized pathnames
  matcher: '/((?!api|images|_next/static|_next/image|favicon.ico).*)'
}
