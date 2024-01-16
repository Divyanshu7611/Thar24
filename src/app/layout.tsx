import Navbar from '@/components/global/Navbar'
import { Montserrat } from 'next/font/google'
import type { Metadata } from 'next'
import NextAuthProvider from './Provider'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './globals.css'
import Preloader from '@/components/global/Preloader'

const montserrat = Montserrat({
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'auto',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'THAR- The Techno-management fest of RTU',
  description:
    'THAR is a 3-day Technical Fiesta of stimulating technical adventures and staggering innovations with exhibitions and lively pro-nights.',

}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="text-gray-50">
        <NextAuthProvider>
          {/* <Navbar /> */}
          <Preloader />

          {children}

          {/* <Preloader /> */}
          {/* <Stars /> */}
          {/* <Footer /> */}
        </NextAuthProvider>
      </body>
    </html>
  )
}
