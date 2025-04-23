"use client";

import { useEffect, useState } from "react";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/Button";
import { Label } from "./ui/label";
import { spreadsheetUrl } from "@/lib/data";

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
    const res = await fetch(spreadsheetUrl);
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
      await fetch(spreadsheetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // TEMP workaround
        body: JSON.stringify({ name, message }),
      });

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
          <svg
            width="215"
            height="89"
            viewBox="0 0 215 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M105.385 1.125C104.752 1.61497 104.278 3.57485 104.278 5.20808C104.278 7.16797 103.17 8.14791 100.321 8.14791C97.473 8.14791 96.6817 7.49462 97.473 5.53473C98.106 3.57485 97.7895 3.08488 96.207 3.57485C94.941 3.9015 93.8332 5.86138 93.5167 7.65794C92.7255 13.0476 78.1666 27.7467 73.7356 27.7467C71.6783 27.7467 60.4426 29.5433 48.8904 31.8298C15.0251 38.3628 4.8971 37.0562 6.47959 25.7869C7.27084 20.7238 6.47959 20.2339 2.36511 23.337C0.307868 24.9702 -0.32513 27.2568 0.149618 32.6465C0.466117 38.5261 1.41561 40.3227 4.5806 41.9559C7.58734 43.5891 31.1665 44.0791 107.917 44.0791H207.298L211.096 39.996C215.844 35.2596 216.318 27.7467 212.204 23.9903C207.931 20.0705 206.823 20.5605 207.931 25.9502C210.147 36.7295 198.12 38.3628 165.204 31.8298C153.81 29.5433 142.732 27.7467 140.359 27.7467C134.662 27.7467 120.103 12.5576 120.103 6.51468C119.944 2.75823 119.786 2.59491 117.887 5.20808C116.779 6.84132 114.247 8.14791 112.348 8.14791C109.816 8.14791 109.025 7.16797 109.025 4.06482C109.025 0.145054 107.443 -1.16153 105.385 1.125Z"
              fill="#DBD5C4"
            />
            <path
              d="M35.9144 56.3287C36.2309 62.045 36.0726 69.3945 35.5979 72.661L34.4901 78.3773H21.9884C11.8605 78.3773 9.32848 78.8673 9.32848 80.8272C9.32848 82.2971 7.90424 83.277 5.37225 83.277C2.84026 83.277 1.41602 84.257 1.41602 85.7269C1.41602 87.8501 14.2342 88.1768 107.443 88.1768C200.652 88.1768 213.47 87.8501 213.47 85.7269C213.47 84.257 212.046 83.277 209.514 83.277C206.982 83.277 205.558 82.2971 205.558 80.8272C205.558 78.8673 203.026 78.3773 192.898 78.3773H180.396L179.447 72.8243C178.814 69.7212 178.655 62.3716 178.972 56.492L179.447 45.7126H174.699H169.952L170.426 56.492C170.743 62.3716 170.585 69.7212 169.952 72.8243L169.002 78.3773H106.652H44.3016L43.1939 72.661C42.7191 69.3945 42.5609 62.045 42.8774 56.3287C43.5103 45.8759 43.5103 45.7126 39.3959 45.7126C35.2814 45.7126 35.2814 45.8759 35.9144 56.3287Z"
              fill="#DBD5C4"
            />
          </svg>
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
              className="bg-white rounded-[14px]"
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
              className="bg-white h-20 rounded-[14px]"
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-[var(--color-secondary)] text-white font-semibold rounded-[14px]"
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
