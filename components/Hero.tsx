import { couple } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 text-center text-[var(--color-text-secondary)] min-h-[100vh] flex flex-col bg-[#DBD5C4]/65">
      <div className="flex flex-col flex-grow justify-center items-center h-full gap-8 mx-8">
        <div>
          <h1 className="text-5xl font-bold mb-2">
            {couple.groom} & {couple.bride}
          </h1>
          <p className="text-2xl font-bold">Together with their families</p>
        </div>
        <div className="flex flex-col  justify-center items-center ">
          <Image
            src={"/Jumbo.png"}
            width={512}
            height={256}
            alt={"Jumbo"}
            className="rounded-2xl border-4 border-[#4C3009]"
          />
        </div>
      </div>
    </section>
  );
}
