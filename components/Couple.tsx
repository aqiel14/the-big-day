import { couple } from "@/lib/data";
import Image from "next/image";

export default function Couple() {
  return (
    <section className="py-16 ">
      <div className="text-center text-[var(--color-text-primary)] bg-[var(--color-secondary)] rounded-4xl mx-8 p-8 outline-[var(--color-primary)] outline-4 shadow-xl">
        <h2 className="text-4xl font-semibold mb-6">Mempelai</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
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
              <p className="text-md ">
                Putra dari {couple.groomFather || "Bapak Agus Santoso"}
              </p>
              <p className="text-md ">&</p>
              <p className="text-md ">
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
              <p className="text-md ">
                Putra dari {couple.brideFather || "Bapak Agus Santoso"}
              </p>
              <p className="text-md ">&</p>
              <p className="text-md ">
                {couple.brideMother || "Ibu Siti Aminah"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
