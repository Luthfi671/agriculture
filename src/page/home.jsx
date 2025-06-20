import React, { useRef } from 'react';
import Section from '../components/section';
import CountUp from 'react-countup';
import AnimatedNumbers from "react-animated-numbers";
import { motion, AnimatePresence } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
    {
      message:
        "Thank you for your service. I am very pleased with the result. I have seen exponential growth in my business and it's all thanks to your amazing service.",
      name: "Emily Stones",
      role: "CEO, Marketing Guru",
      image: "/assets/profile-testimoni.png",
    },
    {
      message:
        "Excellent support and results! Our metrics have improved significantly since we started working with you.",
      name: "John Doe",
      role: "Founder, Growthify",
      image: "/assets/profile-testimoni.png",
    },
    {
      message:
        "Professional, reliable, and highly skilled. Couldn't ask for more!",
      name: "Sarah Lee",
      role: "Head of Marketing, BrandBee",
      image: "/assets/profile-testimoni.png",
    },
    {
      message:
        "Professional, reliable, and highly skilled. Couldn't ask for more!",
      name: "Sarah Lee",
      role: "Head of Marketing, BrandBee",
      image: "/assets/profile-testimoni.png",
    },
    {
      message:
        "Professional, reliable, and highly skilled. Couldn't ask for more!",
      name: "Sarah Lee",
      role: "Head of Marketing, BrandBee",
      image: "/assets/profile-testimoni.png",
    },
  ];

