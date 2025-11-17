// app/page.jsx
import HeadMeta from '@/components/HeadMeta'
import Link from 'next/link'

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SilverCoins',
    url: 'https://example.com',
  }

  return (
    <>
      <HeadMeta
        title="Invest in Purity — Premium 999 Silver Coins | SilverCoins"
        description="Shop certified 999 purity silver coins. Premium packaging, customization & pan-India delivery."
        jsonLd={jsonLd}
      />

      {/* HERO: A3 style - Left text, right full-height product image */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-12 items-center gap-12 min-h-[60vh]">
            {/* LEFT - TEXT (md:cols 6) */}
            <div className="md:col-span-6 lg:col-span-5">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">
                Invest in purity.
                <br />
                Gift with elegance.
              </h1>

              <p className="mt-6 text-lg text-slate-600 max-w-xl">
                Explore our curated collection of 999 purity silver coins — hallmarked,
                certified and crafted for festivals, weddings, corporate gifting and
                long-term investment.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <Link
                  href="/collections"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold shadow-sm hover:bg-slate-800 transition"
                >
                  Shop Collections
                </Link>

                <Link
                  href="/customize"
                  className="inline-flex items-center px-5 py-3 rounded-full border border-slate-200 text-slate-900 text-sm font-medium hover:bg-slate-50 transition"
                >
                  Customize Coin
                </Link>
              </div>

              <div className="mt-8 text-sm text-slate-500">
                <span className="inline-block mr-6">✅ 999 Purity</span>
                <span className="inline-block mr-6">✅ Hallmarked</span>
                <span className="inline-block">✅ Insured Delivery</span>
              </div>
            </div>

            {/* RIGHT - LARGE IMAGE (md:cols 6) */}
            <div className="md:col-span-6 lg:col-span-7 flex items-center justify-center">
              <div className="w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl">
                {/* Use a tall portrait / product shot for cinematic feel */}
                <img
                  src="https://caratcafe.in/cdn/shop/products/ganesh_silver_coin.jpg?v=1616666415&width=600"
                  alt="Premium 999 silver coin"
                  className="w-full h-[60vh] object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* subtle decorative gradient / white space on right edge */}
        <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none" aria-hidden>
          <div className="h-full bg-gradient-to-r from-transparent to-white"></div>
        </div>
      </section>

      {/* SMALL FEATURE STRIP */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <h4 className="font-semibold text-slate-900">Certified Purity</h4>
            <p className="text-sm text-slate-600 mt-2">All coins are 999 purity and BIS hallmarked.</p>
          </div>

          <div className="flex flex-col items-start">
            <h4 className="font-semibold text-slate-900">Premium Packaging</h4>
            <p className="text-sm text-slate-600 mt-2">Presented in a velvet box with certificate of authenticity.</p>
          </div>

          <div className="flex flex-col items-start">
            <h4 className="font-semibold text-slate-900">Pan-India Delivery</h4>
            <p className="text-sm text-slate-600 mt-2">Fast, insured and trackable shipping to all states.</p>
          </div>
        </div>
      </section>
    </>
  )
}
