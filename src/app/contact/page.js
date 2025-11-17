// PREMIUM CONTACT PAGE (Apple-Style Minimal, Tailwind-Only)
// File: app/contact/page.jsx
// Clean layout with elegant spacing, minimal form, and premium typography.

import HeadMeta from "@/components/HeadMeta";

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact SilverCoins",
    description: "Get in touch with SilverCoins customer support for queries about orders, customization or bulk gifting.",
  };

  return (
    <>
      <HeadMeta
        title="Contact Us — SilverCoins | Support, Custom Orders & Bulk Gifting"
        description="Contact SilverCoins for support, customization queries, bulk corporate gifting or order assistance."
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-white to-slate-50 border-b border-slate-100 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            We're Here to Help
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Whether you have questions about your order, customization, gifting options
            or anything else — our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 max-w-6xl">
          {/* CONTACT INFO */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Contact Information</h2>
            <p className="mt-4 text-slate-600 text-sm max-w-md">
              Reach out to us through any of the following methods. Our support team usually
              responds within 6–12 hours.
            </p>

            <div className="mt-10 space-y-8 text-sm text-slate-700">
              <div>
                <h4 className="text-slate-900 font-medium text-base">Email</h4>
                <p className="mt-1 text-slate-600">support@silvercoins.com</p>
              </div>

              <div>
                <h4 className="text-slate-900 font-medium text-base">Phone / WhatsApp</h4>
                <p className="mt-1 text-slate-600">+91 98765 43210</p>
              </div>

              <div>
                <h4 className="text-slate-900 font-medium text-base">Business Hours</h4>
                <p className="mt-1 text-slate-600">Mon – Sat: 10:00 AM – 7:00 PM</p>
              </div>

              <div>
                <h4 className="text-slate-900 font-medium text-base">Address</h4>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  SilverCoins India Pvt Ltd
                  <br /> 3rd Floor, MG Road
                  <br /> Bangalore, India – 560001
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Send Us a Message</h3>
            <p className="mt-2 text-sm text-slate-600">Fill out the form below and our team will get back to you shortly.</p>

            <form className="mt-8 space-y-6">
              <div>
                <label className="text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea
                  rows="5"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-slate-400"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition shadow"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP (Optional / Minimal) */}
      <section className="bg-slate-50 border-t border-slate-200 py-20 text-center">
        <h3 className="text-xl font-semibold text-slate-900 mb-6">Find Us on the Map</h3>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..." // replace with actual embed
              width="100%"
              height="380"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}