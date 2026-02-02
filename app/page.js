import Head from 'next/head';

export default function AbdullahTradingCo() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100">
      <Head>
        <title>Abdullah Trading Co | Importer & Stockist of Bearings & V-Belts Lahore</title>
        <meta name="description" content="Abdullah Trading Co. since 1988. Leading Importers and Stockists of high-quality V-Belts and Industrial Bearings on Brandreth Road, Lahore. Call +923214709011." />
        <meta name="keywords" content="V-Belts Lahore, Bearings Importer Pakistan, Abdullah Trading Co, Brandreth Road Industrial Store, SKP Bearings, Bando V-Belts Pakistan, Industrial Stockist Lahore" />
        <meta property="og:title" content="Abdullah Trading Co | Industrial Importers Since 1988" />
        <meta property="og:description" content="Premium V-Belts and Bearings Stockist in Lahore. Quality and Reliability for over 35 years." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none">ABDULLAH</span>
            <span className="text-sm font-bold text-orange-600 tracking-[0.2em]">TRADING CO.</span>
          </div>
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#about" className="hover:text-orange-600 transition">Since 1988</a>
            <a href="#products" className="hover:text-orange-600 transition">Products</a>
            <a href="tel:+923214709011" className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">Call Now</a>
          </div>
        </div>
      </nav>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-bold mb-6">
                Official Importer & Stockist
              </span>
              <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] mb-8">
                Powering <br/> <span className="text-slate-400 italic">Industry</span> <br/> Since 1988.
              </h1>
              <p className="text-xl text-slate-600 max-w-md mb-10 leading-relaxed">
                Premium V-Belts and Industrial Bearings sourced from world-class manufacturers. Trusted by thousands in Lahore and across Pakistan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/923214709011" className="flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-xl shadow-green-100">
                  Order via WhatsApp
                </a>
                <a href="#products" className="flex items-center justify-center bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition">
                  View Catalog
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-[40px] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                 {/* This represents where the hero image would go */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent z-10"></div>
                <div className="flex items-center justify-center h-full text-slate-300 font-bold text-2xl">
                  
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl border border-slate-50 hidden md:block">
                <p className="text-4xl font-black text-orange-600">35+</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Years of Trust</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- KEYWORDS / BRANDS BAR --- */}
        <div className="bg-slate-50 py-10 overflow-hidden border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 opacity-50 grayscale font-black text-2xl italic">
            <span>SKF</span> <span>NSK</span> <span>FAG</span> <span>BANDO</span> <span>MITSUBOSHI</span> <span>NTN</span>
          </div>
        </div>

        {/* --- PRODUCT SECTION --- */}
        <section id="products" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black mb-16 text-center">Our Core Inventory</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Product 1 */}
              <div className="group bg-slate-50 p-10 rounded-[32px] hover:bg-slate-900 transition-colors duration-500">
                <div className="h-40 w-40 bg-white rounded-2xl mb-8 flex items-center justify-center shadow-sm">
                   
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-white transition">High-Tensile V-Belts</h3>
                <p className="text-slate-600 group-hover:text-slate-400 mb-6">Heat and oil-resistant belts for power transmission. Available in all sizes and sections.</p>
                <ul className="space-y-2 text-sm font-bold group-hover:text-orange-500 text-orange-600">
                  <li>• Industrial A, B, C, D, E Sections</li>
                  <li>• Wedge Belts (SPA, SPB, SPC)</li>
                  <li>• Timing & Ribbed Belts</li>
                </ul>
              </div>

              {/* Product 2 */}
              <div className="group bg-slate-50 p-10 rounded-[32px] hover:bg-slate-900 transition-colors duration-500">
                <div className="h-40 w-40 bg-white rounded-2xl mb-8 flex items-center justify-center shadow-sm">
                   

[Image of Steel Ball Bearings]

                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-white transition">Precision Bearings</h3>
                <p className="text-slate-600 group-hover:text-slate-400 mb-6">High-speed, low-friction bearings for textile, automotive, and heavy machinery.</p>
                <ul className="space-y-2 text-sm font-bold group-hover:text-orange-500 text-orange-600">
                  <li>• Deep Groove Ball Bearings</li>
                  <li>• Tapered Roller Bearings</li>
                  <li>• Pillow Block Units</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- TRUST SECTION --- */}
        <section id="about" className="py-24 bg-orange-600 text-white px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-8 italic text-orange-200">The Brandreth Road Legacy.</h2>
            <p className="text-2xl leading-relaxed">
              Established in 1988, <strong>Abdullah Trading Co.</strong> has spent decades building a reputation as a reliable importer. We don't just sell parts; we sell the reliability that keeps Pakistan's factories running.
            </p>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 mb-20">
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-black tracking-tighter text-white leading-none">ABDULLAH</span>
              <span className="text-sm font-bold text-orange-500 tracking-[0.2em]">TRADING CO.</span>
            </div>
            <p className="max-w-xs leading-relaxed">
              Specialist Importers of Power Transmission Solutions since 1988. Quality you can trust.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm text-orange-500">Find Us</h4>
            <p className="text-lg text-slate-200">
              Brandreth Road,<br/>
              Lahore, Punjab,<br/>
              Pakistan
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm text-orange-500">Contact Sales</h4>
            <a href="tel:+923214709011" className="text-3xl font-black text-white hover:text-orange-500 transition">
              +92 321 4709011
            </a>
            <p className="mt-4">abdullahtrading88@gmail.com</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-10 border-t border-slate-800 text-center text-sm">
          &copy; {new Date().getFullYear()} Abdullah Trading Co. Built for Industrial Excellence.
        </div>
      </footer>
    </div>
  );
}
