export default function Footer() {
  return (
    <footer className="bg-[#1d2a36] text-white pt-16 pb-8">
      <div className="container mx-auto px-15">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <img src="/assets/logo.png" alt="" className="invert brightness-0 max-w-50 mb-6 left-2"/>
            <p className="mb-6">
            Revolutionize your business through Our Custom Software Development Services-bespoke solutions designed to enchance efficiency and faster growth!
            </p>
            <div className="text-white flex space-x-4">
              <a href="#" className="bg-[#3cb17b] rounded-full hover:text-black transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-facebook-fill"></i>
                </div>
              </a>
              <a href="#" className="bg-[#3cb17b] rounded-full hover:text-black transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-twitter-fill"></i>
                </div>
              </a>
              <a href="#" className="bg-[#3cb17b] rounded-full hover:text-black transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-instagram-fill"></i>
                </div>
              </a>
              <a href="#" className="bg-[#3cb17b] rounded-full hover:text-black transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-linkedin-fill"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="mx-0 md:mx-auto">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-black transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="mx-0 md:mx-auto">
            <h3 className="text-lg font-semibold mb-6">Address</h3>
            <p className="mb-6 font-semibold">
              Kelor App Head Office. <br />
              Subang <br />
              Indonesia
            </p>
            <div className="max-w-40">
              <img src="/assets/playstore.png" alt="" className="cursor-pointer mb-2"/>
              <img src="/assets/appstore.png" alt="" className="cursor-pointer"/>
            </div>
          </div>
        </div>
        <div className="font-bold border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">Copyright Kelor App 2025</p>
        </div>
      </div>
    </footer>
  );
}