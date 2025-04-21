"use client";
import { amplopDetails } from "@/lib/data";
import { Button } from "./ui/Button";
import Image from "next/image";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Amplop() {
  const [showAmplop, setShowAmplop] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<boolean | null>(true);
  const [guestCount, setGuestCount] = useState<number | null>(1);
  const isFormComplete =
    name.trim() !== "" && attending !== null && guestCount !== null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Example: send to API or Google Sheet
      console.log({ name, attending, guestCount });

      setSubmitted(true);
      setName("");
      setAttending(null);
      setGuestCount(null);
    } catch (err) {
      console.error("Error submitting RSVP", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative py-16 px-8  text-center ">
      {/* Overlay that dims the background */}
      <div className="absolute inset-0 bg-[#DBD5C4]/65 z-0"></div>
      {/* Main content - lifted above the overlay */}
      <div className="relative z-10 flex flex-col gap-4 text-center text-[var(--color-text-primary)] bg-[url('/jumbo-bg.jpg')] bg-center bg-cover  rounded-4xl p-8 outline-[var(--color-primary)] outline-4 shadow-xl">
        <div className="inset-0 absolute bg-[var(--color-secondary)] rounded-4xl"></div>
        {/* Kirim Amplop Box */}
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-[2px]  outline-white outline-2 rounded-[8px] p-2">
          <h2 className="text-2xl font-bold mb-6">Kirim Amplop</h2>
          <Button
            onClick={() => setShowAmplop(!showAmplop)}
            className="px-4 py-2 rounded-4xl bg-[var(--color-primary)] text-[var(--color-text-secondary)] hover:opacity-90 h-9 w-32 text-lg font-semibold font-secondary"
          >
            Click Here
          </Button>
          {showAmplop && (
            <div className="w-full flex flex-col bg-[var(--color-primary)] gap-2 rounded-4xl mt-4 text-[var(--color-text-secondary)] p-4 shadow-2xl">
              {amplopDetails.map((ad) => (
                <div className="w-full flex flex-col text-center items-center justify-center p-2 outline-2 shadow-xl rounded-2xl max-h-40 ">
                  <Image
                    src={ad.bankImage}
                    width={64}
                    height={64}
                    alt={ad.bankName}
                    className="my-2"
                  />
                  <h2>{ad.bankName}</h2>
                  <p>{ad.accountNumber}</p>
                  <p>{ad.onBehalfOf}</p>
                  <Button className="bg-[var(--color-secondary)] text-white rounded-4xl font-secondary h-8">
                    Salin
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RSVP Box */}
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-[2px]  outline-white outline-2 rounded-[8px] p-8 gap-8">
          <h2 className="text-2xl font-semibold mb-6">Reservasi Tamu</h2>
          <Image src={"/qr.png"} width={130} height={130} alt="qr" />
          <Dialog>
            <DialogTrigger asChild>
              <Button className="px-4 py-2 rounded-4xl bg-[var(--color-primary)] text-[var(--color-text-secondary)] hover:opacity-90 h-9 w-32 text-lg font-semibold font-secondary">
                Send
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] bg-[var(--color-primary)] text-[var(--color-text-secondary)] rounded-2xl font-secondary">
              <DialogHeader>
                <DialogTitle>Reservasi Kehadiran</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className=" flex flex-col gap-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-bold font-secondary "
                >
                  Nama
                </Label>
                <Input
                  placeholder="Nama.."
                  required
                  className="bg-white rounded-2xl placeholder:text-gray-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Label htmlFor="name" className="text-sm font-bold">
                  Kehadiran
                </Label>
                <Select
                  value={attending === null ? "" : attending.toString()}
                  onValueChange={(val) => setAttending(val === "true")}
                >
                  <SelectTrigger className="w-full bg-white rounded-2xl ">
                    <SelectValue
                      placeholder="Hadir"
                      defaultValue={"true"}
                      className="text-gray-500"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="true">Hadir</SelectItem>
                    <SelectItem value="false">Tidak Hadir</SelectItem>
                  </SelectContent>
                </Select>
                <Label htmlFor="name" className="text-sm font-bold">
                  Rencana Hadir dengan siapa?
                </Label>
                <Select
                  value={guestCount?.toString() ?? ""}
                  onValueChange={(val) => setGuestCount(parseInt(val))}
                >
                  <SelectTrigger className="w-full bg-white rounded-2xl">
                    <SelectValue
                      placeholder="Datang Sendirian / Berdua / dst"
                      defaultValue={1}
                      className=" bg-white rounded-2xl placeholder:text-gray-500 placeholder:italic"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value={"1"}>Datang Sendirian</SelectItem>
                    <SelectItem value={"2"}>Datang Berdua</SelectItem>
                    <SelectItem value={"3"}>
                      Datang Lebih dari 2 orang
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  type="submit"
                  disabled={loading || !isFormComplete}
                  className={`bg-[var(--color-secondary)] text-white font-semibold font-secondary rounded-2xl mt-4 transition-opacity ${
                    !isFormComplete || loading
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {loading ? "Mengirim..." : "Kirim RSVP"}
                </Button>
                {submitted && (
                  <p className="text-sm text-white">
                    Terima kasih atas kehadiran!
                  </p>
                )}
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
