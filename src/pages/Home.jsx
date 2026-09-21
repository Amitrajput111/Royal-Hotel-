import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import BookingPanel from '../components/sections/BookingPanel';
import About from '../components/sections/About';
import Rooms from '../components/sections/Rooms';
import Experiences from '../components/sections/Experiences';
import Dining from '../components/sections/Dining';
import Gallery from '../components/sections/Gallery';
import Offers from '../components/sections/Offers';
import Testimonials from '../components/sections/Testimonials';
import Location from '../components/sections/Location';
import FAQ from '../components/sections/FAQ';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BookingPanel />
        <About />
        <Rooms />
        <Experiences />
        <Dining />
        <Gallery />
        <Offers />
        <Testimonials />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
