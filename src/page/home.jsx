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

            <Section id="beranda" className="bg-[#012F1F] mx-20 rounded-2xl mt-20 p-2">
                <div className="grid lg:grid-cols-2 items-center gap-12">
                    {/* Text Content */}
                    <div className="space-y-4 px-5 ml-10">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#7BD73E] max-w-90">
                        <div data-aos="fade-up" data-aos-delay="100">Truly circular</div>
                        <div data-aos="fade-up" data-aos-delay="200">reusing</div>
                        <div data-aos="fade-up" data-aos-delay="300">nutrients from</div>
                        <div data-aos="fade-up" data-aos-delay="400">aquaculture</div>
                        </h1>
                        <div data-aos="fade-up" data-aos-delay="500" className="flex gap-4 flex-wrap">
                            <button className="flex bg-[#7BD73E] text-white text-xl px-6 py-2 rounded-xl font-semibold hover:bg-green-600 transition cursor-pointer">
                            Preview
                            </button>
                        </div>
                    </div>

                    <div data-aos="fade-left" className="relative top-0 right-15">
                        <img src="/assets/img-heading.png" alt="Hero Illustration" className="w-full max-w-md lg:max-w-full mx-auto"/>
                    </div>
                </div>

            </Section>

            <Section id="bottomheader" className="py-10">
                <div className="container mx-auto px-15">
                    <div data-aos="fade-up" className="mb-12">
                        <h1 className="text-3xl font-bold my-6 mb-17 text-center">
                        Perangkat lunak yang dirancang untuk membantu petani dan pelaku industri pertanian dalam mengelola kegiatan pertanian secara lebih efisien
                        </h1>
                        <div className='flex items-center justify-center w-15 h-15 border-2 rounded-full mx-auto bg-[#7BD73E] hover:bg-[#012F1F] hover:text-white hover:border-white cursor-pointer animate-bounce transition-all duration-300'>
                            <i class="ri-arrow-down-long-line text-3xl"></i>
                        </div>
                    </div>
                </div>
            </Section>
            
            <Section id="introduce" className="bg-[#7BD73E] mx-20 rounded-2xl mt-20 p-2">
                <div className="grid lg:grid-cols-2 items-center gap-12">
                    {/* Text Content */}
                    <div className="space-y-4 px-5 ml-10 py-7">
                        <h4 className="text-2xl md:text-4xl font-semibold leading-tight max-w-200">
                            INTRODUCING <b>KELOR APP</b>
                        </h4>
                        <p className='text-lg'>
                            Kendalikan operasi pertanian Anda dengan aplikasi yang dirancang untuk petani yang aktif. Tanpa basa-basi, hanya perangkat yang Anda butuhkan untuk berhasil.
                        </p>
                    </div>

                    <div className="absolute top-187 right-40">
                        <img src="/assets/laptop.png" alt="Hero Illustration" className="w-full max-w-sm lg:max-w-140 mx-auto"/>
                    </div>
                    <div className="absolute top-225 right-40">
                        <img src="/assets/handphone.png" alt="Hero Illustration" className="w-full max-w-40 lg:max-w-70 mx-auto"/>
                    </div>
                </div>

            </Section>
            
            <Section id="dashboard" className="py-10 mt-20">
                <div className="container mx-auto px-15">
                    <div className="mb-2 text-center">
                        <h1 className="text-3xl font-bold my-6 mb-2 max-w-250 mx-auto">
                            Ucapkan Selamat Tinggal pada Pertanian Manual dan Gunakan AgriERP untuk Manajemen Pertanian Anda
                        </h1>
                        <p className='text-2xl'>
                            Membudidayakan pertanian yang berhasil untuk masa depan
                        </p>
                    </div>
                    <img src="/assets/ss_dashboard.png" alt="Hero Illustration" className="w-full max-w-xl lg:max-w-full mx-auto"/>
                </div>
            </Section>
            
            <Section id="petani" className="py-10 mt-20">
                <div className="container mx-auto px-15">
                    <div className="mb-4 text-center">
                        <h1 className="text-3xl font-bold my-6 mb-2 max-w-250 mx-auto">
                            Memberdayakan semua jenis petani
                        </h1>
                        <p className='text-2xl'>
                            Satu Platform yang Kuat Untuk Semua Kebutuhan Pertanian
                        </p>
                    </div>
                    <div className='w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 text-center'>
                        <div>Row Crop Farms</div>
                        <div>Almond Farms</div>
                        <div>Vegetable Farms</div>
                        <div>Indoor Vertical Farms</div>
                        <div>Nut and Citrus Farms</div>
                    </div>
                </div>
            </Section>

            <Section id="4_icon" className='px-0'>
            <div className="bg-[#FDEDD0] py-20 w-full">
                <div className="max-w-6xl mx-auto px-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center">
                    <div data-aos="fade-up" data-aos-delay="150" className="flex flex-col items-center border-r last:border-none border-[#C4C4C480] px-4 py-10">
                        <i class="ri-file-settings-line text-6xl mb-2"></i>
                        <h3 className="text-sm font-medium text-gray-800 mb-1">Completed Projects</h3>
                        <p className="text-[#F55F1D] font-bold text-3xl">
                        {/* <AnimatedNumbers
                            animateToNumber={1400}
                            configs={() => ({ mass: 1.5, tension: 60, friction: 30 })}
                            /> */}
                        <CountUp end={1400} duration={8} />
                         +</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col items-center border-r last:border-none border-[#C4C4C480] px-4 py-10">
                        <i class="ri-team-line text-6xl mb-2"></i>
                        <h3 className="text-sm font-medium text-gray-800 mb-1">Customer Satisfaction</h3>
                        <p className="text-[#F55F1D] font-bold text-3xl"><CountUp end={20} duration={8} delay={1} /> %</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="450"className="flex flex-col items-center border-r last:border-none border-[#C4C4C480] px-4 py-10">
                        <i class="bi bi-cash-coin text-6xl mb-2"></i>
                        <h3 className="text-sm font-medium text-gray-800 mb-1">Raised by Clients</h3>
                        <p className="text-[#F55F1D] font-bold text-3xl">$<CountUp end={10} duration={8} delay={1} />M</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col items-center border-r last:border-none border-[#C4C4C480] px-4 py-10">
                        <i class="bi bi-calendar2-week text-6xl mb-2"></i>
                        <h3 className="text-sm font-medium text-gray-800 mb-1">Years in Business</h3>
                        <p className="text-[#F55F1D] font-bold text-3xl"><CountUp end={2} duration={8} delay={1} /> yrs</p>
                    </div>
                </div>
            </div>
            </Section>

            <Section id="our_portfolio" className='px-15'>
                <div className="p-6 pt-0 md:p-12 md:pt-0">
                    <div data-aos="fade-up" data-aos-offset="200" className="mb-12">
                        <h5 className="uppercase text-lg font-semibold text-[#F55F1D] mb-4">Our Portfolio</h5>
                        <p className="text-2xl font-bold max-w-95">We provide the Perfect Solution to your business growth</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-10">
                        <div data-aos="fade-up" data-aos-delay="150" data-aos-offset="200" className="space-y-4">
                            <img src='/assets/porto-1.png' className="shadow-md w-full object-cover"/>
                            <h2 className="text-2xl font-bold">
                                Digital Marketing Agency Website
                            </h2>
                            <p className="mr-10">
                                This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" className="space-y-4">
                            <img src='/assets/porto-2.png' className="shadow-md w-full object-cover"/>
                            <h2 className="text-2xl font-bold">
                                Digital Marketing Agency Website
                            </h2>
                            <p className="mr-10">
                                This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="150" data-aos-offset="200" className="space-y-4">
                            <img src='/assets/porto-3.png' className="shadow-md w-full object-cover"/>
                            <h2 className="text-2xl font-bold">
                                Digital Marketing Agency Website
                            </h2>
                            <p className="mr-10">
                                This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" className="space-y-4">
                            <img src='/assets/porto-4.png' className="shadow-md w-full object-cover"/>
                            <h2 className="text-2xl font-bold">
                                Digital Marketing Agency Website
                            </h2>
                            <p className="mr-10">
                                This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="testimoni" className="px-4 md:px-15">
                <div data-aos="fade-up" data-aos-offset="200" className="flex justify-between items-center w-full p-12 pb-4">
                    <div>
                        <h5 className="uppercase text-lg font-semibold text-[#F55F1D] mb-4">TESTIMONIALS</h5>
                        <p className="text-2xl font-semibold max-w-95">
                            See what our customers <br /> say about us
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-offset="-100" className="flex items-center gap-3 ml-4 ">
                        <button
                            onClick={handlePrev}
                            className="w-14 h-14 border border-black rounded-full flex items-center justify-center text-xl cursor-pointer"
                        >
                            <i className="ri-arrow-left-line"></i>
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-14 h-14 bg-orange-300 rounded-full flex items-center justify-center text-xl text-white cursor-pointer"
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

            <Section id="subscribe" className="px-4 md:px-15">
                <div className="items-center w-full p-12 pb-4 mb-30">
                    <div data-aos="fade-up" data-aos-delay="150" className='text-center'>
                        <h5 className="uppercase text-xl font-semibold text-[#F55F1D] mb-4">SUBSCRIBE</h5>
                        <p className="text-4xl font-semibold mb-2">
                            Subscribe to get the latest<br />
                            news about us
                        </p>
                        <span className='text-[#8B8B8B]'>
                            Please drop your email below to get daily update about what we do
                        </span>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="-25" className="relative w-full max-w-xl mx-auto mt-10">
                        <input
                            type="email"
                            placeholder="Enter Your Email Adress"
                            className="w-full px-5 py-4 pr-36 border border-black-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <button
                            type="submit"
                            className="absolute right-1 top-1 bottom-1 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition duration-300 cursor-pointer"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </Section>
        
            {/* <Section id="get-started" className="py-20">
                <div className="container mx-auto px-6">
                    <div data-aos="fade-up" className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h3>
                        <p className="text-gray-700">Ready to start your project? Contact us today and let's discuss how we can help you achieve your digital goals.</p>
                    </div>
                    <div class="flex flex-col md:flex-row gap-12">
                        <div data-aos="fade-up" data-aos-delay="150" class="w-full md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-md animate-on-scroll visible">
                            <h3 class="text-2xl font-semibold mb-6">Send Us a Message</h3>
                            <form id="contact-form">
                                <div class="mb-6">
                                    <label for="name" class="block text-gray-700 mb-2">Full Name</label>
                                    <input type="text" id="name" class="bg-white w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="John Smith"/>
                                </div>
                                <div class="mb-6">
                                    <label for="email" class="block text-gray-700 mb-2">Email Address</label>
                                    <input type="email" id="email" class="bg-white w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="john@example.com"/>
                                </div>
                                <div class="mb-6">
                                    <label for="project-type" class="block text-gray-700 mb-2">Project Type</label>
                                    <div class="relative">
                                        <div class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary flex justify-between items-center cursor-pointer" id="project-type-display">
                                            <span>Select Project Type</span>
                                            <div class="w-5 h-5 flex items-center justify-center">
                                                <i class="ri-arrow-down-s-line"></i>
                                            </div>
                                        </div>
                                        <div class="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-md z-10 hidden" id="project-type-dropdown">
                                            <div class="py-2 px-4 hover:bg-gray-100 cursor-pointer" data-value="website">Website Development</div>
                                            <div class="py-2 px-4 hover:bg-gray-100 cursor-pointer" data-value="system">System Development</div>
                                            <div class="py-2 px-4 hover:bg-gray-100 cursor-pointer" data-value="mobile">Mobile App Development</div>
                                            <div class="py-2 px-4 hover:bg-gray-100 cursor-pointer" data-value="other">Other</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <label for="message" class="block text-gray-700 mb-2">Message</label>
                                    <textarea id="message" rows="5" class="bg-white w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="Tell us about your project..."></textarea>
                                </div>
                                <button type="submit" class="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap">Submit Message</button>
                            </form>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" class="w-full md:w-1/2 animate-on-scroll visible" data-delay="200">
                            <div class="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
                                <h3 class="text-2xl font-semibold mb-6">Contact Information</h3>
                                <div class="flex items-start mb-6">
                                    <div class="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                                        <i class="ri-mail-line text-primary"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-medium text-gray-900">Email Us</h4>
                                        <a href="mailto:info@weejee.com" class="text-gray-600 hover:text-primary">info@weejee.com</a>
                                    </div>
                                </div>
                                <div class="flex items-start mb-6">
                                    <div class="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                                        <i class="ri-phone-line text-primary"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-medium text-gray-900">Call Us</h4>
                                        <a href="tel:+1234567890" class="text-gray-600 hover:text-primary">+1 (234) 567-890</a>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                                        <i class="ri-map-pin-line text-primary"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-medium text-gray-900">Visit Us</h4>
                                        <p class="text-gray-600">123 Tech Avenue, San Francisco, CA 94107</p>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 p-8 rounded-lg shadow-md">
                                <h3 class="text-2xl font-semibold mb-6">Follow Us</h3>
                                <div class="flex space-x-4">
                                    <a href="#" class="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                                        <i class="ri-facebook-fill"></i>
                                    </a>
                                    <a href="#" class="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                                        <i class="ri-twitter-fill"></i>
                                    </a>
                                    <a href="#" class="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                                        <i class="ri-instagram-fill"></i>
                                    </a>
                                    <a href="#" class="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                                        <i class="ri-linkedin-fill"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section> */}
            
        </main>
    );
  }