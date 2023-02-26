import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import FooterTitle from '@/components/FooterTitle';
import Section from '@/components/Section';

const Footer = () => {
  const date = new Date();

  return (
    <footer className=" bg-[#333131] " id="contact">
      <div className="grid grid-col md:grid-cols-2 gap-4 py-8 ">
        <div className="flex flex-col  items-center">
          <FooterTitle>Contact</FooterTitle>
          <div className="flex items-center text-[#e8e8e8] opacity-90">
            <HiOutlineMail />
            <p className="ml-2">freshcoffee@gmail.com</p>
          </div>
          <div className="flex items-center text-[#e8e8e8] opacity-90">
            <HiOutlineLocationMarker />
            <p className="ml-2">Jln.kemana saja no.1</p>
          </div>
        </div>
        {/* Service and Social Media */}
        <div className="flex gap-4 flex-col sm:flex-wrap md:flex-row md:items-start   ">
          <div className="flex flex-col items-center ">
            <FooterTitle>Social media</FooterTitle>
            <a href="#" className="text-[#e8e8e8] opacity-90">
              Instagram
            </a>
            <a href="#" className="text-[#e8e8e8] opacity-90">
              Facebook
            </a>
            <a href="#" className="text-[#e8e8e8] opacity-90">
              Tiktok
            </a>
            <a href="#" className="text-[#e8e8e8] opacity-90">
              Whatsapp
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FooterTitle>Product</FooterTitle>
            <p className="text-[#e8e8e8] opacity-90">Coffee</p>
            <p className="text-[#e8e8e8] opacity-90">Desserts</p>
            <p className="text-[#e8e8e8] opacity-90">Beverages</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FooterTitle>Facility</FooterTitle>
            <p className="text-[#e8e8e8] opacity-90">Wifi</p>
            <p className="text-[#e8e8e8] opacity-90">Comfy place</p>
            <p className="text-[#e8e8e8] opacity-90">Musical instrument</p>
            <p className="text-[#e8e8e8] opacity-90">Custom room</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[1.5px] bg-[#e8e8e8] opacity-90 " />
      {/* footer bottom */}
      <p className="text-[#e8e8e8] opacity-90 text-xs font-light tracking-wider text-center mt-2 pb-3">&copy;{date.getFullYear()} Inbox Coffee Resto. All rights reserved. Designed By Ferdiyan</p>
    </footer>
  );
};

export default Footer;
