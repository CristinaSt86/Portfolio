import React, { useState, useRef } from "react";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa"; // Import icons from react-icons
import css from "./MusicToggle.module.css"; // Import your CSS module
import GoToGithub from "../GoToGithub/GoToGithub";

const MusicToggle = () => {
  const [musicState, setMusicState] = useState("idle"); // Initial state is 'idle'
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (musicState === "playing") {
      fadeOut(); // Call fade-out function to stop music
    } else {
      if (musicState === "idle") {
        audioRef.current.volume = 1.0; // Reset volume for first time play
      }
      audioRef.current.play();
      setMusicState("playing");
    }
  };

  const fadeOut = () => {
    let volume = 1.0;
    const fadeAudio = setInterval(() => {
      if (volume > 0.05) {
        // Fade out gradually
        volume -= 0.05;
        audioRef.current.volume = Math.max(0, volume); // Ensure volume doesn't go below 0
      } else {
        clearInterval(fadeAudio);
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset music to the beginning

        setMusicState("paused"); // Switch to paused state
      }
    }, 100); // Decrease volume every 100ms
  };

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="/music/cozycoffeehouse.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
        <GoToGithub
          onClick={toggleMusic}
          text={
            musicState === "idle" ? (
              <FaMusic /> // Show music icon initially
            ) : musicState === "playing" ? (
              <FaPause /> // Show pause when music is playing
            ) : (
              <FaPlay />
            ) // Show play when music is paused
          }
        />
    </div>
  );
};

export default MusicToggle;
