import { couple, qs } from "@/lib/data";
import Gunungan from "./ui/Gunungan";

export default function Qs() {
  return (
    <div className="relative py-12 px-4 flex flex-col items-center bg-[#82581E] min-h-screen">
      <div className="absolute top-0 left-0 inset-0 bg-[url('/bg-3.png')] bg-center bg-cover z-0 opacity-25" />
      <div className="z-10 flex flex-col justify-center items-center gap-8 w-[80%] h-full flex-grow bg-[url]">
        <div className="flex flex-col gap-2 text-center text-5xl font-bold text-[var(--color-text-white)]">
          <Gunungan />
          <h2>{couple.groom}</h2>
          <h2>&</h2>
          <h2>{couple.bride}</h2>
        </div>
        <div className="text-center text-[var(--color-text-secondary)] bg-[var(--color-primary)] rounded-4xl p-8 font-normal text-lg font-primary">
          <p>{qs.sabda}</p>
          <p className="font-bold mt-4">{qs.surat}</p>
        </div>
      </div>
    </div>
  );
}
