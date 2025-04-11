import Image from "next/image";

export default function Jumbo() {
    return (
      <section className="py-20 bg-pink-50 text-center">
        <h1 className="text-4xl font-bold mb-2">Bayu & Tika</h1>
        <p className="text-lg">Together with their families</p>
        <div className="flex flex-col  justify-center items-center ">
        <Image src={"/jumbo.png"} width={512} height={256} alt={"jumbo"}/>
        </div>
      
      </section>
    );
  }