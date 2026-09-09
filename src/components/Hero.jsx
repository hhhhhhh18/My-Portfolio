import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import heroVideo from "../assets/hero video/Developer_intro.mp4";

const Hero = () => {
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  // Prevent automatic intro from playing again when returning to Home
  const hasAutoPlayed = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  /*
   * HERO VISIBILITY
   *
   * Automatically plays the intro only once when the
   * portfolio is opened and Home is visible.
   *
   * If the user leaves Home, the intro immediately stops.
   */
  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;

    if (!hero || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // User left Home.
          // Stop intro video + audio immediately.
          video.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(hero);

    // Start intro ONLY after the preloader has completely finished
    const handlePreloaderFinished = () => {
      if (hasAutoPlayed.current) return;

      // Make sure Home is currently visible
      const rect = hero.getBoundingClientRect();

      const isVisible =
        rect.top < window.innerHeight * 0.5 &&
        rect.bottom > window.innerHeight * 0.5;

      if (!isVisible) return;

      hasAutoPlayed.current = true;

      video.currentTime = 0;

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);

            // Stop background music if it is playing
            window.dispatchEvent(new Event("hero-intro-started"));
          })
          .catch(() => {
            // Browser blocked autoplay.
            // User can use Watch Intro manually.
            setIsPlaying(false);
          });
      }
    };

    window.addEventListener("preloader-finished", handlePreloaderFinished);

    return () => {
      observer.disconnect();

      window.removeEventListener("preloader-finished", handlePreloaderFinished);
    };
  }, []);

  /*
   * VIDEO EVENTS
   *
   * Keeps the Play/Pause button synchronized
   * with the actual video state.
   */
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  /*
   * MANUAL INTRO CONTROL
   *
   * When the user clicks Watch Intro:
   *
   * 1. Stop Interstellar music.
   * 2. Replay intro from beginning if it has ended.
   * 3. Play/pause the intro normally.
   */
  const toggleVideo = async (e) => {
    e.stopPropagation();

    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      // If intro has finished, restart it
      if (video.ended) {
        video.currentTime = 0;
      }

      // Tell BackgroundMusic.jsx to stop Interstellar
      window.dispatchEvent(new Event("hero-intro-started"));

      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Video playback failed:", error);
        setIsPlaying(false);
      }
    } else {
      // Pause intro manually
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Background Introduction Video */}
      <video
        ref={videoRef}
        playsInline
        preload="auto"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/25 z-10"></div>

      {/* Main Content */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        {/* Left Side */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          {/* Name */}
          <h1
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Hi, I'm <span className="text-white">Hamad Shaik</span>
            <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_white]">
              Full Stack & AI Developer
            </span>
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-xl drop-shadow-md"
          >
            I build full-stack applications and AI solutions that turn
            real-world problems into practical products.
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            {/* View My Work */}
            <a
              href="#projects"
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              View My Work
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Video Play Button */}
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto"
          onClick={toggleVideo}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
            {!isPlaying ? (
              /* Play Icon */
              <svg
                className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              /* Pause Icon */
              <svg
                className="w-5 h-5 md:w-8 md:h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>

          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            {isPlaying ? "Pause" : "Watch Intro"}
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
