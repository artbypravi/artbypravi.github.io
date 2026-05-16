import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import About from '../components/About';
import FeaturedWorks from '../components/FeaturedWorks';
import Commission from '../components/Commission';
import Social from '../components/Social';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function Home() {
  return (
    <>
      <Head>
        <title>Art by Pravi</title>
        <meta
          name="description"
          content="Art by Pravi — Expressive pencil portraits, sketch art, and creative illustrations by Jayani Pravindi. Commissions open."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Art by Pravi" />
        <meta
          property="og:description"
          content="Handcrafted pencil art, portraits, and illustrations by Jayani Pravindi."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <BackToTop />
        <Hero />
        <Intro />
        <About />
        <FeaturedWorks />
        <Commission />
        <Social />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
