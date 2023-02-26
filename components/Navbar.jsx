import Image from 'next/image';
import Navlink from './Navlink';

import { linkList } from '@/utils/link';
import React, { useState } from 'react';
import ResponsiveNavLink from './ResponsiveNavLink';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-[20] text-white mt-4">
      {/* Desktop Nav */}
      <div className="hidden md:flex md:justify-between items-center">
        {/* logo */}
        <div>
          <Image src="/logo.png" alt="logo" width={70} height={70} />
        </div>
        {/* Nav Mneu */}
        <ul className="md:flex gap-4 text-xs md:text-lg">
          {linkList.map((link) => (
            <Navlink key={link.id} href={link.href} title={link.title} />
          ))}
        </ul>
      </div>
      {/* Desktop Nav */}

      {/* Mobile Nav */}
      <div className="flex justify-between items-center md:hidden mb-10">
        <div>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </div>
        <div>
          <div onClick={() => setOpen(false)} className={`${open ? 'block' : 'hidden'} bg-transparent absolute w-full h-full inset-0`}></div>
          <button onClick={() => setOpen((open) => !open)} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </button>
          <div className={`${open ? 'block' : 'hidden'} bg-white absolute right-0 mr-10 top-0 mt-4 py-1 rounded-lg w-56 overflow-hidden`}>
            <ResponsiveNavLink href="#">Home</ResponsiveNavLink>
            <ResponsiveNavLink href="#">Our menu</ResponsiveNavLink>
            <ResponsiveNavLink href="#">Dessert</ResponsiveNavLink>
            <ResponsiveNavLink href="#">About Us</ResponsiveNavLink>
            <ResponsiveNavLink href="#">Contact</ResponsiveNavLink>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
    </div>
  );
};

export default Navbar;
