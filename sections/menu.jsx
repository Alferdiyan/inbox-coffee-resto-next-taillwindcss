import { Ourmenu } from '@/constant';
import Section from '@/components/Section';
import CoffeeCard from '@/components/CoffeeCard';
import { RunningText, TitlePage } from '@/components/TypingText';

import { useState } from 'react';

const OurMenu = () => {
  const [active, setActive] = useState('coffee3');

  return (
    <div id="menu" className="min-h-screen w-screen overflow-x-auto px-10 relative md:px-[8rem] py-[1rem]">
      <RunningText />
      <TitlePage title="Our main menus" />

      <div className="hidden mt-[50px]  md:flex flex-col md:flex-row min-h-[70vh] md:min-h-[70vh] gap-2">
        {Ourmenu.map((coffee, index) => (
          <CoffeeCard key={coffee.id} {...coffee} active={active} handleClick={setActive} />
        ))}
      </div>
      <div className="flex flex-row md:hidden gap-2 min-h-[90vh]">
        {Ourmenu.map((coffee, index) => (
          <CoffeeCard key={coffee.id} {...coffee} active={active} handleClick={setActive} />
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
