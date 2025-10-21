import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Pastikan Link diimpor
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Impor Gambar (Memastikan Jalur Relatif ke folder public/images)
// Path: dari src/pages/ ke public/images/ adalah ../../public/images/
import heroImage from "../../public/images/adam.png";
import loveIcon from "../../public/images/love.png";
import kagetIcon from "../../public/images/kaget.png";
import aboutUs2Icon from "../../public/images/aboutus2.png";
import visiMisiIcon from "../../public/images/visi-misi.png";
import aboutUsImage from "../../public/images/aboutus2.png"; // Digunakan juga di kementan
import vitaminIcon from "../../public/images/vitamin-icon.jpg";
import obatPencernaanIcon from "../../public/images/obat.png";
import perawatanIcon from "../../public/images/perawatan.jpg";
import visiMisiImage from "../../public/images/visi-misi.png";

// HAPUS: import avatar1 from "../../public/images/avatar-1.jpg";
// HAPUS: import avatar2 from "../../public/images/avatar-2.jpg";
// HAPUS: import avatar3 from "../../public/images/avatar-3.jpg";
// Ganti dengan gambar yang ADA di file yang diunggah:
import avatarDuduk from "../../public/images/duduk.png"; // Pengganti avatar 1
import avatarKetawa from "../../public/images/ketawa.png"; // Pengganti avatar 2
import avatarLove from "../../public/images/love.png"; // Pengganti avatar 3

// Import hook untuk Intersection Observer
// import useIntersectionObserver from '../hooks/useIntersectionObserver';
// (Dikomenter karena logika IO sudah ada di komponen, tidak perlu hook)

