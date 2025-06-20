import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#F8F5E6] text-black z-50 shadow">
      <nav className="container mx-auto flex justify-between items-center p-3">
        <button onClick={() => scrollToSection('home')} className="cursor-pointer">
          <img src="/assets/logo.png" alt="" className="max-w-25 md:max-w-45 ml-0 md:ml-23" />
        </button>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black text-xl">
            <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>

        <ul className="hidden md:flex space-x-15 font-semibold text-xl items-center justify-center mr-20">
          {/* SERVICES with DROPDOWN */}
          <li><button onClick={() => scrollToSection('beranda')} className="hover:text-[#3cb17b] cursor-pointer">Beranda</button></li>
          <li><button onClick={() => scrollToSection('tentang')} className="hover:text-[#3cb17b] cursor-pointer">Tentang</button></li>
          <li><button onClick={() => scrollToSection('overview')} className="hover:text-[#3cb17b] cursor-pointer">Hubungi</button></li>
          {/* <li><button onClick={() => scrollToSection('hubungi_kami')} className="bg-[#7BD73E] text-black font-bold px-4 py-2 rounded-3xl hover:bg-green-200 hover:text-[#7BD73E] cursor-pointer">Hubungi Kami</button></li> */}
        </ul>


          <div className={`md:hidden absolute top-full left-0 w-full bg-[#F8F5E6] px-6 py-4 shadow z-40 transition-all duration-300 ${
            menuOpen
              ? "opacity-100 translate-y-0 max-h-[600px] pointer-events-auto"
              : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
          }`}>
            <ul className="flex flex-col space-y-4 font-semibold text-base">
              {/* SERVICES with DROPDOWN */}
              <li><button onClick={() => scrollToSection('beranda')} className="hover:text-[#3cb17b] cursor-pointer">Beranda</button></li>
              <li><button onClick={() => scrollToSection('tentang')} className="hover:text-[#3cb17b] cursor-pointer">Tentang</button></li>
              <li><button onClick={() => scrollToSection('overview')} className="hover:text-[#3cb17b] cursor-pointer">Hubungi</button></li>
              {/* <li><button onClick={() => scrollToSection('hubungi_kami')} className="bg-[#7BD73E] text-black font-bold px-4 py-2 rounded-3xl hover:bg-green-200 hover:text-[#7BD73E] cursor-pointer">Hubungi Kami</button></li> */}
            </ul>
          </div>

      </nav>
    </header>
  );
}

export default Header;