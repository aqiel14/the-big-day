import Amplop from "@/components/Amplop";
import CommentPreviewBox from "@/components/CommentPreviewBox";
import Couple from "@/components/Couple";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Jumbo from "@/components/Jumbo";
import MessageBox from "@/components/MessageBox";
import RSVP from "@/components/Rsvp";
import { Button } from "@/components/ui/Button";
import WeddingDetails from "@/components/WeddingDetails";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 scroll-smooth flex justify-center lg:justify-end">
    <div className="w-full lg:max-w-[33.333%]">
      <section id="hero">
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
    </div>
  </main>
  );
}
