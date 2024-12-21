import React, { useEffect, useRef, useState } from "react";
import "./Dino.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Game() {
  const dinoRef = useRef(null);
  const cactusRef = useRef(null);
  const gameRef = useRef(null);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images on component mount
  useEffect(() => {
    const dinoImage = new Image();
    dinoImage.onload = () => {
      const cactusImage = new Image();
      cactusImage.onload = () => {
        setImagesLoaded(true);
      };
      cactusImage.src = require('./img/obstacle.png');
    };
    dinoImage.src = require('./img/tiger.gif');
  }, []);

  // Improved jump function
  const jump = () => {
    if (dinoRef.current && !dinoRef.current.classList.contains("jump")) {
      dinoRef.current.classList.add("jump");
      setTimeout(() => {
        dinoRef.current?.classList.remove("jump");
      }, 600);
    }
  };

  // More precise collision detection with responsive considerations
  useEffect(() => {
    let gameInterval;
    if (isPlaying && imagesLoaded) {
      gameInterval = setInterval(() => {
        if (!dinoRef.current || !cactusRef.current) return;

        const dinoRect = dinoRef.current.getBoundingClientRect();
        const cactusRect = cactusRef.current.getBoundingClientRect();

        // Percentage-based hitbox adjustment
        const dinoHitbox = {
          left: dinoRect.left + dinoRect.width * 0.2,
          right: dinoRect.right - dinoRect.width * 0.2,
          top: dinoRect.top + dinoRect.height * 0.2,
          bottom: dinoRect.bottom - dinoRect.height * 0.1,
        };

        const cactusHitbox = {
          left: cactusRect.left + cactusRect.width * 0.2,
          right: cactusRect.right - cactusRect.width * 0.2,
          top: cactusRect.top + cactusRect.height * 0.2,
          bottom: cactusRect.bottom - cactusRect.height * 0.1,
        };

        // More precise collision check using percentages
        const isColliding =
          dinoHitbox.right > cactusHitbox.left &&
          dinoHitbox.left < cactusHitbox.right &&
          dinoHitbox.bottom > cactusHitbox.top &&
          dinoHitbox.top < cactusHitbox.bottom;

        if (isColliding) {
          setIsPlaying(false);
          setGameOver(true);

          // Restart the game after 3 seconds
          setTimeout(() => {
            setScore(0);
            setGameOver(false);
          }, 2500);
        } else {
          setScore((prevScore) => prevScore + 1);
        }
      }, 10);
    }
    return () => clearInterval(gameInterval);
  }, [isPlaying, imagesLoaded]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isPlaying && (event.key === " " || event.key === "ArrowUp")) {
        jump();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlaying]);

  // Handle game click (mobile/touch support)
  const handleGameClick = (event) => {
    // Prevent jump if clicking on a button or link
    if (event.target.tagName === "BUTTON" || event.target.tagName === "A") {
      return;
    }

    // Only allow jump if game is playing
    if (isPlaying && !gameOver) {
      jump();
    }
  };

  // Reset the game refs safely during restarts
  useEffect(() => {
    if (!isPlaying) {
      if (dinoRef.current) dinoRef.current.classList.remove("jump");
    }
  }, [isPlaying]);

  useEffect(() => {
    if (gameOver) {
      const tl = gsap.timeline();
      tl.from("#gameOver", {
        scale: 0,
        duration: 1,
        ease: "power2.out",
      }).to("#gameOver", {
        scale: 1,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [gameOver]);

  return (
    <div className="section-full p-t110 p-b80 sx-bg-white sx-about-bx1-outer">
      <div ref={gameRef} className="game" onClick={handleGameClick}>
        {isPlaying && imagesLoaded && (
          <>
            {/* Dino character */}
            <div ref={dinoRef} className="dino" />

            {/* Cactus obstacle */}
            <div ref={cactusRef} className="cactus" />
          </>
        )}

        {/* Game UI */}
        {(!isPlaying || !imagesLoaded) && !gameOver && (
          <div className="game-overlay">
            <h2>Click to Start</h2>
            <p>Do mouse click or tap to Jump</p>
            <button
              className="site-button sx-btn-primary icon"
              onClick={(e) => {
                if (imagesLoaded) {
                  setTimeout(() => {
                    e.stopPropagation();
                    setIsPlaying(true);
                    setScore(0);
                  }, 1000);
                }
              }}
              disabled={!imagesLoaded}
            >
              {imagesLoaded ? "Start Game" : "Loading..."}
            </button>
          </div>
        )}

        {gameOver && (
          <div id="gameOver" className="game-overlay">
            <h2>Game Over</h2>
            <p>Your Score: {score}</p>
          </div>
        )}

        {isPlaying && imagesLoaded && !gameOver && <div className="score">Score: {score}</div>}
      </div>
    </div>
  );
}

export default Game;