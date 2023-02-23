import type { AppProps } from 'next/app'

// pages/_app.js
import { Dongle } from '@next/font/google'

const roboto = Dongle({
  weight: '700',
  subsets: ['latin'],
})

import '@/styles/globals.css'
import '@/styles/common.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
