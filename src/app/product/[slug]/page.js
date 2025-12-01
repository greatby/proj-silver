import HeadMeta from "@/components/HeadMeta";
import Image from "next/image";

export default function ProductPage({ params }) {
  console.log(params)
  const slug = params.slug || "product";
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    brand: "SilverCoins",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <HeadMeta
        title={`${title} — 999 Pure Silver Coin | SilverCoins`}
        description={`Buy ${title} — 999 purity, hallmarked and certified silver coin. Premium packaging, perfect for gifting and investment.`}
        jsonLd={jsonLd}
      />

      {/* PRODUCT HERO SECTION */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT — PRODUCT IMAGE */}
          <div className="relative w-full">
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <Image
                src="/sample-coin.jpg"
                alt={title}
                width={700}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT — PRODUCT DETAILS */}
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Premium 999 purity silver coin ideal for gifting, festivals,
              weddings and personal collection. Hallmarked and certified with
              tamper-proof premium packaging.
            </p>

            {/* PRICE */}
            <div className="mt-8">
              <p className="text-3xl font-semibold text-slate-900">₹ 1,299</p>
              <p className="text-sm text-slate-500 mt-1">Incl. all taxes</p>
            </div>

            {/* WEIGHT SELECTOR */}
            <div className="mt-8">
              <p className="font-medium text-slate-900 mb-3">Choose Weight</p>
              <div className="flex gap-3">
                {[5, 10, 20, 50].map((w) => (
                  <button
                    key={w}
                    className="px-5 py-2 rounded-full border border-slate-200 hover:border-slate-900 text-sm text-slate-700 hover:text-slate-900 transition"
                  >
                    {w}g
                  </button>
                ))}
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-10 flex items-center gap-4">
              <button className="px-8 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold shadow hover:bg-slate-800 transition">
                Add to Cart
              </button>

              <a
                href="/customize"
                className="px-6 py-3 rounded-full border border-slate-300 text-slate-900 text-sm font-medium hover:bg-slate-50 transition"
              >
                Customize
              </a>
            </div>

            {/* ICON HIGHLIGHTS */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-600">
              <div>
                <h4 className="font-medium text-slate-900">
                  999 Purity Silver
                </h4>
                Premium BIS hallmarking included
              </div>
              <div>
                <h4 className="font-medium text-slate-900">
                  Gift Ready Packaging
                </h4>
                Velvet box + certificate of authenticity
              </div>
              <div>
                <h4 className="font-medium text-slate-900">Free Shipping</h4>
                Insured delivery pan-India
              </div>
              <div>
                <h4 className="font-medium text-slate-900">
                  Easy Customization
                </h4>
                Add name, date or logo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Product Details
            </h2>
            <div className="mt-6 space-y-3 text-slate-700 text-sm">
              <p>• Purity: 999 Silver</p>
              <p>• Finish: Proof / Matte</p>
              <p>• Packaging: Premium velvet box</p>
              <p>• Certification: Hallmarked & authenticity card</p>
              <p>• Origin: India</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Why Choose SilverCoins?
            </h2>
            <p className="mt-6 text-slate-700 text-sm leading-relaxed max-w-lg">
              Every SilverCoins product is crafted with precision, authenticated
              with BIS hallmarking and delivered with care. We offer premium
              designs inspired by cultural heritage, festival traditions and
              modern gifting aesthetics.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
