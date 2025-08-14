import React, { useState, useRef } from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "../../ThemeContext";
import css from "./MusicToggle.module.css";

const MusicToggle = () => {
  const [musicState, setMusicState] = useState("idle");
  const audioRef = useRef(null);
  const { theme } = useTheme();

  const toggleMusic = () => {
    if (musicState === "playing") {
      fadeOut();
    } else {
      if (musicState === "idle") {
        audioRef.current.volume = 1.0;
      }
      audioRef.current.play();
      setMusicState("playing");
    }
  };

  const fadeOut = () => {
    let volume = 1.0;
    const fadeAudio = setInterval(() => {
      if (volume > 0.05) {
        volume -= 0.05;
        audioRef.current.volume = Math.max(0, volume);
      } else {
        clearInterval(fadeAudio);
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setMusicState("paused");
      }
    }, 100);
  };

  const iconColor = theme === "dark" ? "#fff" : "#333333";

  return (
    <div className={css.musicButton} onClick={toggleMusic}>
      <audio ref={audioRef} loop>
        <source src="/music/cozycoffeehouse.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {musicState === "idle" ? (
        <Icon icon="mdi:music" className={css.musicIcon} style={{ color: iconColor }} />
      ) : musicState === "playing" ? (
        <Icon icon="mdi:pause" className={css.musicIcon} style={{ color: iconColor }} />
      ) : (
        <Icon icon="mdi:play" className={css.musicIcon} style={{ color: iconColor }} />
      )}
    </div>
  );
};

export default MusicToggle;
