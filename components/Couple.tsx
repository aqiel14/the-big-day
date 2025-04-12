import { couple } from "@/lib/data";
import Image from "next/image";

export default function Couple() {
  return (
    <section className="py-16 ">
      <div className="text-center text-[var(--color-text-primary)] bg-[var(--color-secondary)] rounded-4xl mx-24 p-4">
        <h2 className="text-4xl font-semibold mb-6">Mempelai</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div>
            <Image
              src={couple.groomImage || "/couple/placeholder-groom.png"}
              alt={couple.groom}
              width={128}
              height={128}
              className="w-64 h-96 object-cover rounded-full mx-auto mb-2"
            />
            <h3 className="text-xl font-semibold">{couple.groomFull}</h3>
            <p className="text-md ">
              Putra dari {couple.groomFather || "Bapak Agus Santoso"} &{" "}
              {couple.groomMother || "Ibu Siti Aminah"}
            </p>
          </div>
          <div>
            <Image
              src={couple.brideImage || "/couple/placeholder-bride.png"}
              alt={couple.bride}
              width={128}
              height={128}
              className="w-64 h-96 object-cover rounded-full mx-auto mb-2"
            />
            <h3 className="text-xl font-semibold">{couple.brideFull}</h3>
            <p className="text-md ">
              Putri dari {couple.brideFather || "Bapak Hadi Pranoto"} &{" "}
              {couple.brideMother || "Ibu Rina Lestari"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
