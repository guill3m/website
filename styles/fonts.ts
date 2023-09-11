import { Source_Sans_3 } from 'next/font/google'
import localFont from 'next/font/local'

export const fontSourceSans = Source_Sans_3({
  display: 'swap',
  fallback: ['sans-serif'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: '--font-stack-sans',
  weight: 'variable',
})

export const fontBwDarius = localFont({
  adjustFontFallback: 'Times New Roman',
  display: 'swap',
  fallback: ['serif'],
  src: [
    {
      path: '../node_modules/@guill3m/fonts/bw-darius/bw-darius-light.woff2',
      style: 'normal',
      weight: '200',
    },
    {
      path: '../node_modules/@guill3m/fonts/bw-darius/bw-darius-regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../node_modules/@guill3m/fonts/bw-darius/bw-darius-regular-italic.woff2',
      style: 'italic',
      weight: '400',
    },
    {
      path: '../node_modules/@guill3m/fonts/bw-darius/bw-darius-bold.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../node_modules/@guill3m/fonts/bw-darius/bw-darius-black.woff2',
      style: 'normal',
      weight: '900',
    },
  ],
  variable: '--font-stack-serif',
})
