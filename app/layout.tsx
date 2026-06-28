import type { Metadata } from "next";
import localFont from 'next/font/local'

import "./globals.css";
import ThemeProvider from "@/contexts/Theme";
import Navbar from "@/components/modules/navbar/Navbar";
import Newsletter from "@/components/modules/Newsletter";
import Footer from "@/components/modules/Footer";
import AuthProvider from "@/contexts/Auth";
import FavoriteProvider from "@/contexts/favorites";
import CartProvider from "@/contexts/cart";
import { Toaster } from "react-hot-toast";


const arad = localFont({
  src: [
    {
      path: '../public/fonts/AradFD-RegularDots3.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/AradFD-MediumDots3.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/AradFD-SemiBoldDots3.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/fonts/AradFD-BoldDots3.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/fonts/AradFD-ExtraBoldDots3.woff2',
      weight: '800',
      style: 'normal'
    },
  ],
  display: 'swap',
});

const lalezar = localFont({
  src: [
    {
      path: '../public/fonts/Lalezar-Regular.woff',
    }
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "نو اندیش",
  description: "بنیاد تعالی آموزش‌های تخصصی",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${arad.className} dark:bg-darkMode`}>
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>
              <FavoriteProvider>
                <Navbar />

                <main>
                  {children}
                </main>

                <footer>
                  <div className="bg-main-100 pt-10 pb-20 my-10 md:my-0 dark:bg-gray-800">
                    <Newsletter />
                    <Footer />
                  </div>
                </footer>

                <Toaster />
              </FavoriteProvider>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