const FloatingIcon = ({ children, className, style, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {

    const swiperRef = useRef(null);

    const handlePrev = () => {
      if (swiperRef.current) swiperRef.current.slidePrev();
    };
    
    const handleNext = () => {
      if (swiperRef.current) swiperRef.current.slideNext();
    };

    return (
        <main>
            
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"></link>
            <link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet" />

            <Section id="beranda" className="mx-0 md:mx-20 mt-30 md:mt-40 p-2 mb-0 md:mb-0 lg:mb-35">
                <div className="grid lg:grid-cols-2 items-center gap-0">
                    {/* Text Content */}
                    <div className="space-y-4 px-5 ml-0 md:ml-10">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#34495E] max-w-300 font-serif text-center md:text-left">
                            <div data-aos="fade-up" data-aos-delay="100">
                                Sistem Pertanian untuk Esok Hari yang Lebih Baik
                            </div>
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="250" className="text-[#012F1F] text-center md:text-left text-lg md:text-xl font-semibold mb-6">
                            Temukan perpaduan sempurna antara kearifan tradisional dan inovasi modern di bidang pertanian. Kami memupuk keunggulan dengan setiap benih yang ditanam.
                        </p>
                        <div data-aos="fade-up" data-aos-delay="500" className="flex gap-4 flex-wrap max-w-70 mx-auto md:max-w-none justify-center md:justify-normal">
                            <button className="flex bg-[#012F1F] text-white md:max-w-40 text-xl md:text-lg px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition cursor-pointer">
                                Layanan Kami
                            </button>
                            <button className="flex border-2 border-[#012F1F] md:max-w-40 h-full text-[#012F1F] text-xl md:text-lg px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition cursor-pointer">
                                Hubungi Kami
                            </button>
                            <div className='flex flex-col md:flex-row gap-2 md:gap-5'>
                                <img src="/assets/playstore.png" alt="" className="cursor-pointer w-36"/>
                                <img src="/assets/appstore.png" alt="" className="cursor-pointer w-36"/>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-left" className="relative lg:bottom-15 lg:left-10 mt-10 md:mt-20 lg:mt-0">
                        <img src="/assets/gambar-heading.png" alt="Hero Illustration" className="max-w-50 md:max-w-300 mx-auto"/>
                    </div>
                </div>

            </Section>

            <Section id="bottomheader" className="md:py-10">
                <div className="container mx-auto px-5 md:px-20">
                    <div className="mb-12">
                        <h1 data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-2xl font-semibold my-6 mb-17 text-center">
                            Perangkat lunak yang dirancang untuk membantu petani dan pelaku industri pertanian dalam mengelola kegiatan pertanian secara lebih efisien
                        </h1>
                        <div data-aos="fade-up" data-aos-delay="200" className='flex items-center justify-center w-10 h-10 md:w-15 md:h-15 border-2 rounded-full mx-auto hover:bg-[#012F1F] hover:text-white hover:border-white cursor-pointer animate-bounce transition-all duration-300'>
                            <i class="ri-arrow-down-long-line text-xl md:text-3xl"></i>
                        </div>
                    </div>
                </div>
            </Section>
            
            <Section id="introduce" className="pt-20 pb-25 bg-white">
                <h1 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-6xl text-[#34495E] font-bold my-6 max-w-250 mx-auto mb-15 font-serif">
                    Aplikasi Kami
                </h1>
                <p data-aos="fade-up" data-aos-delay="200" className="text-[#012F1F] px-5 md:px-50 text-xl md:text-2xl font-semibold mb-20 md:mb-50 text-center">
                    Berakar pada tradisi, tumbuh dengan inovasi. Perjalanan kami dimulai dengan keyakinan sederhana dalam praktik pertanian berkelanjutan.
                </p>
                <div className="bg-[#012F1F] text-white flex flex-col md:flex-row w-full px-10 pb-15 md:pb-10 lg:pb-5 md:px-20 items-center gap-12">
                    {/* Text Content */}
                    <div className="space-y-4 pb-0 md:pb-4 text-center md:text-left px-5 ml-0 md:ml-10 py-10 md:py-10 lg:py-0 mr-0 md:max-w-230">
                        <h4 className="text-xl md:text-4xl font-semibold leading-tight">
                            Memperkenalkan <b>KELOR APP</b>
                        </h4>
                        <p className='text-lg md:text-xl'>
                            Kendalikan operasi pertanian Anda dengan aplikasi yang dirancang untuk petani yang aktif. Tanpa basa-basi, hanya perangkat yang Anda butuhkan untuk berhasil.
                        </p>
                        <div className='flex flex-col md:flex-row md:gap-2 gap-2'>
                            <img src="/assets/playstore.png" alt="" className="cursor-pointer w-40 mx-auto md:mx-0"/>
                            <img src="/assets/appstore.png" alt="" className="cursor-pointer w-40 mx-auto md:mx-0"/>
                        </div>
                    </div>

                    <div className="relative w-full my-auto md:right-10 lg:right-20">
                        <img src="/assets/laptop.png" alt="Hero Illustration" className="md:bottom-2 md:max-w-80 lg:max-w-100 mx-auto"/>
                        <img src="/assets/handphone.png" alt="Hero Illustration" className="md:absolute md:top-20 md:right-0 max-w-40 md:max-w-25 lg:max-w-30 mx-auto"/>
                    </div>
                </div>

            </Section>
            
            <Section id="dashboard" className="bg-white py-10 pt-0 pb-20">
                <div className="container mx-auto px-5 md:px-15">
                    <div className="mb-2 text-center">
                        <h1 className="text-xl md:text-3xl md:mx-10 font-semibold md:font-bold my-6 mb-10 md:mb-10 mx-auto">
                            Ucapkan Selamat Tinggal pada Pertanian Manual dan Gunakan AgriERP untuk Manajemen Pertanian Anda
                        </h1>
                    </div>
                    <img src="/assets/ss_dashboard.png" alt="Hero Illustration" className="w-full max-w-xl lg:max-w-full mx-auto"/>
                </div>
            </Section>
            
            <Section id="petani" className="py-10 mx-0 mt-10">
                <div className="w-full mx-0">
                    <div className="mb-4 text-center px-5 md:px-15">
                        <h1 className="text-3xl md:text-5xl font-bold my-6 mb-5 max-w-250 mx-auto text-[#34495E] font-serif">
                            Layanan Kami
                        </h1>
                        <div className="h-1 max-w-50 mx-auto bg-[#34495E] mb-10"></div>
                        <p className='text-lg font-semibold md:text-2xl px-0 md:px-50 text-[#012F1F]'>
                            Solusi pertanian komprehensif yang disesuaikan dengan kebutuhan Anda, memadukan tradisi dengan teknologi mutakhir.
                        </p>
                    </div>
                    <div className='w-full mt-10 mx-0 px-0 grid bg-black/50 text-white h-200 md:h-120 grid-cols-1 sm:grid-cols-2 md:grid-cols-5'>
                        <div className="relative overflow-hidden group flex flex-col justify-normal md:justify-end p-4 h-full">
                            <div className="absolute inset-0 bg-[url('/assets/category/row_crop.png')] bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110 z-0"></div>
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-500 z-0"></div>
                            <div className="relative z-10 text-white">
                                <h3 className="mb-2 font-bold text-2xl">Row Crop Farms</h3>
                                <p>
                                    Streamline your row crop farm management with AgriERP's advanced features for real-time inventory tracking and resource optimization.
                                </p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden group flex flex-col justify-normal md:justify-end p-4 h-full">
                            <div className="absolute inset-0 bg-[url('/assets/category/almond.png')] bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110 z-0"></div>
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-500 z-0"></div>
                            <div className="relative z-10 text-white">
                                <h3 className="mb-2 font-bold text-2xl">Almond Farms</h3>
                                <p>
                                    AgriERP empowers almond farmers with specialized farm management solution to track and optimize every aspect of their orchard operations efficiently.
                                </p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden group flex flex-col justify-normal md:justify-end p-4 h-full">
                            <div className="absolute inset-0 bg-[url('/assets/category/vegetable_farm.png')] bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110 z-0"></div>
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-500 z-0"></div>
                            <div className="relative z-10 text-white">
                                <h3 className="mb-2 font-bold text-2xl">Vegetable Farms</h3>
                                <p>
                                    AgriERP enchances vegetable farming efficiency with smart inventory management tools for better crop and supply chain oversight.
                                </p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden group flex flex-col justify-normal md:justify-end p-4 h-full">
                            <div className="absolute inset-0 bg-[url('/assets/category/indoor_vertical_farm.png')] bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110 z-0"></div>
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-500 z-0"></div>
                            <div className="relative z-10 text-white">
                                <h3 className="mb-2 font-bold text-2xl">Indoor Vertical Farms</h3>
                                <p>
                                    Unlock precision farming in your vertical spaces with AgriERP's tailored solutions for managing diverse crop varieties.
                                </p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden group flex flex-col justify-normal md:justify-end p-4 h-full">
                            <div className="absolute inset-0 bg-[url('/assets/category/nut_cirtus.png')] bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110 z-0"></div>
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-500 z-0"></div>
                            <div className="relative z-10 text-white">
                                <h3 className="mb-2 font-bold text-2xl">Nut and Citrus Farms</h3>
                                <p>
                                    Maximize yield for nut and citrus orchards with AgriERP's robust management systems for inventory control and operational efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="mitra" className="py-10 mx-0">
                <h1 className="text-3xl font-bold my-6 mb-2 max-w-250 mx-auto">
                    Mitra kami
                </h1>
                <div className="w-full mt-9 z-10 slider-container"> 
                    <div className="slider-track py-2">
                        <img src="/assets/evos+-logo.png" alt="" className="max-w-26"/>
                        <img src="/assets/arhan-logo.png" alt="" className="max-w-50"/>
                        <img src="/assets/kongsi-logo.png" alt="" className="max-w-50"/>
                        <img src="/assets/hubitat-logo.jpg" alt="" className="max-w-35"/>

                        <img src="/assets/evos+-logo.png" alt="" className="max-w-26"/>
                        <img src="/assets/arhan-logo.png" alt="" className="max-w-50"/>
                        <img src="/assets/kongsi-logo.png" alt="" className="max-w-50"/>
                        <img src="/assets/hubitat-logo.jpg" alt="" className="max-w-35"/>

                        <div style={{ width: '20px', flexShrink: 0 }} aria-hidden="true"></div>
                    </div>
                </div>
            </Section>

            <Section id="testimoni" className="px-4 md:px-15 pb-40">
                <div data-aos="fade-up" data-aos-offset="200" className="flex flex-col md:flex-row md:justify-between items-center w-full p-12 pb-4">
                    <div>
                        <h5 className="uppercase text-3xl font-bold mb-4">TESTIMONIALS</h5>
                    </div>
                    <div data-aos="fade-up" data-aos-offset="-100" className="flex items-center gap-3 ml-0 md:ml-4 ">
                        <button
                            onClick={handlePrev}
                            className="w-8 h-8 md:w-14 md:h-14 border border-black rounded-full flex items-center justify-center text-md md:text-xl cursor-pointer"
                        >
                            <i className="ri-arrow-left-line"></i>
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-8 h-8 md:w-14 md:h-14 bg-[#3cb17b] rounded-full flex items-center justify-center text-md md:text-xl text-white cursor-pointer"
                        >
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>
                </div>

                <div className="w-full p-12">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        slidesPerGroup={1}
                        loop={true}
                        onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        }}
                        breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        }}
                        data-aos="fade-up"
                        data-aos-offset="200"
                    >
                        {testimonials.map((t, index) => (
                        <SwiperSlide key={index} className="py-3">
                            <div className="shadow-md rounded-2xl p-6 bg-white h-full">
                                <p className="text-sm text-gray-700 mb-4">{t.message}</p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold">{t.name}</p>
                                        <p className="text-sm text-gray-600">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Section>

        </main>
    );
  }