"use client";

import { couple } from "@/lib/data";
import { formatDateToDDMMYYYY } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

export default function Jumbo() {
  const [showSplash, setShowSplash] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 1024;
    setIsMobile(mobile);

    if (mobile) {
      setShowSplash(true);
    }
  }, []);

  const handleDismiss = () => {
    setFadingOut(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 500); // match with transition duration
  };

  if (isMobile && showSplash) {
    return (
      <section
        className={`fixed inset-0 z-50 flex items-center justify-center w-full h-screen bg-[url('/jumbo-bg.jpg')] bg-center bg-cover transition-transform duration-500 ease-in-out ${
          fadingOut ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#4C3009] opacity-80 mix-blend-multiply pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-4 text-center text-[var(--color-text-primary)]">
          <Image
            src="/jumbo.png"
            width={512}
            height={256}
            alt="jumbo"
            className="w-[65%] max-w-[320px] h-auto object-cover rounded-t-full outline-8 outline-[#DBD5C4]"
          />

          <h2 className="text-2xl font-medium">Undangan Pernikahan</h2>
          <h1 className="text-5xl font-bold">{couple.groom}</h1>
          <h1 className="text-5xl font-bold">&</h1>
          <h1 className="text-5xl font-bold">{couple.bride}</h1>
          <h2 className="text-xl font-medium">
            {formatDateToDDMMYYYY("2025-11-11")}
          </h2>

          <Button
            onClick={handleDismiss}
            className="mt-6 px-6 py-3 rounded-full bg-[var(--color-primary)] text-[var(--color-text-secondary)] hover:opacity-90 text-lg font-secondary transition-all duration-300"
          >
            Buka Undangan
          </Button>
        </div>
      </section>
    );
  }

  // Desktop version
  return (
    <div className="hidden lg:block lg:w-2/3 fixed top-0 left-0 h-screen z-40">
      <section className="relative flex items-center justify-center w-full h-full bg-[url('/jumbo-bg.jpg')] bg-center bg-cover">
        <div className="absolute top-0 left-0 w-full h-full bg-[#4C3009] opacity-80 mix-blend-multiply pointer-events-none"></div>
        <div className="relative z-10 flex items-center justify-center w-full max-w-7xl px-6">
          <Image
            src="/jumbo.png"
            width={512}
            height={256}
            alt="jumbo"
            className="w-[50%] h-[65vh] object-cover rounded-t-full mx-6 outline-8 outline-[#DBD5C4]"
          />
          <div className="flex flex-col gap-4 text-[var(--color-text-primary)]">
            <h2 className="text-3xl font-medium">Undangan Pernikahan</h2>
            <h1 className="text-8xl font-bold">{couple.groom}</h1>
            <h1 className="text-8xl font-bold">&</h1>
            <h1 className="text-8xl font-bold">{couple.bride}</h1>
            <h2 className="text-3xl font-medium">
              {formatDateToDDMMYYYY("2025-11-11")}
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
