// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Prata } from 'next/font/google'
import { Libre_Baskerville } from 'next/font/google'
import "@/styles/styles.css";
import "@/styles/globals.css"

const prata = Prata({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-prata',
})
const libre_baskerville = Libre_Baskerville({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_baskerville',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={prata.variable + ' ' + libre_baskerville.variable}>
        {children}
      </body>
    </html>
  )
}