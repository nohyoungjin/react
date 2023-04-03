import type { AppProps } from 'next/app'

// pages/_app.js
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
