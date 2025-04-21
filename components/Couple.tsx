import { couple } from "@/lib/data";
import Image from "next/image";
import { Button } from "./ui/Button";

export default function Couple() {
  return (
    <div className="relative py-16 px-8 text-center">
      {/* Overlay that dims the background */}
      <div className="absolute inset-0 bg-[#DBD5C4]/65 z-0"></div>

      {/* Main content - lifted above the overlay */}
      <div className="relative z-10 flex flex-col text-center bg-[url('/jumbo-bg.jpg')] bg-center bg-cover rounded-4xl p-8 outline-[var(--color-primary)] outline-4 shadow-xl overflow-hidden">
        {/* Secondary overlay inside the main card */}
        <div className="absolute inset-0 bg-[var(--color-secondary)] rounded-4xl z-0"></div>

        {/* All your content should go here */}
        <div className="relative z-10 flex flex-col text-white">
          <h2 className="text-4xl font-semibold">Groom</h2>
          <h2 className="text-4xl font-semibold">&</h2>
          <h2 className="text-4xl font-semibold">Bride</h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
            <div className="flex flex-col gap-4">
              <Image
                src={couple.groomImage || "/couple/placeholder-groom.png"}
                alt={couple.groom}
                width={128}
                height={128}
                className="w-64 h-96 object-cover rounded-full mx-auto mb-2 outline-white outline-1 shadow-2xl"
              />

              <div className="flex flex-col outline-4 w-full text-center text-[var(--color-text-secondary)] bg-[var(--color-primary)] rounded-2xl p-4">
                <h3 className="text-xl font-bold">{couple.groomFull}</h3>
                <p className="text-md">
                  Putra dari {couple.groomFather || "Bapak Agus Santoso"}
                </p>
                <p className="text-md">&</p>
                <p className="text-md">
                  {couple.groomMother || "Ibu Siti Aminah"}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Image
                src={couple.brideImage || "/couple/placeholder-bride.png"}
                alt={couple.bride}
                width={128}
                height={128}
                className="w-64 h-96 object-cover rounded-full mx-auto mb-2 outline-white outline-1"
              />

              <div className="flex flex-col outline-4 w-full text-center text-[var(--color-text-secondary)] bg-[var(--color-primary)] rounded-2xl p-4">
                <h3 className="text-xl font-bold">{couple.brideFull}</h3>
                <p className="text-md">
                  Putra dari {couple.brideFather || "Bapak Agus Santoso"}
                </p>
                <p className="text-md">&</p>
                <p className="text-md">
                  {couple.brideMother || "Ibu Siti Aminah"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
