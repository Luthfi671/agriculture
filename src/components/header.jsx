import React, { useState, useEffect, useRef } from 'react';

const Header = () => {

  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#F8F5E6] text-black z-50 shadow">
      <nav className="container mx-auto flex justify-between items-center p-3">
        <button onClick={() => scrollToSection('home')} className="cursor-pointer">
          <img src="/assets/logo.png" alt="" className="max-w-35 sm:max-w-5 md:max-w-35 ml-0 sm:ml-0 md:ml-10 " />
        </button>
        <ul className="flex space-x-15 md:space-x-15 sm:space-x-5 font-semibold md:text-xl sm:text-sm items-center justify-center mr-6 md:mr-20 sm:mr-6">
          {/* SERVICES with DROPDOWN */}
          <li><button onClick={() => scrollToSection('beranda')} className="hover:text-[#3cb17b] cursor-pointer">Beranda</button></li>
          <li><button onClick={() => scrollToSection('tentang')} className="hover:text-[#3cb17b] cursor-pointer">Tentang</button></li>
          <li><button onClick={() => scrollToSection('overview')} className="hover:text-[#3cb17b] cursor-pointer">Hubungi</button></li>
          {/* <li><button onClick={() => scrollToSection('hubungi_kami')} className="bg-[#7BD73E] text-black font-bold px-4 py-2 rounded-3xl hover:bg-green-200 hover:text-[#7BD73E] cursor-pointer">Hubungi Kami</button></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;