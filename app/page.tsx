"use client";

import { useState } from "react";
import { Button, Badge } from "flowbite-react";
import {
  HiOutlineArrowRight,
  HiMenu,
  HiX,
  HiOutlineCube,
} from "react-icons/hi";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 selection:bg-amber-100 selection:text-amber-900 scroll-smooth font-sans overflow-x-hidden text-gray-900 dark:text-gray-100">
      {/* NAVIGATION BAR */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-gray-100 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-3 sm:gap-5">
              <img
                src="/images/logo.jpeg"
                alt="Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
              />
              <a
                href="#home"
                className="text-lg sm:text-2xl font-black tracking-tighter text-amber-800 dark:text-amber-500 uppercase whitespace-nowrap"
              >
                Arjamukti
                <span className="text-gray-900 dark:text-white ml-1">Pinus</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {["home", "about", "experience", "collections", "resources"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item === "collections" ? "furnitur" : item}`}
                    className="text-xs font-bold text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-500 transition-all uppercase tracking-widest"
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-amber-600 focus:outline-none p-2"
              >
                {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-6 py-8 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            {["home", "about", "experience", "collections", "resources"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item === "collections" ? "furnitur" : item}`}
                  onClick={handleNavClick}
                  className="block text-xl font-bold text-gray-800 dark:text-gray-200 hover:text-amber-600 capitalize"
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen w-full flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-105">
            <source src="/images/video1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 backdrop-blur-[1px]" />
        </div>

        <div className="container mx-auto relative z-10 px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Badge color="warning" className="w-fit mb-6 px-4 py-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-black text-white rounded-full bg-amber-600">
              Crafting Excellence Since 1994
            </Badge>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight mb-8 tracking-tighter text-white break-words w-full">
              Elevate Your <span className="text-amber-400">Space</span> <br className="hidden sm:block" />
              With Precision.
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto font-light px-2">
              &quot;Transforming premium pine wood into interior masterpieces. Built with international standards and a legacy of mastery.&quot;
            </p>
            <div className="w-full sm:w-auto px-4">
              <Button color="warning" size="xl" pill className="w-full sm:w-fit font-bold px-6 sm:px-10 py-2 sm:py-3 group bg-amber-500 hover:bg-amber-600 shadow-xl shadow-amber-900/20" href="#furnitur">
                Explore Collections
                <HiOutlineArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 md:py-32 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto">
            <div className="w-full lg:w-5/12 relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-amber-200/30 rounded-full blur-3xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 md:border-8 border-gray-50 dark:border-gray-800 group">
                <img src="/images/fotoprofile.jpeg" className="w-full h-[350px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" alt="Master Artisan" />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-amber-500 text-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl">
                <p className="text-3xl md:text-5xl font-black mb-1">30+</p>
                <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold leading-none">Years of <br /> Mastery</p>
              </div>
            </div>
            <div className="lg:w-7/12 text-center lg:text-left">
              <h2 className="text-amber-600 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4">Legacy & Craftsmanship</h2>
              <h3 className="text-3xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight">Mastery in Every <br /><span className="text-amber-500 underline decoration-amber-200/30 underline-offset-8">Grain.</span></h3>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed font-light">
                <p>Our journey began in <span className="font-bold text-gray-900 dark:text-white">Taiwan in 1994</span>. For three decades, we have dedicated ourselves to understanding the unique character of every pine timber.</p>
                <div className="relative p-6 md:p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border-l-4 border-amber-500">
                  <p className="italic text-gray-800 dark:text-gray-200 text-lg md:text-xl font-medium">&quot;Furniture is not just a static object; it is a dialogue between nature and precision.&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE / MILESTONES SECTION */}
      <section id="experience" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">Milestones</h2>
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter">Professional <span className="text-amber-500">Journey.</span></h3>
          </div>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
            {[
              { year: "2021", loc: "Bandung", title: "BRI Simpedes Exhibition", desc: "Showcasing premium collections at Gedung Sate." },
              { year: "2022", loc: "Tasikmalaya", title: "Creative Industry Workshop", desc: "Forum with the Ministry of Tourism & Creative Economy." },
              { year: "2023", loc: "Certification", title: "Industrial Assembling License", desc: "Certified technical precision in wood and metal assembly." }
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                  <span className="text-[10px] font-bold">{item.year.slice(-2)}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                  <time className="font-black text-amber-600 mb-1 block uppercase tracking-widest text-[10px]">{item.year} • {item.loc}</time>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTIONS SECTION */}
      <section id="furnitur" className="py-20 md:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="text-left">
              <h2 className="text-amber-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Gallery</h2>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Curated <span className="text-amber-500">Collections</span></h2>
            </div>
            <p className="text-gray-500 max-w-md italic hidden md:block font-light text-right text-sm">Each piece is designed with millimeter precision to ensure lasting durability and high-end aesthetics.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((p, i) => (
              <div key={i} className="group relative rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 bg-gray-50 dark:bg-gray-800/30">
                <div className="relative h-[400px] md:h-[450px] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10">
                    <h5 className="text-xl md:text-2xl font-black text-white mb-2">{p.title}</h5>
                    <p className="text-gray-300 text-xs md:text-sm italic font-light line-clamp-3">{p.desc}</p>
                  </div>
                </div>
                <div className="absolute top-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full shadow-lg">
                    <p className="text-[10px] font-black text-gray-900 uppercase tracking-widest">{p.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES / MATERIALS SECTION */}
      <section id="resources" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-amber-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Materials</h2>
          <h3 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter">Standardized <span className="text-amber-500">Components.</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🌲", title: "Premium Pine", sub: "Grade A Timber", desc: "Select timber with low moisture content to prevent warping." },
              { icon: "⛓️", title: "Industrial Steel", sub: "High-Tensile Base", desc: "Solid steel frames with high-quality anti-corrosion coating." },
              { icon: "🏗️", title: "Precision Alloy", sub: "Lightweight Frame", desc: "Precision-cut aluminum for modern and durable ornaments." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 md:p-12 rounded-[3rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-500 group">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                <p className="text-[9px] font-black text-amber-600 uppercase tracking-widest mb-4">{item.sub}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-white py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-gray-900 pb-16">
            <div className="text-center md:text-left">
              <span className="text-3xl font-black tracking-tighter text-amber-500 block mb-6 uppercase">Arjamukti<span className="text-white">Pinus</span></span>
              <p className="text-gray-500 max-w-md text-sm font-light italic leading-relaxed">Bringing the warmth of nature into modern spaces through precision-crafted, sustainable pine woodwork.</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-6">
              <p className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">Connect with us</p>
              <div className="flex gap-8 text-[10px] font-black tracking-[0.2em] uppercase">
                <a href="https://www.instagram.com/Arjamukti_Pinus" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">Instagram</a>
                <a href="https://wa.me/62895393494784" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">WhatsApp</a>
                <a href="https://www.facebook.com/Arjamukti Pinus Pinus" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">Facebook</a>
              </div>
            </div>
          </div>
          <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold">
            <p>© {new Date().getFullYear()} Arjamukti Pinus Workshop</p>
            <div className="flex items-center gap-2"><HiOutlineCube /> FAY</div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        body { min-width: 320px; overflow-x: hidden; }
        ::selection { background: #fbbf24; color: #000; }
      `}</style>
    </div>
  );
}

const products = [
  { title: "Multi-Purpose Cabinet", desc: "A seamless blend of high-capacity storage and minimalist aesthetics, crafted from premium pine.", img: "/images/produk1.jpeg" },
  { title: "Cat Hotel Suite", desc: "Redefining pet living with industrial-grade precision. Features modular ventilation.", img: "/images/produk2.jpeg" },
  { title: "Premium Cat Kennel", desc: "Where durability meets comfort. Engineered with moisture-resistant pine.", img: "/images/produk3.jpeg" },
  { title: "Bespoke Frames", desc: "Preserve your moments with museum-quality frames focusing on natural grain.", img: "/images/produk4.jpeg" },
];