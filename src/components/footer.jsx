export default function Footer() {
  return (
    <footer className="bg-[#18332f] text-white pt-16 pb-8">
      <div className="container mx-auto px-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h1 className="text-[#7BD73E] text-3xl font-bold mb-2">Kelor App</h1>
            <p className="mb-6">
            Revolutionize your business through Our Custom Software Development Services-bespoke solutions designed to enchance efficiency and faster growth!
            </p>
            <div className="text-white flex space-x-4">
              <a href="#" className="bg-[#7BD73E] rounded-full hover:text-black transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-facebook-fill"></i>
                </div>
              </a>
              <a href="#" className="bg-[#7BD73E] rounded-full hover:text-black transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-twitter-fill"></i>
                </div>
              </a>
              <a href="#" className="bg-[#7BD73E] rounded-full hover:text-black transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-instagram-fill"></i>
                </div>
              </a>
              <a href="#" className="bg-[#7BD73E] rounded-full hover:text-black transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-linkedin-fill"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="mx-auto">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-black transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="mx-auto">
            <h3 className="text-lg font-semibold mb-6">Address</h3>
            <p className="mb-6 font-semibold">
              Kelor App Head Office. <br />
              Subang <br />
              Indonesia
            </p>
          </div>
        </div>
        <div className="font-bold border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">Copyright Kelor App 2025</p>
        </div>
      </div>
    </footer>
  );
}