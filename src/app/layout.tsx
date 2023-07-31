import './global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import Providers from './components/Providers'
import Header from './components/Header'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gestor de Tráfego',
  description:
    'Meu principal objetivo é impulsionar o sucesso do seu negócio na internet. Se você busca aumentar o tráfego qualificado para o seu site, conquistar mais clientes e obter resultados reais, você está no lugar certo.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-');
        `}
      </Script>

      <body className={inter.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>`,
          }}
        />

        <Providers>
          <div className="grid w-full grid-rows-[min-content_1fr_min-content] px-4 md:px-10 lg:h-screen lg:px-28">
            <Header />
            <BackToTop />

            {children}

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
