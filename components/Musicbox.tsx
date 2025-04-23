"use client";

import { useEffect, useRef, useState } from "react";
import { PauseCircle, PlayCircle } from "lucide-react";

export default function MusicBox() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    const handlePlayMusic = () => {
      if (!audio) return;

      audio.volume = 0.5;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn("Play blocked:", err));
    };

    window.addEventListener("play-music", handlePlayMusic);

    return () => {
      window.removeEventListener("play-music", handlePlayMusic);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.5;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn("Manual play failed:", err));
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />
      <button
        onClick={toggleMusic}
        aria-label="Toggle music"
        className={`fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-md transition-all duration-300
          ${
            isPlaying
              ? "bg-[var(--color-primary)] text-white animate-spin"
              : "bg-gray-300 text-gray-600"
          }
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
