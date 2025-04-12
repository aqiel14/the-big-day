import { couple } from "@/lib/data";
import { formatDateToDDMMYYYY } from "@/lib/utils";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center w-full min-h-screen bg-[url('/hero-bg.jpg')] bg-center bg-cover h-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[#4C3009] opacity-80 mix-blend-multiply pointer-events-none"></div>
      <div className="relative z-10 flex items-center justify-center w-full max-w-7xl px-6">
        <Image
          src={"/hero.png"}
          width={512}
          height={256}
          alt={"hero"}
          className="w-[50%] h-[65vh] object-cover rounded-t-full mx-6 outline-8 outline-[#DBD5C4]"
        />

        <div className="flex flex-col gap-4 text-[var(--color-text-primary)]">
          <h2 className="text-3xl font-medium  ">Undangan Pernikahan</h2>
          <h1 className="text-8xl font-bold">{couple.groom}</h1>
          <h1 className="text-8xl font-bold">&</h1>
          <h1 className="text-8xl font-bold">{couple.bride}</h1>
          <h2 className="text-3xl font-medium ">
            {formatDateToDDMMYYYY("2025-11-11")}
          </h2>
        </div>
      </div>
    </section>
  );
}
