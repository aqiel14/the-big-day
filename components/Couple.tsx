import { couple } from "@/lib/data";
import Image from "next/image";

export default function Couple() {
    return (
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-6">The Happy Couple</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div>
          <Image src={couple.groomImage || "/couple/placeholder-groom.png"} alt={couple.groom} width={128} height={128} className="w-64 h-96 object-cover rounded-full mx-auto mb-2" />
            <h3 className="text-xl font-semibold">{couple.groomFull}</h3>
            <p className="text-sm text-gray-600">Putra dari {couple.groomFather || "Bapak Agus Santoso"} & {couple.groomMother || "Ibu Siti Aminah"}</p>
          </div>
          <div>
          <Image src={couple.brideImage || "/couple/placeholder-bride.png"} alt={couple.bride} width={128} height={128} className="w-64 h-96 object-cover rounded-full mx-auto mb-2" />
            <h3 className="text-xl font-semibold">{couple.brideFull}</h3>
            <p className="text-sm text-gray-600">Putri dari {couple.brideFather || "Bapak Hadi Pranoto"} & {couple.brideMother || "Ibu Rina Lestari"}</p>
          </div>
        </div>
      </section>
    );
  }
  