import React, { useState, useEffect, useRef } from 'react';

const Header = () => {

  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <button onClick={() => scrollToSection('home')} className="cursor-pointer">
          <h1 className='text-3xl font-bold text-[#7BD73E]'>Kelor App</h1>
        </button>
        <ul className="flex space-x-15 font-semibold text-xl items-center justify-center">
          {/* SERVICES with DROPDOWN */}
          <li><button onClick={() => scrollToSection('beranda')} className="hover:text-[#7BD73E] cursor-pointer">Beranda</button></li>
          <li><button onClick={() => scrollToSection('tentang')} className="hover:text-[#7BD73E] cursor-pointer">Tentang</button></li>
          <li><button onClick={() => scrollToSection('overview')} className="hover:text-[#7BD73E] cursor-pointer">Overview</button></li>
          <li><button onClick={() => scrollToSection('hubungi_kami')} className="bg-[#7BD73E] text-black font-bold px-4 py-2 rounded-3xl hover:bg-green-200 hover:text-[#7BD73E] cursor-pointer">Hubungi Kami</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;