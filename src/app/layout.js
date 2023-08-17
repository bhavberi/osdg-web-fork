import { Inter } from 'next/font/google';

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import 'bootstrap/dist/css/bootstrap.min.css';
import 'css/globals.css';

import Navbar from 'components/NavBar';
import Footer from 'components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OSDG - IIITH',
  description: 'Open Source Developers Group - IIITH',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
