import Image from "next/image";

export default function Gunungan() {
  return (
    <div className="w-64 h-64 flex items-center justify-center">
      <Image src={"/gunungan.png"} height={128} width={128} alt="gunungan" />
    </div>
  );
}
