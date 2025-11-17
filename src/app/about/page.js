// PREMIUM ABOUT PAGE (Apple-Style Minimalism, Tailwind-Only)
// File: app/about/page.jsx

import HeadMeta from "@/components/HeadMeta";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About SilverCoins",
    description:
      "Learn about SilverCoins — India's premium 999 silver coin brand offering certified, hallmarked and customizable silver coins.",
  };

  return (
    <>
      <HeadMeta
        title="About Us — SilverCoins | Premium 999 Silver Coins"
        description="Learn about SilverCoins — premium 999 purity silver coins, crafted with elegance, hallmarked, certified and delivered nationwide."
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-white to-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Crafting Purity,
              <br /> Delivering Trust.
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              At SilverCoins, we create premium 999 purity silver coins designed for
              celebrations, blessings, gifting and investments. Our philosophy is simple —
              blend timeless tradition with modern craftsmanship.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 max-w-xl w-full">
            <Image
              src="/about-hero.jpg"
              alt="About SilverCoins"
              width={700}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
            <p className="mt-6 text-slate-600 text-sm leading-relaxed max-w-xl">
              Our mission is to make premium silver accessible to everyone — with
              unparalleled purity, elegant designs and a seamless buying experience.
              Whether it’s a festival offering, a wedding gift, a company keepsake or an
              investment piece, every SilverCoins product carries trust and quality.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 max-w-xl w-full">
            <Image
              src="/mission.jpg"
              alt="Mission"
              width={700}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Everything we create reflects these foundations.
          </p>
        </div>

        <div className="container mx-auto px-6 mt-16 grid md:grid-cols-3 gap-16">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-900">Unmatched Purity</h3>
            <p className="mt-3 text-sm text-slate-600">
              Every product is made using 999 purity silver, BIS hallmarked and certified.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-900">Elegant Craftsmanship</h3>
            <p className="mt-3 text-sm text-slate-600">
              Our designs combine traditional motifs with contemporary minimalism.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-900">Customer First</h3>
            <p className="mt-3 text-sm text-slate-600">
              From customization to delivery, every step is crafted for your satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
            <p className="mt-6 text-slate-600 text-sm leading-relaxed max-w-xl">
              SilverCoins began with a simple vision — to elevate silver gifting and create
              beautifully crafted products that carry emotion, value and purity.
              <br />
              <br />
              What started as a small passion has grown into a national brand trusted for
              authenticity, customization and premium quality. We are dedicated to making every
              silver coin a symbol of blessings, prosperity and elegance.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 max-w-xl w-full">
            <Image
              src="/story.jpg"
              alt="Our Story"
              width={700}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center bg-gradient-to-br from-white to-slate-50 border-t border-slate-100">
        <h2 className="text-3xl font-bold text-slate-900">Discover Our Premium Silver Coins</h2>
        <p className="mt-4 text-slate-600 text-sm max-w-lg mx-auto">
          Explore hallmarked, certified and elegantly crafted premium silver coins for every
          occasion.
        </p>

        <Link
          href="/collections"
          className="inline-block mt-8 px-8 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold shadow hover:bg-slate-800 transition"
        >
          Browse Collections
        </Link>
      </section>
    </>
  );
}
