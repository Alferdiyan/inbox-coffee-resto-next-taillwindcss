import Head from 'next/head';
import Homepage from '../sections/home.jsx';
import OurMenu from '@/sections/menu.jsx';
import Dessert from '@/sections/dessert.jsx';
import About from '@/sections/about.jsx';
import Footer from '@/sections/footer.jsx';
import Team from '@/sections/team.jsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inbox Coffee Resto | Tempat Adem Haraga Adem</title>
        <meta name="description" content="inbox Coffee & Resto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
      <OurMenu />
      <Dessert />
      <Team />
      <About />
      <Footer />
    </>
  );
}
