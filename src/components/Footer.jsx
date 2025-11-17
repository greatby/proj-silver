// components/Footer.jsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 text-slate-700">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h4 className="text-lg font-semibold text-slate-900">SilverCoins</h4>
          <p className="mt-3 text-sm text-slate-600 max-w-xs">
            Premium 999 purity silver coins — hallmarked, certified & elegantly packaged.
          </p>
        </div>

        <div>
          <h5 className="font-medium text-slate-900 mb-3">Shop</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/collections" className="hover:text-slate-900">Collections</Link></li>
            <li><Link href="/customize" className="hover:text-slate-900">Customize</Link></li>
            <li><Link href="/collections?cat=festival" className="hover:text-slate-900">Festival Coins</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium text-slate-900 mb-3">Company</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-slate-900">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-slate-900">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-slate-900">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium text-slate-900 mb-3">Legal</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-slate-900">Terms & Conditions</Link></li>
            <li><Link href="/returns" className="hover:text-slate-900">Return Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="container mx-auto px-6 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} SilverCoins — All rights reserved.
        </div>
      </div>
    </footer>
  )
}
