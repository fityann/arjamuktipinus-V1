"use client";

import { useState } from "react";
import { Button, Card, Badge } from "flowbite-react";
import {
  HiOutlineArrowRight,
  HiMenu,
  HiX,
  HiOutlineSparkles,
  HiOutlineCube,
} from "react-icons/hi";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 selection:bg-amber-100 selection:text-amber-900 scroll-smooth font-sans">
      {/* NAVIGATION BAR */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-gray-100 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-5">
              <img src="/images/logo.jpeg" alt="Logo" className="w-10 h-10 rounded-full bg-none" />
              <a
                href="#home"
                className="text-2xl font-black tracking-tighter text-amber-800 dark:text-amber-500 uppercase"
              >
                Arjamukti
                <span className="text-gray-900 dark:text-white ml-1">
                  Pinus
                </span>
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
                ),
              )}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-amber-600 focus:outline-none"
              >
                {isOpen ? (
                  <HiX className="h-8 w-8" />
                ) : (
                  <HiMenu className="h-8 w-8" />
                )}
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
              ),
            )}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src="/images/video1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 backdrop-blur-[1px]" />
        </div>

        <div className="container mx-auto relative z-10 px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Badge
              color="warning"
              className="w-fit mb-6 px-6 py-2 text-xs uppercase tracking-[0.3em] font-black text-white rounded-full bg-amber-600"
            >
              Crafting Excellence Since 1994
            </Badge>

            <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8 tracking-tighter text-white">
              Elevate Your <span className="text-amber-400">Space</span> <br />
              With Precision.
            </h1>

            <p className="text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              "Transforming premium pine wood into interior masterpieces. Built
              with international standards and a legacy of mastery."
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button
                color="warning"
                size="xl"
                pill
                className="font-bold px-10 group bg-amber-500 hover:bg-amber-600 shadow-xl shadow-amber-900/20"
                href="#furnitur"
              >
                Explore Collections
                <HiOutlineArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="lg:w-5/12 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-200/30 rounded-full blur-3xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group border-8 border-gray-50 dark:border-gray-800">
                <img
                  src="/images/fotoprofile.jpeg"
                  className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 hover:scale-100"
                  alt="Master Artisan"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-8 rounded-3xl shadow-2xl">
                <p className="text-5xl font-black mb-1">30+</p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-90 leading-none">
                  Years of <br /> Mastery
                </p>
              </div>
            </div>

            <div className="lg:w-7/12">
              <h2 className="text-amber-600 font-bold uppercase tracking-[0.4em] text-xs mb-6">
                Legacy & Craftsmanship
              </h2>
              <h3 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-10 tracking-tighter leading-[1.1]">
                Mastery in Every <br />
                <span className="text-amber-500 underline decoration-amber-200/30 underline-offset-8">
                  Grain.
                </span>
              </h3>

              <div className="space-y-8 text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-light">
                <p>
                  Our journey began in{" "}
                  <span className="font-bold text-gray-900 dark:text-white">
                    Taiwan in 1994
                  </span>
                  . For three decades, we have dedicated ourselves to
                  understanding the unique character of every pine timber.
                </p>
                <div className="relative p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/50 border-l-4 border-amber-500">
                  <p className="italic text-gray-800 dark:text-gray-200 text-xl font-medium">
                    "Furniture is not just a static object; it is a dialogue
                    between nature, machine precision, and the human touch."
                  </p>
                </div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Today, Arjamukti Pinus brings global industrial standards to
                  the local stage, creating spaces that are warm, minimalist,
                  and timeless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">
              Milestones
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter">
              Professional <span className="text-amber-500">Journey.</span>
            </h3>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {/* 2021 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-amber-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-500 group-hover:scale-125 z-10">
                <span className="text-xs font-bold">21</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all">
                <time className="font-black text-amber-600 mb-1 block uppercase tracking-widest text-xs">
                  2021 • Bandung
                </time>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  BRI Simpedes Exhibition
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed italic">
                  Showcasing premium pine collections at the historic Gedung
                  Sate, West Java.
                </p>
              </div>
            </div>

            {/* 2022 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-amber-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-500 group-hover:scale-125 z-10">
                <span className="text-xs font-bold">22</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-3xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 shadow-sm hover:shadow-xl transition-all">
                <time className="font-black text-amber-600 mb-1 block uppercase tracking-widest text-xs">
                  2022 • Tasikmalaya
                </time>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Creative Industry Workshop
                </h4>
                <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed italic">
                  Strategic forum with the Ministry of Tourism & Creative
                  Economy of Indonesia.
                </p>
              </div>
            </div>

            {/* 2023 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-amber-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-500 group-hover:scale-125 z-10">
                <span className="text-xs font-bold">23</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all">
                <time className="font-black text-amber-600 mb-1 block uppercase tracking-widest text-xs">
                  2023 • Technical Certification
                </time>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Industrial Assembling License
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed italic">
                  Certified by the Ministry of Manpower for technical precision
                  in wood and metal assembly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* COLLECTIONS SECTION */}
      <section id="furnitur" className="py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-amber-600 font-bold uppercase tracking-[0.4em] text-xs mb-4">
                Gallery
              </h2>
              <h2 className="text-5xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">
                Curated <span className="text-amber-500">Collections</span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-md italic text-right hidden md:block font-light">
              Each piece is designed with millimeter precision to ensure lasting
              durability and high-end visual aesthetics.
            </p>
          </div>

          {/* GRID TANPA BUTTON */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p, i) => (
              <div
                key={i}
                className="group relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-gray-50 dark:bg-gray-800/30"
              >
                <div className="relative h-[450px] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />

                  {/* OVERLAY: Muncul saat di-hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                    <Badge
                      color="warning"
                      className="w-fit mb-4 px-4 py-1 text-[10px] uppercase font-bold tracking-widest rounded-full"
                    >
                      {p.category}
                    </Badge>
                    <h5 className="text-2xl font-black text-white tracking-tight mb-2">
                      {p.title}
                    </h5>
                    <p className="text-gray-300 text-sm font-light italic leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>

                {/* Label di bawah gambar tetap ada tapi simpel (opsional) */}
                <div className="absolute top-6 left-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg">
                    <p className="text-xs font-black text-gray-900 uppercase tracking-widest">
                      {p.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-amber-600 font-bold uppercase tracking-[0.4em] text-xs mb-4">
            Materials
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-16 tracking-tighter">
            Standardized <span className="text-amber-500">Components.</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌲",
                title: "Premium Pine",
                sub: "Grade A Timber",
                desc: "Select timber with low moisture content to prevent warping and shrinkage.",
              },
              {
                icon: "⛓️",
                title: "Industrial Steel",
                sub: "High-Tensile Base",
                desc: "Solid steel frames with high-quality anti-corrosion powder coating.",
              },
              {
                icon: "🏗️",
                title: "Precision Alloy",
                sub: "Lightweight Frame",
                desc: "Precision-cut aluminum for modern, lightweight, and durable ornaments.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-10 rounded-[3rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-4">
                  {item.sub}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center border-b border-gray-900 pb-20">
            <div>
              <span className="text-4xl font-black tracking-tighter text-amber-500 block mb-6 uppercase">
                Arjamukti<span className="text-white">Pinus</span>
              </span>
              <p className="text-gray-500 max-w-md text-lg font-light italic leading-relaxed">
                Bringing the warmth of nature into modern spaces through
                precision-crafted, sustainable pine woodwork.
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-6">
              <p className="text-sm text-gray-400 font-bold tracking-[0.2em] uppercase">
                Connect with us
              </p>
              <div className="flex gap-10 text-xs font-black tracking-[0.3em] uppercase">
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Instagram
                </a>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  WhatsApp
                </a>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Behance
                </a>
              </div>
            </div>
          </div>
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-[10px] tracking-[0.5em] uppercase font-bold text-center">
              © {new Date().getFullYear()} Arjamukti Pinus Workshop •
              Craftsmanship Redefined
            </p>
            <div className="flex items-center gap-2 text-gray-600 text-[10px] tracking-[0.2em] uppercase font-bold">
              <HiOutlineCube /> FAY
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background: #fbbf24;
          color: #000;
        }
      `}</style>
    </div>
  );
}

const products = [
  {
    title: "Multi-Purpose Cabinet",
    desc: "A seamless blend of high-capacity storage and minimalist aesthetics, crafted from premium pine to bring warmth to any modern interior.",
    img: "/images/produk1.jpeg",
  },
  {
    title: "Cat Hotel Suite",
    desc: "Redefining pet living with industrial-grade precision. Features modular ventilation and sustainable wood for a safe, sophisticated feline sanctuary.",
    img: "/images/produk2.jpeg",
  },
  {
    title: "Premium Cat Kennel",
    desc: "Where durability meets comfort. Engineered with moisture-resistant pine and high-tensile accents to provide the ultimate retreat for your pets.",
    img: "/images/produk3.jpeg",
  },
  {
    title: "Bespoke Frames",
    desc: "Preserve your moments with museum-quality frames. Available in custom dimensions with a focus on natural wood grain and precision-mitered edges.",
    img: "/images/produk4.jpeg",
  },
];
