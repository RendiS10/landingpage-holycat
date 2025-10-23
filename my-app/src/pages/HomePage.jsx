import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Impor Gambar
import heroImage from "../../public/images/adam.png";
import loveIcon from "../../public/images/love.png";
import kagetIcon from "../../public/images/kaget.png";
import aboutUs2Icon from "../../public/images/aboutus2.png";
import visiMisiIcon from "../../public/images/visi-misi.png";
import aboutUsImage from "../../public/images/aboutus2.png";
import vitaminIcon from "../../public/images/vitamin.png";
import obatPencernaanIcon from "../../public/images/obat.png";
import perawatanIcon from "../../public/images/sampo.png";
import visiMisiImage from "../../public/images/visi-misi.png";
import avatarDuduk from "../../public/images/duduk.png";
import avatarKetawa from "../../public/images/ketawa.png";
import avatarLove from "../../public/images/love.png";
import achivment from "../../public/images/achivment.png";

// Import untuk section Tentang Holycat
import holycatLabsImage from "../../public/images/aboutus.png";

const HomePage = () => {
  // Logic untuk Baca Selengkapnya - Tentang Kami
  const [showFullAbout, setShowFullAbout] = useState(false);
  const toggleTeks = () => setShowFullAbout(!showFullAbout);

  // Logic untuk Baca Selengkapnya - Misi
  const [showFullMisi, setShowFullMisi] = useState(false);
  const toggleMisi = () => setShowFullMisi(!showFullMisi);

  // Mempersiapkan elemen untuk Intersection Observer
  const animatedElementsRef = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    animatedElementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const addAnimatedRef = (el) => {
    if (el && !animatedElementsRef.current.includes(el)) {
      animatedElementsRef.current.push(el);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* === HERO SECTION === */}
        <section className="hero flex flex-col md:flex-row justify-center items-center px-6 md:px-16 py-0 bg-primary-green min-h-[84vh] gap-8 md:gap-12 lg:gap-20">
          {/* --- Konten Teks --- */}
          <div
            ref={addAnimatedRef}
            className="hero-text max-w-lg animate-from-left flex flex-col gap-8 text-center md:text-left items-center md:items-start"
          >
            <h1 className="text-white font-lilita font-normal text-5xl md:text-6xl lg:text-[76px] leading-tight tracking-normal">
              Pilihan Tepat Jadikan Kucing Sehat
            </h1>
            <p className="font-dongle font-normal text-2xl md:text-[32px] text-white leading-tight">
              Mitra Terpercaya dalam Menyediakan Solusi Kesehatan Kucing yang
              Lengkap, Aman, dan Teruji Efektif
            </p>
            <a
              href="/#pet-section"
              className="btn bg-primary-yellow text-white py-2 px-12 rounded-xl text-xl font-bold inline-block transition-all hover:bg-white hover:text-primary-yellow hover:-translate-y-0.5 shadow-lg"
            >
              SHOP NOW!
            </a>
          </div>

          {/* --- Konten Gambar --- */}
          <div
            ref={addAnimatedRef}
            className="hero-image animate-from-right w-full max-w-sm md:max-w-none md:w-1/2 h-auto"
          >
            <img
              src={heroImage}
              alt="Happy Cat"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* === PRODUCT INFO SECTION === */}
        <section
          id="products"
          className="scroll-mt-[75px] py-16 md:py-20 px-6 md:px-16 bg-white text-center"
        >
          <div className="container max-w-screen-xl mx-auto">
            <div
              ref={addAnimatedRef}
              className="productinfo-header animate-from-bottom"
            >
              <h2 className="text-4xl md:text-5xl text-text-dark mb-4">
                Solusi Terpercaya untuk Kesehatan dan
                <br /> Perawatan Anabul Anda
              </h2>
              <p className="text-xl md:text-2xl text-text-dark max-w-4xl mx-auto opacity-80">
                Temukan produk inovatif Holycat yang dirancang khusus untuk
                <br />
                memenuhi kebutuhan anabul anda.
              </p>
            </div>

            <div className="productinfo-grid flex flex-wrap justify-center gap-8 md:gap-10 mt-12">
              <div
                ref={addAnimatedRef}
                className="productinfo-card flex-1 min-w-[300px] max-w-md bg-white p-8 rounded-xl  transition-all  hover:-translate-y-2  hover:border-primary-green animate-from-bottom is-visible"
                style={{ "--animation-delay": "0.3s" }}
              >
                <div className="icon-circle primary-yellow-bg w-296 h-296 rounded-full mx-auto mb-5 flex items-center justify-center">
                  <img
                    src={obatPencernaanIcon}
                    alt="Obat Pencernaan icon"
                    className="w-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-3xl text-text-dark my-4">Obat</h3>
                <p>
                  Diformulasikan dan sudah teruji laboratorium dengan
                  pendampingan dokter hewan — efektif, aman, dan terpercaya
                  untuk menjaga kesehatan anabul mu
                </p>
              </div>

              <div
                ref={addAnimatedRef}
                className="productinfo-card flex-1 min-w-[300px] max-w-md bg-white p-8 rounded-xl  transition-all  hover:-translate-y-2  hover:border-primary-green animate-from-bottom is-visible"
                style={{ "--animation-delay": "0.1s" }}
              >
                <div className="icon-circle primary-green-bg w-296 h-296 rounded-full mx-auto mb-5 flex items-center justify-center">
                  <img
                    src={vitaminIcon}
                    alt="Vitamin Icon"
                    className="w-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-3xl text-text-dark my-4">
                  Suplemen & Vitamin
                </h3>
                <p>
                  Nutrisi ilmiah hasil uji laboratorium untuk menjaga daya
                  tahan, bulu, dan kebutuhan harian anabul.
                </p>
              </div>

              <div
                ref={addAnimatedRef}
                className="productinfo-card flex-1 min-w-[300px] max-w-md bg-white p-8 rounded-xl  transition-all  hover:-translate-y-2  hover:border-primary-green animate-from-bottom is-visible"
                style={{ "--animation-delay": "0.5s" }}
              >
                <div className="icon-circle primary-green-bg w-296 h-296 rounded-full mx-auto mb-5 flex items-center justify-center">
                  <img
                    src={perawatanIcon}
                    alt="Perawatan Kulit & Bulu Icon"
                    className="w-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-3xl text-text-dark my-4">Grooming</h3>
                <p>
                  Perawatan luar dengan formula lembut berstandar dokter hewan,
                  menjaga kebersihan dan kilau bulu setiap hari.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === TENTANG HOLYCAT SECTION === */}
        <section
          id="tentang"
          className="scroll-mt-[75px] md:pb-20 px-6 md:px-16 bg-white"
        >
          <div className="container max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
              {/* Kolom Kiri - Gambar dengan Border SVG Melengkung */}
              <div
                ref={addAnimatedRef}
                className="flex-1 animate-from-left flex justify-center relative"
              >
                {/* Wrapper dengan posisi relatif agar layer bisa ditumpuk */}
                <div className="relative w-full max-w-md p-3">
                  {/* Frame Transparan */}
                  <img
                    src="/images/aboutus2.png"
                    alt="Bingkai Hijau"
                    className="absolute top-0 left-0 w-full h-full object-contain z-10 pointer-events-none"
                  />

                  {/* Gambar utama dengan jarak (padding effect) */}
                  <div className="relative w-full h-full p-5">
                    <img
                      src={holycatLabsImage}
                      alt="Holycat Labs"
                      className="w-full h-full object-contain rounded-[40px] scale-[1] z-0"
                    />
                  </div>
                </div>
              </div>

              {/* Kolom Kanan - Konten Teks */}
              <div ref={addAnimatedRef} className="flex-1 animate-from-right">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6">
                  Tentang Holycat
                </h2>
                <p className="text-lg md:text-xl text-text-dark mb-4 leading-relaxed">
                  Kami sepenuh hati mendedikasikan diri untuk menghadirkan
                  rangkaian solusi kesehatan hewan yang{" "}
                  <strong>lengkap, aman, dan terpercaya</strong>.
                  <br />
                  <br />
                  Misi kami sederhana: menyediakan produk berkualitas yang{" "}
                  <strong>teruji efektif</strong>, diracik oleh para{" "}
                  <strong>profesional berpengalaman</strong>, dan tetap{" "}
                  <strong>terjangkau</strong> bagi semua pecinta hewan...
                </p>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    showFullAbout ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  <p className="text-lg md:text-xl text-text-dark mb-4 leading-relaxed">
                    Dengan komitmen penuh terhadap kesejahteraan hewan
                    kesayangan Anda, Holycat hadir sebagai solusi terpercaya
                    untuk menjaga kesehatan dan kebahagiaan mereka setiap hari.
                  </p>
                </div>
                <button
                  onClick={toggleTeks}
                  className="bg-primary-yellow text-white py-3 px-8 rounded-xl text-lg font-bold inline-block transition-all hover:bg-yellow-500 hover:-translate-y-0.5 shadow-lg mt-4"
                >
                  {showFullAbout ? "Read less..." : "Read more..."}
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#FFBF00] py-16 px-6 md:px-20 text-center">
          {/* Judul Section */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Produk Unggulan Kami
          </h2>

          {/* Kartu Produk */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-16">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow-lg w-full max-w-xs p-6 flex flex-col justify-between"
              >
                {/* Gambar Produk */}
                <div className="bg-[#44AF7C] rounded-xl h-56 mb-4"></div>

                {/* Isi Kartu */}
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Produk Unggulan
                </h1>
                <p className="text-gray-600 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* Rating dan Tombol */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-1 text-yellow-500 font-bold">
                    <span>⭐</span>
                    <span className="text-gray-800">4,8</span>
                  </div>
                  <button className="bg-yellow-400 text-white p-2 rounded-full hover:bg-yellow-500 transition">
                    🛒
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bagian Bawah - Sudah Berizin */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Ikon Sertifikat */}
            <div className="bg-[#44AF7C] w-[225px] h-[225px] rounded-full flex items-center justify-center text-white text-4xl">
              <img src={achivment} alt="" className="w-[150px] h-[135px]" />
            </div>

            {/* Teks Deskripsi */}
            <div className="text-left max-w-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Sudah Berizin Kementan
              </h3>
              <p className="text-white text-base md:text-lg">
                Langkah kecil untuk kami, tapi besar untuk kepercayaanmu. Kini,
                seluruh produk Holycat telah resmi terdaftar dan berizin
                Kementan.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/6285171002858"
        target="_blank"
        className="whatsapp-float fixed bottom-6 right-6 bg-whatsapp text-white py-3 px-5 rounded-full text-lg font-bold shadow-lg z-[1000] flex items-center gap-2 transition-all hover:bg-whatsapp-hover hover:-translate-y-0.5"
      >
        <i className="fab fa-whatsapp text-2xl m-0"></i>
        <span>Konsultasi Gratis Sekarang!</span>
      </a>
    </>
  );
};

export default HomePage;
