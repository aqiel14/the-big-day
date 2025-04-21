import { couple, qs } from "@/lib/data";
import { Icon, MapPin } from "lucide-react";
import { Button } from "./ui/Button";

export default function WeddingDetails() {
  return (
    <div className="relative py-12 px-4 flex flex-col items-center bg-[#82581E] min-h-screen">
      <div className="absolute top-0 left-0 inset-0 bg-[url('/bg-3.png')] bg-center bg-cover z-0 opacity-25" />

      <div className="flex flex-col gap-8 z-10 w-[65%] ">
        {/* CONTENT */}
        <div className="flex flex-col outline-4 w-full gap-2 text-center text-[var(--color-text-secondary)] bg-[var(--color-primary)] rounded-2xl p-6 ">
          <h2 className="text-4xl font-bold">Akad Nikah</h2>
          <h3 className="font-semibold text-xl font-secondary">Selasa</h3>
          <h2 className="text-4xl font-bold">11</h2>
          <h3 className="font-semibold text-xl font-secondary">
            November 2025
          </h3>
          <h3 className="font-semibold text-xl font-secondary">
            10.00 - 11.00
          </h3>
        </div>
        <div className="flex flex-col gap-2.5 items-center bg-white/20 backdrop-blur-[2px] text-white text-center  outline-white outline-2 rounded-[8px] p-4">
          <h2 className="text-4xl font-bold">Lokasi Acara</h2>
          <MapPin className="w-8 h-8 mx-auto" />
          <h2 className="text-lg font-bold font-secondary">
            Masjid Muhammad Cheng Hoo Pandaan
          </h2>
          <h3 className=" text-md font-secondary">
            Jalan Raya Kasri No.18 Petung Sari
          </h3>
          <Button className="px-4 py-2 rounded-2xl bg-[var(--color-primary)] text-[var(--color-text-secondary)] font-medium font-secondary hover:opacity-90">
            Location
          </Button>
        </div>
        <div className="flex flex-col outline-4 w-full gap-2 text-center text-[var(--color-text-secondary)] bg-[var(--color-primary)] rounded-2xl p-6 ">
          <h2 className="text-4xl font-bold">Resepsi</h2>
          <h3 className="font-semibold text-xl font-secondary">Selasa</h3>
          <h2 className="text-4xl font-bold">12</h2>
          <h3 className="font-semibold text-xl font-secondary">
            November 2025
          </h3>
          <h3 className="font-semibold text-xl font-secondary">
            10.00 - 11.00
          </h3>
        </div>
        <div className="flex flex-col gap-2.5 items-center bg-white/20 backdrop-blur-[2px] text-white text-center  outline-white outline-2 rounded-[8px] p-4">
          <h2 className="text-4xl font-bold">Lokasi Acara</h2>
          <MapPin className="w-8 h-8 mx-auto" />
          <h2 className="text-lg font-bold font-secondary">
            Graha Sakinah Pandaan
          </h2>
          <h3 className=" text-md font-secondary">
            Jl. Raya Taman Dayu No.88, Karangjati – Pandaan
          </h3>
          <Button className="px-4 py-2 rounded-2xl bg-[var(--color-primary)] text-[var(--color-text-secondary)] font-medium font-secondary hover:opacity-90">
            Location
          </Button>
        </div>
      </div>
    </div>
  );
}
