import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ContactPage = () => {
  const navigate = useNavigate();

  // Handler untuk navigasi ke section di Home Page
  const handleInternalNavigation = (hash) => (e) => {
    e.preventDefault(); // Mencegah perilaku <a> default

    // Memaksa navigasi dokumen penuh ke path root dengan hash yang dituju.
    // Ini mengembalikan perilaku scroll-to-hash setelah reload, sesuai keinginan.
    window.location.href = "/" + hash;
  };

  // Fungsi untuk Intersection Observer (dipertahankan untuk animasi on-scroll)
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

    const animatedElements = document.querySelectorAll(
      ".animate-from-left, .animate-from-right, .animate-from-bottom"
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <section
        id="store"
        className="e-commerce-social py-16 md:py-20 px-6 md:px-16 bg-white text-center min-h-[80vh] flex flex-col justify-center scroll-mt-[75px]"
      >
        <div className="container max-w-screen-xl mx-auto">
          <div className="store-social-header mb-12">
            <div className="header-badge inline-flex items-center justify-center w-20 h-20 bg-primary-green rounded-full mb-5">
              <i className="fas fa-shopping-bag text-4xl text-white"></i>
            </div>
            <h2 className="text-4xl md:text-5xl text-text-dark mb-3">
              Dapatkan Produk Holycat Labs Sekarang!
            </h2>
            <p className="text-xl md:text-2xl text-text-dark opacity-80 max-w-3xl mx-auto">
              Beli produk kesehatan kucing resmi kami di marketplace kesayangan
              Anda atau ikuti kami di media sosial.
            </p>
          </div>

          <div className="store-grid-container mb-16">
            <h3 className="text-3xl md:text-4xl text-primary-green mb-8">
              Marketplace Resmi Kami
            </h3>
            <div className="store-grid flex flex-wrap justify-center gap-8">
              {/* Card 1: Tokopedia */}
              <div
                className="platform-card flex-1 min-w-[250px] max-w-xs bg-white p-8 rounded-xl shadow-lg text-center transition-all hover:-translate-y-2 hover:shadow-xl border-b-4 border-primary-yellow hover:bg-light-green animate-from-bottom"
                style={{ "--animation-delay": "0.1s" }}
              >
                <i className="fas fa-store w-[70px] h-[70px] leading-[70px] rounded-full block mx-auto mb-5 text-3xl text-white bg-primary-green"></i>
                <h4 className="text-2xl md:text-3xl text-text-dark mb-2">
                  Tokopedia
                </h4>
                <p className="text-lg text-text-dark opacity-80 mb-5">
                  Toko Official Holycatlabs di Tokopedia
                </p>
                <a
                  href="https://www.tokopedia.com/holycatlabs"
                  target="_blank"
                  className="store-btn inline-block text-white py-2.5 px-6 rounded-full text-lg font-bold transition-all bg-primary-green hover:-translate-y-0.5 hover:shadow-md"
                >
                  Kunjungi Toko
                </a>
              </div>
              {/* Card 2: Shopee */}
              <div
                className="platform-card flex-1 min-w-[250px] max-w-xs bg-white p-8 rounded-xl shadow-lg text-center transition-all hover:-translate-y-2 hover:shadow-xl border-b-4 border-primary-yellow hover:bg-light-green animate-from-bottom"
                style={{ "--animation-delay": "0.3s" }}
              >
                <i className="fas fa-store w-[70px] h-[70px] leading-[70px] rounded-full block mx-auto mb-5 text-3xl text-white bg-primary-yellow"></i>
                <h4 className="text-2xl md:text-3xl text-text-dark mb-2">
                  Shopee
                </h4>
                <p className="text-lg text-text-dark opacity-80 mb-5">
                  Dapatkan diskon eksklusif di Shopee
                </p>
                <a
                  href="https://shopee.co.id/holycatlabs.id"
                  target="_blank"
                  className="store-btn inline-block text-white py-2.5 px-6 rounded-full text-lg font-bold transition-all bg-primary-yellow hover:-translate-y-0.5 hover:shadow-md"
                >
                  Kunjungi Toko
                </a>
              </div>
              {/* Card 3: Lazada */}
              <div
                className="platform-card flex-1 min-w-[250px] max-w-xs bg-white p-8 rounded-xl shadow-lg text-center transition-all hover:-translate-y-2 hover:shadow-xl border-b-4 border-primary-yellow hover:bg-light-green animate-from-bottom"
                style={{ "--animation-delay": "0.5s" }}
              >
                <i className="fas fa-store w-[70px] h-[70px] leading-[70px] rounded-full block mx-auto mb-5 text-3xl text-white bg-primary-green"></i>
                <h4 className="text-2xl md:text-3xl text-text-dark mb-2">
                  Lazada
                </h4>
                <p className="text-lg text-text-dark opacity-80 mb-5">
                  Temukan produk kami di Lazada
                </p>
                <a
                  href="https://www.lazada.co.id/shop/holycatlabs-id"
                  target="_blank"
                  className="store-btn inline-block text-white py-2.5 px-6 rounded-full text-lg font-bold transition-all bg-primary-green hover:-translate-y-0.5 hover:shadow-md"
                >
                  Kunjungi Toko
                </a>
              </div>
              {/* Card 4: TikTok Shop */}
              <div
                className="platform-card flex-1 min-w-[250px] max-w-xs bg-white p-8 rounded-xl shadow-lg text-center transition-all hover:-translate-y-2 hover:shadow-xl border-b-4 border-primary-yellow hover:bg-light-green animate-from-bottom"
                style={{ "--animation-delay": "0.7s" }}
              >
                <i className="fab fa-tiktok w-[70px] h-[70px] leading-[70px] rounded-full block mx-auto mb-5 text-3xl text-white bg-primary-yellow"></i>
                <h4 className="text-2xl md:text-3xl text-text-dark mb-2">
                  TikTok Shop
                </h4>
                <p className="text-lg text-text-dark opacity-80 mb-5">
                  Promo flash sale &amp; live shopping
                </p>
                <a
                  href="#"
                  target="_blank"
                  className="store-btn inline-block text-white py-2.5 px-6 rounded-full text-lg font-bold transition-all bg-primary-yellow hover:-translate-y-0.5 hover:shadow-md"
                >
                  Kunjungi Toko
                </a>
              </div>
            </div>
          </div>

          <div className="social-grid-container">
            <h3 className="text-3xl md:text-4xl text-primary-green mb-8">
              Ikuti Kami di Media Sosial
            </h3>
            <div className="social-grid flex flex-wrap justify-center gap-8 md:gap-4 lg:gap-8">
              {/* Social Card 1: Instagram */}
              <a
                href="https://www.instagram.com/holycat_official/"
                target="_blank"
                className="social-card flex-shrink-0 w-36 md:w-36 lg:w-48 bg-white p-6 rounded-xl shadow-md text-center no-underline transition-all hover:-translate-y-1 hover:shadow-xl border-2 border-transparent hover:border-primary-green animate-from-bottom"
                style={{ "--animation-delay": "0.1s" }}
              >
                <i className="fab fa-instagram text-4xl mb-2 text-instagram-pink transition-all hover:scale-110"></i>
                <p className="text-xl font-bold text-text-dark m-0">
                  Instagram
                </p>
              </a>
              {/* Social Card 2: Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100090287932346"
                target="_blank"
                className="social-card flex-shrink-0 w-36 md:w-36 lg:w-48 bg-white p-6 rounded-xl shadow-md text-center no-underline transition-all hover:-translate-y-1 hover:shadow-xl border-2 border-transparent hover:border-primary-green animate-from-bottom"
                style={{ "--animation-delay": "0.3s" }}
              >
                <i className="fab fa-facebook-f text-4xl mb-2 text-facebook-blue transition-all hover:scale-110"></i>
                <p className="text-xl font-bold text-text-dark m-0">Facebook</p>
              </a>
              {/* Social Card 3: TikTok */}
              <a
                href="https://www.tiktok.com/@holycatofficial"
                target="_blank"
                className="social-card flex-shrink-0 w-36 md:w-36 lg:w-48 bg-white p-6 rounded-xl shadow-md text-center no-underline transition-all hover:-translate-y-1 hover:shadow-xl border-2 border-transparent hover:border-primary-green animate-from-bottom"
                style={{ "--animation-delay": "0.5s" }}
              >
                <i className="fab fa-tiktok text-4xl mb-2 text-black transition-all hover:scale-110"></i>
                <p className="text-xl font-bold text-text-dark m-0">TikTok</p>
              </a>
              {/* Social Card 4: WhatsApp */}
              <a
                href="https://wa.me/6285171002858"
                target="_blank"
                className="social-card flex-shrink-0 w-36 md:w-36 lg:w-48 bg-white p-6 rounded-xl shadow-md text-center no-underline transition-all hover:-translate-y-1 hover:shadow-xl border-2 border-transparent hover:border-primary-green animate-from-bottom"
                style={{ "--animation-delay": "0.7s" }}
              >
                <i className="fab fa-whatsapp text-4xl mb-2 text-whatsapp transition-all hover:scale-110"></i>
                <p className="text-xl font-bold text-text-dark m-0">
                  WhatsApp Chat
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Inlined - Diadaptasi dari src/components/Footer.jsx */}
      <footer
        id="contact"
        className="main-footer bg-primary-green text-white py-10 md:py-16 px-6 md:px-16 text-lg"
      >
        <div className="container max-w-screen-xl mx-auto">
          <div className="footer-grid flex flex-wrap justify-between gap-10 md:gap-8 lg:gap-10 mb-10 md:mb-12">
            <div className="footer-about flex-1 min-w-[300px] text-center md:text-left">
              <img
                src="../../public/images/logo.png"
                alt="Holycatlabs Logo Footer"
                className="footer-logo w-48 h-auto object-contain brightness-0 invert mx-auto md:mx-0 mb-4"
              />
              <p className="text-lg leading-relaxed mb-5">
                Dedikasi kami untuk menyediakan beragam solusi kesehatan
                terlengkap bagi kucing kesayangan Anda.
              </p>
              <div className="social-links flex gap-4 mt-5 justify-center md:justify-start">
                <a
                  href="https://www.instagram.com/holycat_official/ "
                  aria-label="Instagram"
                  className="text-white text-3xl opacity-80 transition-all hover:opacity-100 hover:text-primary-yellow hover:-translate-y-0.5"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100090287932346"
                  aria-label="Facebook"
                  className="text-white text-3xl opacity-80 transition-all hover:opacity-100 hover:text-primary-yellow hover:-translate-y-0.5"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@holycatofficial"
                  aria-label="Tiktok"
                  className="text-white text-3xl opacity-80 transition-all hover:opacity-100 hover:text-primary-yellow hover:-translate-y-0.5"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>

            <div className="footer-links flex-grow flex-shrink-0 basis-auto md:basis-[200px]">
              <h4 className="text-2xl md:text-3xl font-bold text-primary-yellow mb-6">
                Navigasi Cepat
              </h4>
              <ul className="list-none p-0 m-0">
                <li>
                  <a
                    href="/"
                    className="text-white no-underline text-lg transition-colors hover:text-primary-yellow"
                  >
                    Home
                  </a>
                </li>
                <li>
                  {/* Gunakan Handler Navigasi */}
                  <a
                    href="/#about"
                    onClick={handleInternalNavigation("#about")}
                    className="text-white no-underline text-lg transition-colors hover:text-primary-yellow"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  {/* Gunakan Handler Navigasi */}
                  <a
                    href="/#products"
                    onClick={handleInternalNavigation("#products")}
                    className="text-white no-underline text-lg transition-colors hover:text-primary-yellow"
                  >
                    Our Products
                  </a>
                </li>
                <li>
                  {/* Gunakan Handler Navigasi */}
                  <a
                    href="/#testimonials"
                    onClick={handleInternalNavigation("#testimonials")}
                    className="text-white no-underline text-lg transition-colors hover:text-primary-yellow"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links flex-grow flex-shrink-0 basis-auto md:basis-[200px]">
              <h4 className="text-2xl md:text-3xl font-bold text-primary-yellow mb-6">
                Bantuan
              </h4>
              <ul className="list-none p-0 m-0">
                <li>
                  <a
                    href="/store"
                    className="text-white no-underline text-lg transition-colors hover:text-primary-yellow"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white no-underline text-lg transition-colors hover:text-primary-yellow"
                  >
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white no-underline text-lg transition-colors hover:text-primary-yellow"
                  >
                    Syarat & Ketentuan
                  </a>
                </li>
                <li>
                  {/* Gunakan Handler Navigasi */}
                  <a
                    href="/#garansiKondisi"
                    onClick={handleInternalNavigation("#garansiKondisi")}
                    className="text-white no-underline text-lg transition-colors hover:text-primary-yellow"
                  >
                    Pengembalian Produk
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-contact flex-grow flex-shrink-0 basis-auto md:basis-[200px]">
              <h4 className="text-2xl md:text-3xl font-bold text-primary-yellow mb-6">
                Hubungi Kami
              </h4>
              <p className="text-lg m-2">
                <i className="icon-phone mr-2 text-primary-yellow fas fa-phone"></i>{" "}
                +6285171002858
                <br />
                <i className="icon-email mr-2 text-primary-yellow fas fa-envelope"></i>{" "}
                hello@holycatlabs.com
              </p>
              <p className="text-lg m-2">
                <i className="icon-location mr-2 text-primary-yellow fas fa-map-marker-alt"></i>{" "}
                Jl. AH. Nasution No.KM.10, Pakemitan, Kec. Cinambo, Kota
                Bandung, Jawa Barat 40294
              </p>
            </div>
          </div>

          <div className="footer-bottom border-t border-white border-opacity-20 pt-5 text-center">
            <p className="text-base m-0">
              &copy; 2025 Holycat Labs. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
      {/* WHATSAPP FLOAT BUTTON (Tautan eksternal, tetap <a>) */}
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

export default ContactPage;
