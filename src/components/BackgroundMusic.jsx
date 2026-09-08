import React, { useEffect, useRef, useState } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

import music from "../assets/music/interstellar_chase_2.mp3";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const hasStarted = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [userStopped, setUserStopped] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.loop = true;

    const aboutSection = document.getElementById("about");

    if (!aboutSection) return;

    const startInterstellar = () => {
      if (userStopped || hasStarted.current) return;

      hasStarted.current = true;

      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    };

    const stopInterstellar = () => {
      audio.pause();
      setIsPlaying(false);
    };

    // Start Interstellar when About is reached
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startInterstellar();
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(aboutSection);

    // Listen for Hero intro starting
    window.addEventListener("hero-intro-started", stopInterstellar);

    return () => {
      observer.disconnect();

      window.removeEventListener("hero-intro-started", stopInterstellar);
    };
  }, [userStopped]);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();

        setIsPlaying(true);
        setUserStopped(false);
        hasStarted.current = true;
      } catch (error) {
        console.error("Music playback failed:", error);
      }
    } else {
      audio.pause();
      setIsPlaying(false);

      setUserStopped(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={music} preload="auto" />

      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Turn music off" : "Turn music on"}
        className="fixed bottom-6 right-6 z-[9999] w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#ff2a2a] hover:scale-110 transition-all duration-300 shadow-[0_0_25px_rgba(0,0,0,0.4)]"
      >
        {isPlaying ? <FiVolume2 size={20} /> : <FiVolumeX size={20} />}
      </button>
    </>
  );
};

export default BackgroundMusic;
