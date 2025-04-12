import { couple, qs } from "@/lib/data";
import Gunungan from "./ui/Gunungan";

export default function Qs() {
  return (
    <div className="relative py-12 px-4 flex flex-col items-center bg-[var(--color-overlay)] opacity-80 bg-center bg-cover min-h-screen">
      <div className="flex flex-col justify-center items-center gap-8 w-[80%] h-full flex-grow bg-[url]">
        <div className="flex flex-col gap-2 text-center text-3xl font-medium text-[var(--color-text-white)]">
          <Gunungan />
          <h2>{couple.groom}</h2>
          <h2>&</h2>
          <h2>{couple.bride}</h2>
        </div>
        <div className="text-center text-[var(--color-text-secondary)] bg-[var(--color-primary)] rounded-4xl p-8">
          <p>{qs.sabda}</p>
          <p className="font-bold mt-4">{qs.surat}</p>
        </div>
      </div>
    </div>
  );
}
