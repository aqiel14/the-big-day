import { couple, qs } from "@/lib/data";
import { Icon, MapPin } from "lucide-react";
import { Button } from "./ui/Button";

export default function WeddingDetails() {
  return (
    <div className="flex flex-col items-center bg-[var(--color-overlay)] opacity-100">
      <div className="flex flex-col justify-center items-center bg-[url('/bg-3.png')] w-full h-full flex-grow bg-center bg-cover">
        <div className=" flex flex-col justify-center items-center mx-16 gap-4">
          <div className="flex flex-col  min-h-[260px]  outline-4 w-full gap-2 text-center text-[var(--color-text-secondary)] bg-[var(--color-primary)] rounded-2xl p-8">
            <h2 className="text-4xl font-bold">Akad Nikah</h2>
            <h3 className="font-semibold text-xl">Selasa</h3>
            <h2 className="text-4xl font-bold">11</h2>
            <h3 className="font-semibold text-xl">November 2025</h3>
            <h3 className="font-semibold text-xl">10.00 - 11.00</h3>
          </div>
          <div className="flex flex-col min-h-[260px]  justify-center items-center bg-white/0 backdrop-blur-xs w-[100%] gap-1 text-center text-[var(--color-text-white)] outline-white outline-2 rounded-2xl p-8">
            <h2 className="text-4xl font-bold">Lokasi Acara</h2>
            <MapPin className="w-8 h-8 mx-auto my-6 mb-4" />
            <h2 className="text-lg font-bold">
              Masjid Muhammad Cheng Hoo Pandaan
            </h2>
            <h3 className=" text-xl">Jalan Raya Kasri No.18 Petung Sari</h3>
            <Button className="mt-4 px-4 py-2 rounded-2xl bg-[var(--color-primary)] text-[var(--color-text-secondary)] font-medium hover:opacity-90">
              Location
            </Button>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center mx-16 my-4 gap-4">
          <div className="flex flex-col  min-h-[260px]  outline-4 w-full gap-2 text-center text-[var(--color-text-secondary)] bg-[var(--color-primary)] rounded-2xl p-8">
            <h2 className="text-4xl font-bold">Resepsi</h2>
            <h3 className="font-semibold text-xl">Selasa</h3>
            <h2 className="text-4xl font-bold">12</h2>
            <h3 className="font-semibold text-xl">November 2025</h3>
            <h3 className="font-semibold text-xl">10.00 - 11.00</h3>
          </div>
          <div className="flex flex-col min-h-[260px]  justify-center items-center bg-white/0 backdrop-blur-xs w-[100%] gap-1 text-center text-[var(--color-text-white)] outline-white outline-2 rounded-2xl p-8">
            <h2 className="text-4xl font-bold">Lokasi Acara</h2>
            <MapPin className="w-8 h-8 mx-auto my-6 mb-4" />
            <h2 className="text-lg font-bold">
              Masjid Muhammad Cheng Hoo Pandaan
            </h2>
            <h3 className=" text-xl">Jalan Raya Kasri No.18 Petung Sari</h3>
            <Button className="mt-4 px-4 py-2 rounded-2xl bg-[var(--color-primary)] text-[var(--color-text-secondary)] font-medium hover:opacity-90">
              Location
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