// -- Komponen Utama --

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
      <div className="bg-[#44AF7C]">
        <Navbar />
      </div>
      <main>
        {/* === HERO SECTION === */}
        <section
          // Ditambahkan items-center untuk mensejajarkan teks dan gambar secara vertikal di desktop
          className="hero flex flex-col md:flex-row justify-center items-center px-6 md:px-16 py-0 bg-primary-green min-h-[84vh] gap-8 md:gap-12 lg:gap-20"
        >
          {/* --- Konten Teks --- */}
          <div
            ref={addAnimatedRef}
            // Ditambahkan: perataan teks & item diubah untuk mobile vs desktop
            className="hero-text max-w-lg animate-from-left flex flex-col gap-8 text-center md:text-left items-center md:items-start"
          >
            <h1
              // DIUBAH: Ukuran font dibuat responsif (mobile-first)
              className="text-white font-lilita font-normal text-5xl md:text-6xl lg:text-[76px] leading-tight tracking-normal"
            >
              Pilihan Tepat Jadikan Kucing Sehat
            </h1>
            <p
              // DIUBAH: Ukuran font dibuat responsif
              className="font-dongle font-normal text-2xl md:text-[32px] text-white leading-tight"
            >
              Mitra Terpercaya dalam Menyediakan Solusi Kesehatan Kucing yang
              Lengkap, Aman, dan Teruji Efektif
            </p>
            <a
              href="/#pet-section"
              // Kelas self-start dihapus agar perataan dikontrol oleh parent div
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

        {/* === PRODUCT INFO SECTION (simplified) === */}
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
                Solusi Terpercaya untuk Kesehatan dan Perawatan Anabul Anda
              </h2>
              <p className="text-xl md:text-2xl text-text-dark max-w-4xl mx-auto opacity-80">
                Temukan produk inovatif Holycat yang dirancang khusus untuk
                memenuhi kebutuhan anabul anda.
              </p>
            </div>

            <div className="productinfo-grid flex flex-wrap justify-center gap-8 md:gap-10 mt-12">
              <div
                ref={addAnimatedRef}
                className="productinfo-card flex-1 min-w-[300px] max-w-md bg-white p-8 rounded-xl shadow-lg transition-all border-2 border-transparent hover:-translate-y-2 hover:shadow-xl hover:border-primary-green animate-from-bottom"
                style={{ "--animation-delay": "0.3s" }}
              >
                <div className="icon-circle primary-yellow-bg w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center">
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
              </div>{" "}
              <div
                ref={addAnimatedRef}
                className="productinfo-card flex-1 min-w-[300px] max-w-md bg-white p-8 rounded-xl shadow-lg transition-all border-2 border-transparent hover:-translate-y-2 hover:shadow-xl hover:border-primary-green animate-from-bottom"
                style={{ "--animation-delay": "0.1s" }}
              >
                <div className="icon-circle primary-green-bg w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center">
                  <img
                    src={vitaminIcon}
                    alt="Vitamin Icon"
                    className="w-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-3xl text-text-dark my-4">
                  Suplemen & Vitamin
                </h3>
              </div>
              <div
                ref={addAnimatedRef}
                className="productinfo-card flex-1 min-w-[300px] max-w-md bg-white p-8 rounded-xl shadow-lg transition-all border-2 border-transparent hover:-translate-y-2 hover:shadow-xl hover:border-primary-green animate-from-bottom"
                style={{ "--animation-delay": "0.5s" }}
              >
                <div className="icon-circle primary-green-bg w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center">
                  <img
                    src={perawatanIcon}
                    alt="Perawatan Kulit & Bulu Icon"
                    className="w-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-3xl text-text-dark my-4">Grooming</h3>
              </div>
            </div>
          </div>
        </section>

        {/* === ABOUT US SECTION === */}
        <section
          id="about"
          className="scroll-mt-[75px] py-16 md:py-20 px-6 md:px-16 bg-light-green"
        >
          <div className="container max-w-screen-xl mx-auto">
            <div className="about-content flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 md:gap-10 max-w-screen-xl mx-auto">
              <div
                ref={addAnimatedRef}
                className="about-text flex-1 min-w-[500px] animate-from-left"
              >
                <h2 className="text-4xl md:text-5xl mb-5 text-primary-green md:border-l-8 md:border-primary-green md:pl-4 border-b-4 border-b-primary-green pb-3 md:border-b-0 md:pb-0 inline-block">
                  Tentang <b>Holycatlabs</b>
                </h2>
                <p className="text-xl md:text-2xl text-text-dark leading-relaxed mb-5">
                  <span id="teksSingkat">
                    Di Holycat Labs, kami sepenuh hati mendedikasikan diri untuk
                    menyediakan rangkaian produk kesehatan yang komprehensif
                    bagi hewan peliharaan kesayangan Anda.
                  </span>
                  <span
                    id="teksLanjutan"
                    style={{ display: showFullAbout ? "inline" : "none" }}
                  >
                    &nbsp;Misi kami adalah menghadirkan produk berkualitas
                    tinggi yang dapat Anda percaya sepenuhnya, dengan harga yang
                    selalu terjangkau. Setiap produk kami diracik dengan cermat
                    oleh para profesional ahli di industri ini, menjamin
                    keamanan dan efektivitas untuk anabul Anda. Kami bangga
                    menyajikan solusi premium yang memenuhi beragam kebutuhan
                    kesehatan sahabat berbulu Anda, menjadikan kami pilihan
                    utama bagi para pecinta hewan. Pilih Holycat Labs untuk obat
                    hewan peliharaan yang terpercaya, hemat biaya, dan selalu
                    bisa diandalkan oleh Anda serta kucing kesayangan Anda!
                  </span>
                </p>
                <button
                  id="tombolBacaSelengkapnya"
                  onClick={toggleTeks}
                  className="read-more-btn bg-transparent text-primary-green border-none cursor-pointer text-2xl font-bold underline font-body transition-all hover:text-primary-yellow"
                >
                  {showFullAbout ? "Sembunyikan" : "Baca Selengkapnya"}
                </button>
              </div>
              <div
                ref={addAnimatedRef}
                className="about-image animate-from-right"
              >
                <img
                  src={aboutUsImage}
                  alt="About Happy Pet"
                  className="w-[200px] md:w-[250px] xs:w-[220px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* === KEMENTAN SECTION === */}
        <section
          id="kementan"
          className="py-16 md:py-20 px-6 md:px-16 bg-white"
        >
          <div className="container max-w-screen-xl mx-auto">
            <div className="kementan-content flex flex-col md:flex-row items-center gap-10 md:gap-16 flex-wrap max-w-screen-xl mx-auto text-center md:text-left">
              <div
                ref={addAnimatedRef}
                className="kementan-image flex-1 min-w-[400px] relative text-center animate-from-left"
              >
                <div className="certificate-badge absolute top-[-20px] right-1/2 md:right-5 transform translate-x-1/2 md:translate-x-0 bg-primary-yellow w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg z-10">
                  <i className="fas fa-certificate text-4xl text-text-dark mb-1"></i>
                  <span className="badge-text font-heading text-base text-text-dark font-bold">
                    RESMI
                  </span>
                </div>
                <img
                  src={aboutUsImage}
                  alt="Produk Berizin Kementan"
                  className="max-w-xs md:max-w-sm w-full rounded-xl shadow-xl"
                />
              </div>

              <div
                ref={addAnimatedRef}
                className="kementan-text flex-1 min-w-[500px] animate-from-right"
              >
                <div className="section-label inline-block bg-primary-green text-white py-2 px-5 rounded-full text-base font-bold mb-5">
                  <i className="fas fa-stamp mr-2"></i> Legalitas Terjamin
                </div>
                <h2 className="text-4xl md:text-5xl text-text-dark mb-5">
                  Holycat Resmi Berizin Kementan
                </h2>
                <p className="intro-text text-xl md:text-2xl text-text-dark leading-relaxed mb-8">
                  Langkah kecil untuk kami, tapi{" "}
                  <strong>besar untuk kepercayaanmu</strong>. Kini, seluruh
                  produk Holycat telah resmi terdaftar dan berizin Kementan.
                </p>

                <div className="kementan-features mb-8">
                  <div className="feature-item flex flex-col md:flex-row gap-5 mb-6 p-5 bg-light-green rounded-xl transition-all hover:translate-x-2 hover:bg-primary-green">
                    <div className="feature-icon flex-shrink-0 w-16 h-16 bg-white rounded-xl flex items-center justify-center transition-all hover:bg-white">
                      <i className="fas fa-flask text-3xl text-primary-green transition-all hover:text-primary-green"></i>
                    </div>
                    <div className="feature-content text-center md:text-left">
                      <h4 className="text-2xl text-text-dark mb-2 transition-colors hover:text-white">
                        Uji Kualitas Ketat
                      </h4>
                      <p className="text-lg text-text-dark opacity-80 m-0 transition-colors hover:text-white hover:opacity-100">
                        Setiap formula melalui proses uji kualitas, keamanan,
                        dan efektivitas sesuai standar nasional untuk produk
                        kesehatan hewan
                      </p>
                    </div>
                  </div>

                  <div className="feature-item flex flex-col md:flex-row gap-5 mb-6 p-5 bg-light-green rounded-xl transition-all hover:translate-x-2 hover:bg-primary-green">
                    <div className="feature-icon flex-shrink-0 w-16 h-16 bg-white rounded-xl flex items-center justify-center transition-all hover:bg-white">
                      <i className="fas fa-shield-alt text-3xl text-primary-green transition-all hover:text-primary-green"></i>
                    </div>
                    <div className="feature-content text-center md:text-left">
                      <h4 className="text-2xl text-text-dark mb-2 transition-colors hover:text-white">
                        Komitmen Keamanan
                      </h4>
                      <p className="text-lg text-text-dark opacity-80 m-0 transition-colors hover:text-white hover:opacity-100">
                        Izin resmi bukan sekadar formalitas, ini bentuk komitmen
                        kami menghadirkan produk yang benar-benar aman,
                        terpercaya, dan efektif
                      </p>
                    </div>
                  </div>

                  <div className="feature-item flex flex-col md:flex-row gap-5 mb-6 p-5 bg-light-green rounded-xl transition-all hover:translate-x-2 hover:bg-primary-green">
                    <div className="feature-icon flex-shrink-0 w-16 h-16 bg-white rounded-xl flex items-center justify-center transition-all hover:bg-white">
                      <i className="fas fa-award text-3xl text-primary-green transition-all hover:text-primary-green"></i>
                    </div>
                    <div className="feature-content text-center md:text-left">
                      <h4 className="text-2xl text-text-dark mb-2 transition-colors hover:text-white">
                        Jaminan Mutu Nasional
                      </h4>
                      <p className="text-lg text-text-dark opacity-80 m-0 transition-colors hover:text-white hover:opacity-100">
                        Tidak perlu ragu akan kualitas bahan, cara kerja, dan
                        keamanan produk. Setiap tetes, kapsul, semprotan
                        memiliki jaminan mutu yang diakui negara
                      </p>
                    </div>
                  </div>
                </div>

                <div className="kementan-cta text-center md:text-left">
                  <a
                    href="/store"
                    className="primary-btn inline-block bg-primary-green text-white py-4 px-9 rounded-full text-xl font-bold no-underline transition-all hover:bg-primary-yellow hover:text-text-dark hover:-translate-y-1 shadow-md"
                  >
                    <i className="fas fa-box-open mr-2"></i> Lihat Produk Resmi
                    Kami
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === FEATURED PRODUCTS === */}
        <section className="featured-products py-16 md:py-20 px-6 md:px-16 bg-light-yellow text-center">
          <div className="container max-w-screen-xl mx-auto">
            <div
              ref={addAnimatedRef}
              className="featured-header animate-from-bottom"
            >
              <h2 className="text-4xl md:text-5xl text-text-dark mb-3">
                Produk Unggulan Kami
              </h2>
              <p className="text-xl md:text-2xl text-text-dark opacity-80 max-w-4xl mx-auto">
                Pilihan terbaik yang paling diminati untuk kesehatan optimal
                anabul Anda.
              </p>
            </div>

            <div className="featured-grid flex flex-wrap justify-center gap-8 md:gap-10 mt-12">
              <div
                ref={addAnimatedRef}
                className="product-item flex-shrink-0 w-full xs:w-[45%] md:w-auto md:max-w-[300px] bg-white p-5 rounded-xl shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl animate-from-bottom"
                style={{ "--animation-delay": "0.2s" }}
              >
                <div className="product-image-container relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src="https://images.tokopedia.net/img/cache/700/aphluv/1997/1/1/a15493ae3e0340aea5a5abd41be6dfb3~.jpeg"
                    alt="O-CING 20 ML"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <span className="badge absolute top-2 right-2 bg-primary-green py-1.5 px-2.5 rounded-md text-white text-sm font-bold uppercase">
                    BEST SELLER
                  </span>
                </div>
                <h3 className="text-3xl text-primary-green mb-3">O-CING</h3>
                <p className="description text-lg text-text-dark opacity-80 mb-4">
                  Holycatlabs Obat Cacing Kucing Ampuh membasmi Cacing O-Cing
                  tetes 20 ML - O-CING 20 ML
                </p>
                <a
                  href="https://www.tokopedia.com/holycatlabs/holycatlabs-obat-cacing-kucing-ampuh-membasmi-cacing-o-cing-tetes-20-ml-1729598064966273799?extParam=src%3Dshop%26whid%3D12952509&aff_unique_id=&channel=others&chain_key="
                  className="shop-btn inline-block bg-primary-yellow text-text-dark py-2.5 px-6 rounded-full font-bold text-lg transition-all hover:bg-primary-green hover:text-white hover:-translate-y-0.5"
                  target="blank"
                >
                  Lihat Produk
                </a>
              </div>

              <div
                ref={addAnimatedRef}
                className="product-item flex-shrink-0 w-full xs:w-[45%] md:w-auto md:max-w-[300px] bg-white p-5 rounded-xl shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl animate-from-bottom"
                style={{ "--animation-delay": "0.4s" }}
              >
                <div className="product-image-container relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src="https://images.tokopedia.net/img/cache/700/aphluv/1997/1/1/2814997c07074db99736ba286dcb0fc1~.jpeg"
                    alt="HolyClear Digestive Ai"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <span className="badge absolute top-2 right-2 bg-primary-yellow py-1.5 px-2.5 rounded-md text-white text-sm font-bold uppercase">
                    PROMO KHUSUS
                  </span>
                </div>
                <h3 className="text-3xl text-primary-green mb-3">HUS HUS</h3>
                <p className="description text-lg text-text-dark opacity-80 mb-4">
                  Holycatlabs Pencegah Tikus & Melatih Kucing HUS HU5 250 ML Cat
                  & Rat Repelent Anti Poop Sembarangan Indoor Outdoor - 250 ML
                </p>
                <a
                  href="https://www.tokopedia.com/holycatlabs/holycatlabs-pencegah-tikus-melatih-kucing-hus-hu5-250-ml-cat-rat-repelent-anti-poop-sembarangan-indoor-outdoor-1729569951398988551?extParam=src%3Dshop%26whid%3D12952509&aff_unique_id=&channel=others&chain_key="
                  className="shop-btn inline-block bg-primary-yellow text-text-dark py-2.5 px-6 rounded-full font-bold text-lg transition-all hover:bg-primary-green hover:text-white hover:-translate-y-0.5"
                  target="blank"
                >
                  Lihat Produk
                </a>
              </div>

              <div
                ref={addAnimatedRef}
                className="product-item flex-shrink-0 w-full xs:w-[45%] md:w-auto md:max-w-[300px] bg-white p-5 rounded-xl shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl animate-from-bottom"
                style={{ "--animation-delay": "0.6s" }}
              >
                <div className="product-image-container relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src="https://images.tokopedia.net/img/cache/700/aphluv/1997/1/1/e1fedf6ea56f4e0eb0b23fd80ccad1c8~.jpeg"
                    alt="O-BI"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <span className="badge absolute top-2 right-2 bg-primary-green py-1.5 px-2.5 rounded-md text-white text-sm font-bold uppercase">
                    BARU
                  </span>
                </div>
                <h3 className="text-3xl text-primary-green mb-3">O-BI</h3>
                <p className="description text-lg text-text-dark opacity-80 mb-4">
                  Holycatlabs O-BI Herbal Penurun LIBIDO & Menghilangkan Stress
                  Kucing isi 20 ml - OBI JANTAN
                </p>
                <a
                  href="https://www.tokopedia.com/holycatlabs/holycatlabs-o-bi-herbal-penurun-libido-menghilangkan-stress-kucing-isi-20-ml-1729636689611687687?extParam=src%3Dshop%26whid%3D12952509&aff_unique_id=&channel=others&chain_key="
                  className="shop-btn inline-block bg-primary-yellow text-text-dark py-2.5 px-6 rounded-full font-bold text-lg transition-all hover:bg-primary-green hover:text-white hover:-translate-y-0.5"
                  target="blank"
                >
                  Lihat Produk
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* === CONSULTATION SECTION === */}
        <section
          id="consultation"
          className="py-16 md:py-20 px-6 md:px-16 bg-white"
        >
          <div className="container max-w-screen-xl mx-auto">
            <div
              ref={addAnimatedRef}
              className="consultation-header text-center mb-16 animate-from-bottom"
            >
              <div className="consultation-badge inline-flex items-center justify-center w-20 h-20 bg-primary-yellow rounded-full mb-5">
                <i className="fas fa-user-md text-4xl text-text-dark"></i>
              </div>
              <h2 className="text-4xl md:text-5xl text-text-dark mb-4">
                Gratis Konsultasi Kesehatan Kucing 24 Jam
              </h2>
              <p className="consultation-subtitle text-xl md:text-2xl text-text-dark opacity-80 max-w-5xl mx-auto">
                Komitmen Holycat adalah menjadi solusi yang tepat untuk
                menjadikan kucing sehat — dan itu kami buktikan dengan kemudahan
                mengakses konsultasi bersama dokter hewan
              </p>
            </div>

            <div className="consultation-content max-w-screen-xl mx-auto">
              <div
                ref={addAnimatedRef}
                className="consultation-intro text-center mb-12 p-8 bg-light-green rounded-xl animate-from-left"
              >
                <p className="text-lg md:text-xl text-text-dark leading-relaxed mb-5">
                  Kami percaya, setiap kucing berhak mendapatkan perhatian yang
                  tepat, dimulai dari pemahaman yang benar atas kondisi mereka.
                  Banyak pemilik kucing yang merasa bingung ketika melihat
                  tanda-tanda seperti bulu rontok, nafsu makan menurun, atau
                  perilaku yang tiba-tiba berubah.
                </p>
                <p className="highlight-text bg-white p-5 rounded-xl border-l-4 border-primary-green mt-5 text-lg md:text-xl text-text-dark">
                  <i className="fas fa-heart text-heart-red mr-2"></i> Di
                  sinilah Holycat hadir — bukan hanya lewat produk, tapi juga
                  lewat{" "}
                  <strong>
                    pendampingan nyata yang bisa kamu akses kapan saja, tanpa
                    biaya
                  </strong>
                  .
                </p>
              </div>

              <div className="consultation-grid flex flex-wrap justify-center gap-8 md:gap-10 mb-16">
                <div
                  ref={addAnimatedRef}
                  className="consultation-card flex-1 min-w-[300px] max-w-md bg-white p-8 rounded-xl shadow-lg text-center transition-all border-b-4 border-primary-green hover:-translate-y-2 hover:shadow-xl hover:bg-light-green animate-from-bottom"
                  style={{ "--animation-delay": "0.1s" }}
                >
                  <div className="card-icon w-20 h-20 bg-light-green rounded-full flex items-center justify-center mx-auto mb-5 transition-all hover:bg-primary-green">
                    <i className="fas fa-clock text-4xl text-primary-green transition-colors hover:text-white"></i>
                  </div>
                  <h3 className="text-3xl text-text-dark mb-4">
                    24/7 Siap Bantu
                  </h3>
                  <p className="text-lg text-text-dark opacity-80 m-0">
                    Tim kami dan dokter hewan berpengalaman siap memberikan
                    saran kapan saja kamu membutuhkannya
                  </p>
                </div>

                <div
                  ref={addAnimatedRef}
                  className="consultation-card flex-1 min-w-[300px] max-w-md bg-white p-8 rounded-xl shadow-lg text-center transition-all border-b-4 border-primary-green hover:-translate-y-2 hover:shadow-xl hover:bg-light-green animate-from-bottom"
                  style={{ "--animation-delay": "0.3s" }}
                >
                  <div className="card-icon w-20 h-20 bg-light-green rounded-full flex items-center justify-center mx-auto mb-5 transition-all hover:bg-primary-green">
                    <i className="fas fa-qrcode text-4xl text-primary-green transition-colors hover:text-white"></i>
                  </div>
                  <h3 className="text-3xl text-text-dark mb-4">Akses Mudah</h3>
                  <p className="text-lg text-text-dark opacity-80 m-0">
                    Scan barcode di kemasan produk Holycat atau di halaman ini
                    untuk langsung terhubung dengan tim kami
                  </p>
                </div>

                <div
                  ref={addAnimatedRef}
                  className="consultation-card flex-1 min-w-[300px] max-w-md bg-white p-8 rounded-xl shadow-lg text-center transition-all border-b-4 border-primary-green hover:-translate-y-2 hover:shadow-xl hover:bg-light-green animate-from-bottom"
                  style={{ "--animation-delay": "0.5s" }}
                >
                  <div className="card-icon w-20 h-20 bg-light-green rounded-full flex items-center justify-center mx-auto mb-5 transition-all hover:bg-primary-green">
                    <i className="fas fa-gift text-4xl text-primary-green transition-colors hover:text-white"></i>
                  </div>
                  <h3 className="text-3xl text-text-dark mb-4">100% Gratis</h3>
                  <p className="text-lg text-text-dark opacity-80 m-0">
                    Tidak ada biaya tersembunyi. Konsultasi sepenuhnya gratis
                    untuk semua pengguna produk Holycat
                  </p>
                </div>
              </div>

              <div
                ref={addAnimatedRef}
                className="qr-section flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 bg-light-yellow rounded-xl flex-wrap animate-from-right"
              >
                <div className="qr-container flex-shrink-0 w-full md:w-auto text-center">
                  <div className="qr-placeholder w-[250px] h-[250px] bg-white rounded-xl flex flex-col items-center justify-center border-4 border-dashed border-primary-green mx-auto">
                    <i className="fas fa-qrcode text-8xl text-primary-green mb-4"></i>
                    <p className="text-lg text-text-dark font-bold m-0">
                      Scan QR Code untuk Konsultasi
                    </p>
                  </div>
                </div>
                <div className="qr-text flex-1 min-w-[400px] text-center md:text-left">
                  <h3 className="text-3xl text-text-dark mb-5">
                    Cara Konsultasi:
                  </h3>
                  <ol className="text-xl text-text-dark leading-relaxed mb-8 list-decimal pl-8 text-left">
                    <li>Scan QR Code di samping atau di kemasan produk</li>
                    <li>Terhubung langsung dengan tim Holycat via WhatsApp</li>
                    <li>Ceritakan kondisi kucing kamu</li>
                    <li>Dapatkan saran dan solusi dari ahlinya</li>
                  </ol>
                  <a
                    href="https://wa.me/6285171002858"
                    target="blank"
                    className="consult-btn inline-block bg-whatsapp text-white py-4 px-10 rounded-full text-xl font-bold no-underline transition-all hover:bg-whatsapp-hover hover:-translate-y-0.5 shadow-md"
                  >
                    <i className="fab fa-whatsapp mr-2"></i> Konsultasi Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === CLIENT TESTIMONIALS === */}
        <section
          id="testimonials"
          className="scroll-mt-[75px] py-16 md:py-20 px-6 md:px-16 bg-light-green text-center"
        >
          <div className="container max-w-screen-xl mx-auto">
            <div
              ref={addAnimatedRef}
              className="testimonial-header animate-from-bottom"
            >
              <h2 className="text-4xl md:text-5xl text-text-dark mb-3">
                Kata Mereka Tentang Holycat Labs
              </h2>
              <p className="text-xl md:text-2xl text-text-dark opacity-80 max-w-4xl mx-auto">
                Ratusan pemilik kucing telah mempercayakan kesehatan anabulnya
                kepada kami. Dengarkan kisah sukses mereka!
              </p>
            </div>

            <div className="testimonials-grid flex flex-wrap justify-center gap-8 md:gap-10 mt-12">
              <div
                ref={addAnimatedRef}
                className="testimonial-card flex-1 min-w-[300px] max-w-md bg-white p-8 pt-12 rounded-xl shadow-lg relative text-left transition-all hover:-translate-y-1 hover:shadow-xl border-t-4 border-primary-yellow animate-from-bottom"
                style={{ "--animation-delay": "0.1s" }}
              >
                <span className="quote font-['Arial'] text-8xl text-primary-green absolute top-[-10px] left-4 opacity-20 leading-none">
                  "
                </span>
                <blockquote>
                  <p className="text-lg text-text-dark leading-relaxed mb-5">
                    Produk Holycat benar-benar mengubah kondisi kucing saya yang
                    dulunya sering sakit. Sekarang ia aktif dan nafsu makannya
                    meningkat drastis. Sangat merekomendasikan!
                  </p>
                </blockquote>
                <div className="author flex items-center gap-4 mt-4 pt-4 border-t border-light-green">
                  <img
                    src={avatarDuduk}
                    alt="Avatar Pelanggan 1"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-text-dark m-0">
                      Rina Aulia
                    </h4>
                    <p className="text-base text-text-dark opacity-60 m-0">
                      Pemilik Kucing (Jakarta)
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={addAnimatedRef}
                className="testimonial-card flex-1 min-w-[300px] max-w-md bg-white p-8 pt-12 rounded-xl shadow-lg relative text-left transition-all hover:-translate-y-1 hover:shadow-xl border-t-4 border-primary-yellow animate-from-bottom"
                style={{ "--animation-delay": "0.3s" }}
              >
                <span className="quote font-['Arial'] text-8xl text-primary-green absolute top-[-10px] left-4 opacity-20 leading-none">
                  "
                </span>
                <blockquote>
                  <p className="text-lg text-text-dark leading-relaxed mb-5">
                    Holycat adalah penyelamat! Kucing saya sering diare, tapi
                    setelah rutin menggunakan obat ini, pencernaannya jadi
                    stabil. Pelayanan konsultasi dokter hewan juga sangat
                    membantu.
                  </p>
                </blockquote>
                <div className="author flex items-center gap-4 mt-4 pt-4 border-t border-light-green">
                  <img
                    src={avatarKetawa}
                    alt="Avatar Pelanggan 2"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-text-dark m-0">
                      Bambang Wijaya
                    </h4>
                    <p className="text-base text-text-dark opacity-60 m-0">
                      Pecinta Anabul (Surabaya)
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={addAnimatedRef}
                className="testimonial-card flex-1 min-w-[300px] max-w-md bg-white p-8 pt-12 rounded-xl shadow-lg relative text-left transition-all hover:-translate-y-1 hover:shadow-xl border-t-4 border-primary-yellow animate-from-bottom"
                style={{ "--animation-delay": "0.5s" }}
              >
                <span className="quote font-['Arial'] text-8xl text-primary-green absolute top-[-10px] left-4 opacity-20 leading-none">
                  "
                </span>
                <blockquote>
                  <p className="text-lg text-text-dark leading-relaxed mb-5">
                    Sangat senang dengan produk perawatan bulunya! Bulu kucing
                    saya jadi lebih halus dan kerontokannya berkurang banyak.
                    Holycat Labs memang pilihan terbaik untuk kebutuhan kucing.
                  </p>
                </blockquote>
                <div className="author flex items-center gap-4 mt-4 pt-4 border-t border-light-green">
                  <img
                    src={avatarLove}
                    alt="Avatar Pelanggan 3"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-text-dark m-0">
                      Clara Devi
                    </h4>
                    <p className="text-base text-text-dark opacity-60 m-0">
                      Cat Mom (Bandung)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === GUARANTEE SECTION === */}
        <section
          id="guarantee"
          className="scroll-mt-[75px] py-16 md:py-20 px-6 md:px-16 bg-white"
        >
          <div className="container max-w-screen-xl mx-auto">
            <div
              ref={addAnimatedRef}
              className="guarantee-header text-center mb-16 animate-from-bottom"
            >
              <div className="guarantee-badge inline-flex items-center justify-center w-20 h-20 bg-primary-green rounded-full mb-5">
                <i className="fas fa-shield-alt text-4xl text-white"></i>
              </div>
              <h2 className="text-4xl md:text-5xl text-text-dark mb-3">
                Garansi Refund 100%
              </h2>
              <p className="guarantee-subtitle text-xl md:text-2xl text-text-dark opacity-80 italic">
                Kepercayaan harus dibuktikan, bukan sekadar janji
              </p>
            </div>

            <div className="guarantee-content max-w-screen-xl mx-auto">
              <div
                ref={addAnimatedRef}
                className="guarantee-intro text-center mb-12 p-8 bg-light-green rounded-xl animate-from-left"
              >
                <p className="text-xl md:text-2xl text-text-dark leading-relaxed m-0">
                  Holycat berkomitmen menjadi solusi kesehatan kucing yang dapat
                  dipercaya. Kami memahami bahwa setiap kucing memiliki kondisi
                  unik, dan tidak semua responnya sama. Namun satu hal yang
                  pasti,{" "}
                  <strong>
                    kami ingin kamu merasa aman dalam setiap pembelian
                  </strong>
                  .
                </p>
              </div>

              <div className="guarantee-conditions" id="garansiKondisi">
                <h3
                  ref={addAnimatedRef}
                  className="text-3xl md:text-4xl text-primary-green text-center mb-10 animate-from-bottom"
                >
                  Kami Memberikan Garansi Uang Kembali untuk:
                </h3>
                <div className="conditions-grid flex flex-wrap justify-center gap-8 md:gap-10 mb-16">
                  <div
                    ref={addAnimatedRef}
                    className="condition-card flex-1 min-w-[280px] max-w-md bg-white p-8 rounded-xl shadow-lg text-center transition-all border-t-4 border-primary-yellow hover:-translate-y-2 hover:shadow-xl hover:bg-light-yellow animate-from-bottom"
                    style={{ "--animation-delay": "0.1s" }}
                  >
                    <div className="condition-icon w-[70px] h-[70px] bg-light-green rounded-full flex items-center justify-center mx-auto mb-5 transition-all hover:bg-primary-green">
                      <i className="fas fa-box-open text-3xl text-primary-green transition-colors hover:text-white"></i>
                    </div>
                    <h4 className="text-2xl md:text-3xl text-text-dark mb-3">
                      Produk Rusak
                    </h4>
                    <p className="text-lg text-text-dark opacity-80 m-0">
                      Produk yang diterima rusak saat pengiriman
                    </p>
                  </div>

                  <div
                    ref={addAnimatedRef}
                    className="condition-card flex-1 min-w-[280px] max-w-md bg-white p-8 rounded-xl shadow-lg text-center transition-all border-t-4 border-primary-yellow hover:-translate-y-2 hover:shadow-xl hover:bg-light-yellow animate-from-bottom"
                    style={{ "--animation-delay": "0.3s" }}
                  >
                    <div className="condition-icon w-[70px] h-[70px] bg-light-green rounded-full flex items-center justify-center mx-auto mb-5 transition-all hover:bg-primary-green">
                      <i className="fas fa-exchange-alt text-3xl text-primary-green transition-colors hover:text-white"></i>
                    </div>
                    <h4 className="text-2xl md:text-3xl text-text-dark mb-3">
                      Produk Tidak Sesuai
                    </h4>
                    <p className="text-lg text-text-dark opacity-80 m-0">
                      Produk yang dikirim tidak sesuai pesanan
                    </p>
                  </div>

                  <div
                    ref={addAnimatedRef}
                    className="condition-card flex-1 min-w-[280px] max-w-md bg-white p-8 rounded-xl shadow-lg text-center transition-all border-t-4 border-primary-yellow hover:-translate-y-2 hover:shadow-xl hover:bg-light-yellow animate-from-bottom"
                    style={{ "--animation-delay": "0.5s" }}
                  >
                    <div className="condition-icon w-[70px] h-[70px] bg-light-green rounded-full flex items-center justify-center mx-auto mb-5 transition-all hover:bg-primary-green">
                      <i className="fas fa-exclamation-triangle text-3xl text-primary-green transition-colors hover:text-white"></i>
                    </div>
                    <h4 className="text-2xl md:text-3xl text-text-dark mb-3">
                      Produk Tidak Lengkap
                    </h4>
                    <p className="text-lg text-text-dark opacity-80 m-0">
                      Produk diterima dalam kondisi tidak lengkap
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={addAnimatedRef}
                className="guarantee-process bg-primary-green text-white p-10 md:p-12 rounded-xl mb-12 animate-from-right"
              >
                <h3 className="text-4xl md:text-5xl text-primary-yellow text-center mb-10">
                  Proses Mudah & Cepat
                </h3>
                <div className="process-steps flex flex-col md:flex-row flex-wrap justify-between gap-8">
                  <div className="step flex flex-col md:flex-row flex-1 min-w-[220px] gap-5 items-center md:items-start text-center md:text-left">
                    <div className="step-number flex-shrink-0 w-[50px] h-[50px] bg-primary-yellow text-text-dark rounded-full flex items-center justify-center text-2xl font-bold font-heading">
                      1
                    </div>
                    <div className="step-content">
                      <h4 className="text-2xl md:text-3xl text-primary-yellow mb-2">
                        Dokumentasi
                      </h4>
                      <p className="text-lg text-white leading-relaxed m-0">
                        Siapkan bukti pembelian dan foto kondisi produk yang
                        bermasalah
                      </p>
                    </div>
                  </div>

                  <div className="step flex flex-col md:flex-row flex-1 min-w-[220px] gap-5 items-center md:items-start text-center md:text-left">
                    <div className="step-number flex-shrink-0 w-[50px] h-[50px] bg-primary-yellow text-text-dark rounded-full flex items-center justify-center text-2xl font-bold font-heading">
                      2
                    </div>
                    <div className="step-content">
                      <h4 className="text-2xl md:text-3xl text-primary-yellow mb-2">
                        Kirim Laporan
                      </h4>
                      <p className="text-lg text-white leading-relaxed m-0">
                        Kirimkan melalui chat resmi Holycat atau formulir
                        pengembalian di website
                      </p>
                    </div>
                  </div>

                  <div className="step flex flex-col md:flex-row flex-1 min-w-[220px] gap-5 items-center md:items-start text-center md:text-left">
                    <div className="step-number flex-shrink-0 w-[50px] h-[50px] bg-primary-yellow text-text-dark rounded-full flex items-center justify-center text-2xl font-bold font-heading">
                      3
                    </div>
                    <div className="step-content">
                      <h4 className="text-2xl md:text-3xl text-primary-yellow mb-2">
                        Verifikasi
                      </h4>
                      <p className="text-lg text-white leading-relaxed m-0">
                        Tim kami akan melakukan verifikasi secara cepat dan
                        transparan
                      </p>
                    </div>
                  </div>

                  <div className="step flex flex-col md:flex-row flex-1 min-w-[220px] gap-5 items-center md:items-start text-center md:text-left">
                    <div className="step-number flex-shrink-0 w-[50px] h-[50px] bg-primary-yellow text-text-dark rounded-full flex items-center justify-center text-2xl font-bold font-heading">
                      4
                    </div>
                    <div className="step-content">
                      <h4 className="text-2xl md:text-3xl text-primary-yellow mb-2">
                        Selesai
                      </h4>
                      <p className="text-lg text-white leading-relaxed m-0">
                        Dapatkan penggantian atau pengembalian dana
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                ref={addAnimatedRef}
                className="guarantee-cta text-center bg-light-yellow p-10 rounded-xl animate-from-bottom"
              >
                <p className="cta-text text-xl md:text-2xl text-text-dark mb-6 leading-relaxed">
                  <i className="fas fa-heart text-heart-red text-2xl mr-2"></i>{" "}
                  Dengan kebijakan ini, kami ingin memastikan setiap pembelian
                  di Holycat selalu berujung pada satu hal:
                  <strong>Kepuasanmu, dan kesehatan kucing kesayanganmu</strong>
                </p>
                <a
                  href="https://wa.me/6285171002858"
                  target="blank"
                  className="guarantee-btn inline-block bg-whatsapp text-white py-4 px-10 rounded-full text-xl font-bold no-underline transition-all hover:bg-whatsapp-hover hover:-translate-y-0.5 shadow-md"
                >
                  <i className="fab fa-whatsapp mr-2"></i> Hubungi Kami Sekarang
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* === VISION MISSION SECTION === */}
        <section className="vision-mission py-16 md:py-20 px-6 md:px-16 bg-light-yellow">
          <div className="container max-w-screen-xl mx-auto">
            <div className="content flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-screen-xl mx-auto text-center md:text-left">
              <div
                ref={addAnimatedRef}
                className="image flex-1 text-center order-2 md:order-1 animate-from-left"
              >
                <img
                  src={visiMisiImage}
                  alt="Holycat Labs Illustration"
                  className="max-w-full rounded-xl transform scale-x-[-1] h-[250px] md:h-[400px]"
                />
              </div>
              <div
                ref={addAnimatedRef}
                className="text flex-1 order-1 md:order-2 animate-from-right"
              >
                <h2 className="text-3xl md:text-4xl text-primary-green mb-4">
                  Visi Kami
                </h2>
                <p className="text-xl md:text-2xl text-text-dark leading-relaxed mb-6">
                  Menjadi advokat terdepan untuk kesehatan dan kebahagiaan
                  kucing, merintis solusi inovatif, dan membina ikatan yang
                  lebih dalam antara kucing dan pemiliknya.
                </p>

                <h2 className="text-3xl md:text-4xl text-primary-green mb-4">
                  Misi Kami
                </h2>
                <p
                  id="misiParagraf"
                  className="text-xl md:text-2xl text-text-dark leading-relaxed mb-6"
                >
                  <span id="misiSingkat">
                    Di Holycat Labs, misi kami adalah menyediakan produk obat
                    berkualitas premium dan inovatif yang disesuaikan dengan
                    kebutuhan unik teman berbulu kesayangan Anda.
                  </span>
                  <span
                    id="misiLanjutan"
                    style={{ display: showFullMisi ? "inline" : "none" }}
                  >
                    &nbsp;Kami berupaya meningkatkan kesejahteraan kucing dengan
                    menawarkan solusi yang aman, efektif, dan terpercaya yang
                    mengutamakan kesehatan dan kebahagiaan mereka. Melalui
                    penelitian, pengembangan, dan edukasi berkelanjutan, kami
                    bertujuan memberdayakan pemilik hewan untuk membuat
                    keputusan yang tepat dan memberikan perawatan terbaik bagi
                    kucing mereka, memastikan mereka menjalani hidup yang penuh
                    vitalitas dan kebahagiaan.
                  </span>
                </p>
                <button
                  id="tombolMisi"
                  onClick={toggleMisi}
                  className="read-more-btn bg-transparent text-primary-green border-none cursor-pointer text-2xl font-bold underline font-body transition-all hover:text-primary-yellow"
                >
                  {showFullMisi ? "Sembunyikan" : "Baca Selengkapnya"}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* WHATSAPP FLOAT BUTTON - Tetap menggunakan kelas css: whatsapp-float */}
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
