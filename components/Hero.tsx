import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 text-center text-[var(--color-text-secondary)] min-h-[90vh] flex flex-col">
      <div className="flex flex-col flex-grow justify-center items-center h-full">
        <h1 className="text-4xl font-bold mb-2">Bayu & Tika</h1>
        <p className="text-lg">Together with their families</p>
        <div className="flex flex-col  justify-center items-center ">
          <Image src={"/Hero.png"} width={512} height={256} alt={"Hero"} />
        </div>
      </div>
    </section>
  );
}
