import React from 'react';
import Main_logo from '../assets/images/Main_logo.png';
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";


// Main responsive footer component built with Tailwind CSS.
// It features a multi-column layout that adapts to different screen sizes.
// The layout transitions from a vertical stack on small screens to a horizontal grid on larger screens.
const App = () => {
  return (
    <footer className="bg-[#003E3D] text-orange-50 p-6 md:p-12 lg:p-16 mt-[50px]">
      {/* Container to hold the footer content, with responsive padding and alignment */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Column 1: Company Logo and Description */}
          <div className="flex flex-col items-start gap-4">
            {/* Logo and Company Name */}
            <div className="flex items-center">
              {/* Inline SVG for the logo for cleaner code and better performance */}
              <img className='w-[150px]' src={Main_logo} alt="" />
            </div>
            {/* Company Description in Uzbek */}
            <div style={{ display: "flex", gap: "20px", fontSize: "32px" }}>
              <a href="https://www.instagram.com/redors__" target="_blank" rel="noopener noreferrer">
                <FaInstagram color="#DEB67B" />
              </a>
              <a href="https://t.me/farruxtemireshiklari" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane color="#DEB67B" />
              </a>
              <a href="https://youtube.com/@farruxtemireshik?si=C_BvXML8l3kc98f0" target="_blank" rel="noopener noreferrer">
                <FaYoutube color="#DEB67B" />
              </a>
              <a href="mailto: farruxtemireshik.gmail.com" target='_blank'>
                <MdEmail className="text-[#DEB67B]" />
              </a>
              <a href="https://www.tiktok.com/@redors?_t=ZS-8zPwlspZ1zp&_r=1" target='_blank'>
                <FaTiktok className="text-[#DEB67B]" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-[#DEB67B] text-lg font-bold">Navigatsiya</h3>
            <nav className="flex flex-col gap-2 text-neutral-300">
              <a href="/" className="hover:text-[#DEB67B] transition-colors">Asosiy</a>
              <a href="Catalog" className="hover:text-[#DEB67B] transition-colors">Mahsulotlar katalogi</a>
              <a href="About" className="hover:text-[#DEB67B] transition-colors">Kompaniya haqida</a>
              <a href="Contact" className="hover:text-[#DEB67B] transition-colors">Bog'lanish</a>
            </nav>
          </div>

          {/* Column 3: Contact Information */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-[#DEB67B] text-lg font-bold">A'loqa</h3>
            <div className="flex flex-col gap-3 text-neutral-300">
              <div className="flex items-center gap-3">
                {/* Phone icon from SVG */}
                <svg
                  className="w-4 h-4 text-[#DEB67B]"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.6667 11.7802V13.7802C14.6674 13.9659 14.6294 14.1497 14.555 14.3198C14.4806 14.4899 14.3715 14.6426 14.2347 14.7681C14.0979 14.8937 13.9364 14.9892 13.7605 15.0487C13.5846 15.1082 13.3982 15.1303 13.2133 15.1136C11.1619 14.8907 9.19133 14.1897 7.46 13.0669C5.84922 12.0433 4.48356 10.6777 3.46 9.06689C2.33332 7.3277 1.63216 5.34756 1.41333 3.28689C1.39667 3.10254 1.41858 2.91673 1.47767 2.74131C1.53675 2.56589 1.63171 2.40469 1.75651 2.26797C1.88131 2.13126 2.0332 2.02203 2.20253 1.94724C2.37185 1.87245 2.55489 1.83374 2.74 1.83356H4.74C5.06354 1.83038 5.37719 1.94495 5.62251 2.15592C5.86782 2.36689 6.02805 2.65986 6.07333 2.98023C6.15775 3.62027 6.3143 4.24871 6.54 4.85356C6.62969 5.09218 6.64911 5.3515 6.59594 5.60081C6.54277 5.85012 6.41924 6.07897 6.24 6.26023L5.39333 7.10689C6.34237 8.77592 7.7243 10.1579 9.39333 11.1069L10.24 10.2602C10.4213 10.081 10.6501 9.95746 10.8994 9.90429C11.1487 9.85112 11.408 9.87053 11.6467 9.96023C12.2515 10.1859 12.88 10.3425 13.52 10.4269C13.8438 10.4726 14.1396 10.6357 14.351 10.8852C14.5624 11.1348 14.6748 11.4533 14.6667 11.7802Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span><a href="tel:+998997708191" className="hover:text-[#DEB67B] transition-colors">+998 (99) - 770 - 81 - 91</a></span>
              </div>
              <div className="flex items-center gap-3">
                {/* Email icon from SVG */}
                <svg
                  className="w-4 h-4 text-[#DEB67B]"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.3333 3.1665H2.66667C1.93029 3.1665 1.33334 3.76346 1.33334 4.49984V12.4998C1.33334 13.2362 1.93029 13.8332 2.66667 13.8332H13.3333C14.0697 13.8332 14.6667 13.2362 14.6667 12.4998V4.49984C14.6667 3.76346 14.0697 3.1665 13.3333 3.1665Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.6667 5.1665L8.68667 8.9665C8.48085 9.09545 8.24288 9.16384 8 9.16384C7.75712 9.16384 7.51916 9.09545 7.31334 8.9665L1.33334 5.1665" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span><a href="mailto:farruxtemireshik@gmail.com" target='_blank' className="hover:text-[#DEB67B] transition-colors">info@redore.uz</a></span>
              </div>
              <div className="flex items-center gap-3">
                {/* Location icon from SVG */}
                <svg
                  className="w-8 h-8 text-[#DEB67B]"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.3333 7.16683C13.3333 10.4955 9.64066 13.9622 8.40066 15.0328C8.28515 15.1197 8.14453 15.1667 8 15.1667C7.85547 15.1667 7.71485 15.1197 7.59933 15.0328C6.35933 13.9622 2.66666 10.4955 2.66666 7.16683C2.66666 5.75234 3.22857 4.39579 4.22876 3.39559C5.22896 2.3954 6.58551 1.8335 8 1.8335C9.41449 1.8335 10.771 2.3954 11.7712 3.39559C12.7714 4.39579 13.3333 5.75234 13.3333 7.16683Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 9.1665C9.10457 9.1665 10 8.27107 10 7.1665C10 6.06193 9.10457 5.1665 8 5.1665C6.89543 5.1665 6 6.06193 6 7.1665C6 8.27107 6.89543 9.1665 8 9.1665Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span><a href="https://maps.app.goo.gl/qUKzVL9hbr7fQ7Xj8" target='_blank' className="hover:text-[#DEB67B] transition-colors">Xorazm viloyati, Bog'ot tumani Ashxobod mahallasi, Sarbon ko'chasi, 14 - uy</a></span>
              </div>
            </div>
          </div>

          {/* Column 4: Working Hours */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-[#DEB67B] text-lg font-bold">Ish vaqtlari</h3>
            <div className="flex flex-col gap-2 text-neutral-300">
              <div className="flex items-center gap-3">
                {/* Clock icon from SVG */}
                <svg
                  className="w-4 h-4 text-[#DEB67B]"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.00001 15.1668C11.6819 15.1668 14.6667 12.1821 14.6667 8.50016C14.6667 4.81826 11.6819 1.8335 8.00001 1.8335C4.31811 1.8335 1.33334 4.81826 1.33334 8.50016C1.33334 12.1821 4.31811 15.1668 8.00001 15.1668Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 4.5V8.5L10.6667 9.83333" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex flex-col">
                  <span>Du-Ju: 8:00 - 18:00</span>
                  <span>Shanba: 9:00 - 16:00</span>
                  <span>Yakshanba: Dam olish kuni</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal divider line */}
        <hr className="my-8 border-neutral-700" />

        {/* Bottom copyright section */}
        <div className="flex flex-col items-center text-center text-[#fff] text-sm">
          <span>© 2025 Redore. Barcha huquqlar himoyalangan. Xorazm viloyatida temir eshiklar ishlab chiqarish.</span>
          <div className='flex gap-[10px] mt-[20px]'><p className='text-[#808080] text-[19px]'>Created By</p><a className='hover:text-[#fff] transition-colors text-[#808080]' href="https://azizbekkamilov.vercel.app" target='_blank'>AZIZBEK1701</a></div>
        </div>
      </div>
    </footer>
  );
};

export default App;
