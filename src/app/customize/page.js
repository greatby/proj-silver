// PREMIUM CUSTOMIZE / HOW IT WORKS PAGE (Apple-Style, Tailwind-Only)
// File: app/customize/page.jsx
// Ultra-clean, minimal, premium journey-driven page.

import HeadMeta from "@/components/HeadMeta";
import Link from "next/link";
import Image from "next/image";

export default function CustomizePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Silver Coin Engraving",
    description: "Upload your logo or text and create personalized 999 silver coins.",
  };

  return (
    <>
      <HeadMeta
        title="Customize Your Silver Coin — Name, Logo & Special Engraving | SilverCoins"
        description="Create your own personalized 999 purity silver coin. Upload your logo, add names, dates or messages. Premium engraving with proof preview."
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-white to-slate-50 py-24 border-b border-slate-100">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Design Your Own
              <br /> Premium Silver Coin.
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Personalize your coin with names, dates, blessings, logos or custom artwork.
              Crafted on 999 purity silver with premium engraving technology.
            </p>

            <Link
              href="#start-customizing"
              className="inline-block mt-10 px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold shadow hover:bg-slate-800 transition"
            >
              Start Customizing
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full max-w-xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <img
              src="https://caratcafe.in/cdn/shop/products/ganesh_silver_coin.jpg?v=1616666415&width=600"
              alt="Customize Silver Coin"
              width={700}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 4 STEP PROCESS */}
      <section id="start-customizing" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Our 4-step customization journey is designed to give you a flawless experience
            from design to delivery.
          </p>
        </div>

        <div className="container mx-auto px-6 mt-16 grid md:grid-cols-4 gap-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-slate-900 text-white text-xl font-semibold grid place-items-center shadow-md">
              1
            </div>
            <h3 className="text-xl font-semibold mt-6 text-slate-900">Choose Coin</h3>
            <p className="text-sm text-slate-600 mt-2">
              Pick your preferred design, weight and finish from our premium collection.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-slate-900 text-white text-xl font-semibold grid place-items-center shadow-md">
              2
            </div>
            <h3 className="text-xl font-semibold mt-6 text-slate-900">Upload Logo / Text</h3>
            <p className="text-sm text-slate-600 mt-2">
              Add a name, blessing, date or upload your brand/company logo.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-slate-900 text-white text-xl font-semibold grid place-items-center shadow-md">
              3
            </div>
            <h3 className="text-xl font-semibold mt-6 text-slate-900">Preview & Approve</h3>
            <p className="text-sm text-slate-600 mt-2">
              Our design team sends a proof within 24 hours for your approval.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-slate-900 text-white text-xl font-semibold grid place-items-center shadow-md">
              4
            </div>
            <h3 className="text-xl font-semibold mt-6 text-slate-900">Engraving & Delivery</h3>
            <p className="text-sm text-slate-600 mt-2">
              Your custom 999 silver coin is engraved, certified & delivered in 3-7 days.
            </p>
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION GUIDELINES */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Customization Guidelines</h2>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>• Recommended logo format: PNG or JPG (minimum 600x600px)</li>
              <li>• Text limit: 25–35 characters depending on coin size</li>
              <li>• Proof shared within 24 hours of order</li>
              <li>• Engraving takes 2-4 days once approved</li>
              <li>• No extra charge for design assistance</li>
            </ul>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <Image
              src="/custom-guidelines.jpg"
              alt="Custom guidelines"
              width={700}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY CUSTOM SILVER COINS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Custom Silver Coins?</h2>
            <p className="mt-6 text-slate-600 text-sm leading-relaxed max-w-xl">
              Personalized silver coins add unmatched elegance to any celebration.
              Whether it's a wedding, baby shower, housewarming, pooja or corporate event,
              your message or brand engraved in 999 purity silver makes a lasting impact.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <Image
              src="/why-custom.jpg"
              alt="Why custom silver coins"
              width={700}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-center bg-gradient-to-br from-white to-slate-50 border-t border-slate-100">
        <h2 className="text-3xl font-bold text-slate-900">Ready To Create Your Own?</h2>
        <p className="mt-4 text-slate-600 text-sm max-w-lg mx-auto">
          Start your customization journey and make your silver coin unforgettable.
        </p>

        <Link
          href="/collections"
          className="inline-block mt-8 px-8 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold shadow hover:bg-slate-800 transition"
        >
          Choose a Coin to Customize
        </Link>
      </section>
    </>
  );
}