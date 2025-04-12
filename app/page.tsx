import Amplop from "@/components/Amplop";
import CommentPreviewBox from "@/components/CommentPreviewBox";
import Couple from "@/components/Couple";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Jumbo from "@/components/Jumbo";
import MessageBox from "@/components/MessageBox";
import RSVP from "@/components/Rsvp";
import { Button } from "@/components/ui/Button";
import WeddingDetails from "@/components/WeddingDetails";

export default function Home() {
  return (
    <div className="lg:flex h-screen overflow-hidden">
      {/* Hero (Left) - 2/3 width, fixed and only on desktop */}
      <div className="hidden lg:block lg:w-2/3 fixed top-0 left-0 h-screen z-40">
        <Hero />
      </div>

      {/* Scrollable Content (Right) - 1/3 width, scrollable */}
      <div className="w-full lg:ml-[66.6667%] overflow-y-auto h-screen scroll-smooth bg-[url('/scrollable-bg.png')] bg-repeat bg-cover">
        <main className="bg-gray-200/80 ">
          <section id="jumbo">
            <Jumbo />
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

          <section id="amplop">
            <Amplop />
          </section>

          <section id="messages">
            <MessageBox />
            <CommentPreviewBox />
          </section>

          <section id="rsvp">
            <RSVP />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
