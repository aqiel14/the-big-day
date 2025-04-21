"use client";

import { useEffect, useState } from "react";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/Button";
import { Label } from "./ui/label";

type Message = {
  name: string;
  message: string;
  timestamp?: string;
};

export default function MessageBox() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchMessages = async () => {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbzYF4XBnpNEM3G05KzRw_IxVJisE_owUge3Zig4RdsqVgOBlocYn6KJEXPciD6ccex8Pg/exec"
    );
    const data = await res.json();
    setMessages(data.reverse()); // newest first
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzYF4XBnpNEM3G05KzRw_IxVJisE_owUge3Zig4RdsqVgOBlocYn6KJEXPciD6ccex8Pg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors", // TEMP workaround
          body: JSON.stringify({ name, message }),
        }
      );

      setSubmitted(true);
      setName("");
      setMessage("");
      fetchMessages();
    } catch (err) {
      console.error("Failed to send message", err);
    } finally {
      setLoading(false);
    }
  };

  const a = (
    <div className="relative py-12 px-4 flex flex-col items-center bg-[#82581E] min-h-screen">
      <div className="absolute top-0 left-0 inset-0 bg-[url('/bg-3.png')] bg-center bg-cover z-0 opacity-25" />
      <div className="z-10 flex flex-col justify-center items-center gap-8 w-[80%] h-full flex-grow bg-[url]"></div>
    </div>
  );

  return (
    <div className="relative py-12 px-4 flex flex-col items-center bg-[#82581E] ">
      <div className="absolute top-0 left-0 inset-0 bg-[url('/bg-3.png')] bg-center bg-cover z-0 opacity-25" />
      <div className="z-10 flex flex-col justify-center items-center gap-8">
        <div className=" flex flex-col gap-6 items-center justify-center">
          <p>💌</p>
          <h2 className="text-xl font-bold text-center text-white">
            UCAPAN & DO'A
          </h2>
        </div>
        <div className="w-full flex flex-col text-[var(--color-text-secondary)] bg-[var(--color-primary)] rounded-2xl p-4">
          <form onSubmit={handleSubmit} className=" flex flex-col gap-2">
            <Label htmlFor="name" className="text-sm font-bold">
              Nama
            </Label>
            <Input
              placeholder="Nama Kamu..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white rounded-lg"
            />
            <Label htmlFor="name" className="text-sm font-bold">
              Ucapan
            </Label>
            <Textarea
              placeholder="Ucapan & Doa"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
              className="bg-white h-20"
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-[var(--color-secondary)] text-white font-semibold"
            >
              {loading ? "Mengirim..." : "Kirim Ucapan"}
            </Button>
            {submitted && (
              <p className="text-sm text-white">Terima kasih atas ucapannya!</p>
            )}
          </form>
        </div>

        <div className="w-full max-h-80 overflow-y-auto flex flex-col text-[var(--color-text-secondary)] bg-[var(--color-primary)] rounded-2xl p-4">
          {messages.map((msg, index) => (
            <div key={index} className="">
              <p className="font-bold text-sm">{msg.name}</p>
              <p className="font-light text-sm">{msg.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
