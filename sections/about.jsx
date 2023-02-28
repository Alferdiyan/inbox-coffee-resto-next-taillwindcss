import Image from 'next/image';
import { RunningText, TitlePage } from '@/components/TypingText';
import Section from '@/components/Section';

const About = () => {
  return (
    <div id="about">
      <div className="h-full">
        <div className="md:relative flex sm:flex-col ">
          <div className="hidden md:w-[60vw] md:flex md:py-6 justify-center items-center ">
            <Image src="/image/coffee-shop.jpg" alt="coffee-shop" width={350} height={400} className="mb-10 rounded-xl" />
          </div>

          <div className="md:absolute md:right-0 md:w-[40vw] bg-[#333131] p-4">
            <h1 className="p-3 text-6xl font-bold text-green-100 opacity-10">Inbox Coffee Resto</h1>
            <div className="flex justify-center">
              <Image src="/image/coffee-shop.jpg" alt="coffee-shop" width={250} height={250} className="place-content-center md:hidden rounded-xl" />
            </div>

            <RunningText color="#7d7d7d" align="left" />
            <TitlePage title="About us" color="#e8e8e8" align="left" />
            <div className="mt-8 text-[#e8e8e8] text-lg font-regular text-justify">
              <p className="opacity-90">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
