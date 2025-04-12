import { couple, qs } from "@/lib/data";

export default function WeddingDetails() {
  return (
    <div className="flex flex-col items-center bg-[var(--color-overlay)] opacity-100">
      <div className="flex flex-col justify-center items-center bg-[url('/bg-3.png')] w-full h-full flex-grow bg-center bg-cover">
        <div className=" flex justify-center items-center mx-16 gap-32">
          <div className="text-center text-[var(--color-text-secondary)] bg-[var(--color-primary)] rounded-4xl p-8">
            <p className="font-bold mt-4">{qs.surat}</p>
          </div>
          <div className="text-center text-[var(--color-text-secondary)] bg-[var(--color-primary)] rounded-4xl p-8">
            <p className="font-bold mt-4">{qs.surat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
