import { galleryImages } from "@/lib/data";
import Image from "next/image";

export default function Gallery() {
    return (
      <section className="py-16 bg-pink-100 text-center">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 items-center justify-center">
          {galleryImages.map((src, index) => (
            <Image key={index} src={src} alt={`Gallery ${index + 1}`} width={400} height={160} className="bg-white h-40 w-full max-w-xl object-cover" />
          ))}
        </div>
      </section>
    );
  }