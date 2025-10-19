import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/logo.png"; // Pastikan path ini benar

const Footer = () => {
  return (
    <footer
      id="contact"
      className="main-footer bg-primary-green text-white py-10 md:py-16 px-6 md:px-16 text-lg"
    >
      <div className="container max-w-screen-xl mx-auto">
        <div className="footer-grid flex flex-wrap justify-between gap-10 md:gap-8 lg:gap-10 mb-10 md:mb-12">
          <div className="footer-about flex-1 min-w-[300px] text-center md:text-left">
            <img
              src={logo}
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
                <a
                  href="/#about"
                  className="text-white no-underline text-lg transition-colors hover:text-primary-yellow"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#products"
                  className="text-white no-underline text-lg transition-colors hover:text-primary-yellow"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="/#testimonials"
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
                <a
                  href="/#garansiKondisi"
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
              Jl. AH. Nasution No.KM.10, Pakemitan, Kec. Cinambo, Kota Bandung,
              Jawa Barat 40294
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
  );
};

export default Footer;
