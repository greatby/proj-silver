// app/layout.jsx
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Pure Silver Coins — Premium 999 Silver | SilverCoins',
  description:
    'Buy hallmarked 999 purity silver coins online. Premium packaging, customization & nationwide delivery.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-white text-slate-900 font-sans">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
