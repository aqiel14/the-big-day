"use client";

import { useEffect, useRef, useState } from "react";
import { PauseCircle, PlayCircle } from "lucide-react";

export default function MusicBox() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio.muted = false; // Ensure the audio is not muted
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay prevented:", err);
        });
      }
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />

      <button
        onClick={toggleMusic}
        aria-label="Toggle music"
        className={`fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-md transition-all duration-300 
          ${
            isPlaying
              ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]"
              : "bg-gray-300 text-gray-600 hover:bg-gray-400"
          }
          ${isPlaying ? "animate-spin" : ""}
        `}
      >
        {isPlaying ? (
          <PauseCircle className="w-7 h-7" />
        ) : (
          <PlayCircle className="w-7 h-7" />
        )}
      </button>
    </>
  );
}
