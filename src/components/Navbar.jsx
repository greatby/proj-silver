// components/Navbar.jsx
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center shadow-sm">
            {/* Placeholder monogram */}
            <span className="text-slate-900 font-semibold">SC</span>
          </span>
          <span className="text-lg font-medium tracking-tight text-slate-900">SilverCoins</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <Link href="/collections" className="hover:text-slate-900 transition">Collections</Link>
          <Link href="/customize" className="hover:text-slate-900 transition">Customize</Link>
          <Link href="/about" className="hover:text-slate-900 transition">About</Link>
          <Link href="/blog" className="hover:text-slate-900 transition">Blog</Link>
          <Link href="/contact" className="hover:text-slate-900 transition">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/collections"
            className="px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-semibold shadow-sm hover:bg-slate-800 transition"
            aria-label="Shop Collections"
          >
            Shop
          </Link>
        </div>

        {/* Simple mobile button (you can wire up menu later) */}
        <button
          aria-label="Open menu"
          className="md:hidden p-2 rounded-md border bg-white shadow-sm"
        >
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="2" rx="1" fill="#0F172A" />
            <rect y="5" width="12" height="2" rx="1" fill="#0F172A" />
            <rect y="10" width="18" height="2" rx="1" fill="#0F172A" />
          </svg>
        </button>
      </div>
    </header>
  )
}
