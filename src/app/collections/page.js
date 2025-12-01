// app/collections/page.jsx
import HeadMeta from '@/components/HeadMeta'
import Link from 'next/link'

export default function CollectionsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'SilverCoins Collection',
    url: 'https://example.com/collections',
  }

  // Example static data — replace or wire up to a data source later
  const items = [
    {
      title: 'Lakshmi Ganesh — 10g',
      href: '/product/lakshmi-ganesh-10g',
      img: '/images/lakshmi-ganesha.webp',
      excerpt: '999 purity • Hallmarked • Festival favorite',
    },
    {
      title: 'Plain Round — 10g',
      href: '/product/plain-10g',
      img: '/images/plain.jpg',
      excerpt: 'Investment grade round, minimal finish.',
    },
    {
      title: 'Tirupati Balaji — 20g',
      href: '/product/balaji-20g',
      img: '/images/balaji-frontjpg.webp',
      excerpt: 'Temple edition • Collector\'s piece',
    },
    {
      title: 'Custom Engraved Coin',
      href: '/customize',
      img: '/images/custom.webp',
      excerpt: 'Personalize with name, date or logo.',
    },
    {
      title: 'Wedding Return Gift Set',
      href: '/collections?cat=wedding',
      img: '/images/wedding.jpg',
      excerpt: 'Elegant designs made for wedding return gifts.',
    },
    {
      title: 'Investment Bar — 50g',
      href: '/product/bar-50g',
      img: '/images/investment.jpg',
      excerpt: 'Bulk investment options with lower making charges.',
    },
  ]

  return (
    <>
      <HeadMeta
        title="Silver Coins Collection — Festival, Religious & Custom Designs"
        description="Browse our curated collection of premium 999 purity silver coins. Festival specials, religious designs, wedding gifts & corporate solutions."
        jsonLd={jsonLd}
      />

      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Explore Our Collections</h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Premium handcrafted silver coins for every occasion — festival, gifting and investment.</p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        {/* Filters row (kept minimal for Apple-like space) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex gap-3">
            <select className="px-4 py-2 rounded-full border border-slate-200 text-sm">
              <option>All weights</option>
              <option>5g</option>
              <option>10g</option>
              <option>20g</option>
              <option>50g+</option>
            </select>
            <select className="px-4 py-2 rounded-full border border-slate-200 text-sm">
              <option>All designs</option>
              <option>Festival</option>
              <option>Religious</option>
              <option>Plain</option>
            </select>
          </div>

          <div className="text-sm text-slate-500">Showing <span className="text-slate-700 font-medium">6</span> items</div>
        </div>

        {/* 3-column grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Link key={it.title} href={it.href} className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
              <div className="relative">
                <img src={it.img} alt={it.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{it.excerpt}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-slate-500">999 Purity</span>
                  <span className="text-sm font-medium text-slate-900">View →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
