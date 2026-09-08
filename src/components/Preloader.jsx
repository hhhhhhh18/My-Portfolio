import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Preloader.css";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMelting, setIsMelting] = useState(false);
  const [showGuys, setShowGuys] = useState(false);

  useEffect(() => {
    // Keep Hello WORLD !! visible for 2.5 seconds
    const meltTimer = setTimeout(() => {
      setIsMelting(true);
    }, 2000);

    // Show GUYS only after WORLD has disappeared
    const guysTimer = setTimeout(() => {
      setShowGuys(true);
    }, 3400);

    // Finish preloader
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(meltTimer);
      clearTimeout(guysTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.25,
              ease: "easeOut",
            },
          }}
        >
          {/* =========================================
              MAIN TEXT
          ========================================= */}

          <div className="preloader-text">
            {/* HELLO */}
            <span className="hello-word">Hello</span>

            {/* =========================================
                WORD AREA
            ========================================= */}

            <span className="word-stage">
              <AnimatePresence mode="wait">
                {!showGuys ? (
                  <motion.span
                    key="world"
                    className="world-word"
                    initial={{
                      opacity: 1,
                      y: 0,
                      scaleY: 1,
                    }}
                    animate={
                      isMelting
                        ? {
                            opacity: 0,
                            y: 45,
                            scaleY: 0.1,
                            filter: "blur(5px)",
                          }
                        : {
                            opacity: 1,
                            y: 0,
                            scaleY: 1,
                            filter: "blur(0px)",
                          }
                    }
                    transition={{
                      duration: 0.75,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  >
                    WORLD
                  </motion.span>
                ) : (
                  <motion.span
                    key="guys"
                    className="guys-word"
                    initial={{
                      opacity: 0,
                      y: 25,
                      scaleY: 0.2,
                      filter: "blur(7px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scaleY: 1,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    GUYS
                  </motion.span>
                )}
              </AnimatePresence>

              {/* =========================================
                  RED LIQUID
              ========================================= */}

              <AnimatePresence>
                {isMelting && !showGuys && (
                  <div className="paint-container">
                    {/* Paint streams */}

                    <motion.div
                      className="paint-stream stream-one"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: [0, 18, 50],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 0.75,
                        ease: "easeIn",
                      }}
                    />

                    <motion.div
                      className="paint-stream stream-two"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: [0, 15, 42],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.08,
                        ease: "easeIn",
                      }}
                    />

                    <motion.div
                      className="paint-stream stream-three"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: [0, 20, 55],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.12,
                        ease: "easeIn",
                      }}
                    />

                    {/* Drops */}

                    <motion.span
                      className="paint-drop drop-one"
                      initial={{
                        opacity: 0,
                        y: 0,
                        scale: 0.4,
                      }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        y: [0, 25, 65, 95],
                        scale: [0.4, 1, 0.8, 0.2],
                      }}
                      transition={{
                        duration: 0.9,
                        ease: "easeIn",
                      }}
                    />

                    <motion.span
                      className="paint-drop drop-two"
                      initial={{
                        opacity: 0,
                        y: 0,
                        scale: 0.4,
                      }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        y: [0, 30, 75, 105],
                        scale: [0.4, 1, 0.75, 0.2],
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.05,
                        ease: "easeIn",
                      }}
                    />

                    <motion.span
                      className="paint-drop drop-three"
                      initial={{
                        opacity: 0,
                        y: 0,
                        scale: 0.4,
                      }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        y: [0, 20, 55, 85],
                        scale: [0.4, 1, 0.7, 0.2],
                      }}
                      transition={{
                        duration: 0.85,
                        delay: 0.12,
                        ease: "easeIn",
                      }}
                    />

                    {/* Paint pool */}

                    <motion.div
                      className="paint-pool"
                      initial={{
                        opacity: 0,
                        scaleX: 0.2,
                      }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        scaleX: [0.2, 1, 1.15, 0.5],
                      }}
                      transition={{
                        duration: 0.9,
                        delay: 0.12,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                )}
              </AnimatePresence>
            </span>

            {/* =========================================
                EXCLAMATION
            ========================================= */}

            <span className="exclamation">!!</span>
          </div>

          {/* =========================================
              TOP CURTAIN
          ========================================= */}

          <motion.div
            className="curtain curtain-top"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{
              duration: 0.7,
              delay: 4.25,
              ease: [0.76, 0, 0.24, 1],
            }}
          />

          {/* =========================================
              BOTTOM CURTAIN
          ========================================= */}

          <motion.div
            className="curtain curtain-bottom"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{
              duration: 0.7,
              delay: 4.25,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
