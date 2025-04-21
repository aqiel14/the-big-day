import AmplopAndRsvp from "@/components/AmplopAndRsvp";
import Couple from "@/components/Couple";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Jumbo from "@/components/Jumbo";
import MessageBox from "@/components/MessageBox";
import Qs from "@/components/Qs";
import RSVP from "@/components/Rsvp";
import { Button } from "@/components/ui/Button";
import WeddingDetails from "@/components/WeddingDetails";

export default function Home() {
  return (
    <div className="lg:flex h-screen overflow-hidden">
      {/* Jumbo (Left) - 2/3 width, fixed and only on desktop */}
      <div className="hidden lg:block lg:w-2/3 fixed top-0 left-0 h-screen z-40">
        <Jumbo />
      </div>

      {/* Scrollable Content (Right) - 1/3 width, scrollable */}
      <div className="relative w-full lg:ml-[66.6667%] overflow-y-auto h-screen scroll-smooth bg-[url('/jumbo-bg.jpg')] bg-repeat bg-cover">
        <main className="relative z-10">
          <section id="Hero">
            <Hero />
          </section>

          <section id="qs">
            <Qs />
          </section>

          <section id="couple">
            <Couple />
          </section>

          <section id="details">
            <WeddingDetails />
          </section>

          <section id="gallery">
            <Gallery />
          </section>

          <section id="amplop-and-rsvp">
            <AmplopAndRsvp />
          </section>

          <section id="messages">
            <MessageBox />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
