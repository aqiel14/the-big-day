"use client";
import { galleryImages } from "@/lib/data";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const chunkArray = (arr: string[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleImages, setVisibleImages] = useState<string[]>([
    ...galleryImages,
  ]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 100) {
        // Append more images
        setVisibleImages((prev) => [...prev, ...galleryImages]);
      }
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const imagePairs = chunkArray(visibleImages, 2);

  return (
    <section className="relative bg-[#82581E] overflow-hidden">
      {/* Background pattern rising from bottom */}

      {/* Main content */}
      <div className="relative z-10 pb-8">
        <div className="p-8">
          <Image
            src={galleryImages[0]}
            width={240}
            height={240}
            alt="image1"
            className="object-cover rounded-3xl mx-auto mb-2 outline-white outline-1 shadow-2xl w-full h-full"
          />
        </div>

        <div className="mx-8 p-1 rounded-2xl bg-[var(--color-primary)] shadow-lg overflow-hidden">
          <div
            ref={containerRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide p-1 pr-[80px]"
          >
            {imagePairs.map((pair, idx) => (
              <div key={idx} className="flex-shrink-0 flex flex-col gap-2 w-40">
                {pair.map((src, i) => (
                  <Dialog
                    key={i}
                    open={selectedImage === src}
                    onOpenChange={(open) => !open && setSelectedImage(null)}
                  >
                    <DialogTrigger asChild>
                      <Image
                        src={src}
                        alt={`Gallery ${idx * 2 + i + 1}`}
                        width={160}
                        height={160}
                        className="rounded-2xl outline-2 outline-white shadow-lg object-cover w-full h-40 cursor-pointer "
                        onClick={() => setSelectedImage(src)}
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl w-[90%] p-0 bg-transparent shadow-none">
                      <VisuallyHidden>
                        <DialogTitle>Gallery Image</DialogTitle>
                      </VisuallyHidden>
                      <Image
                        src={src}
                        alt="Full View"
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-xl"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
