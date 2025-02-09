'use client';
import { useRef, useState } from "react";
import Player from "./Player";
import Song from "./Song";
import Library from "./Library";
import "./app.scss";

function AudioPlayer({ data }) {
  const [songs, setSongs] = useState(data.tracks);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculating percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };

  const songEndHandler = () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    // if (isPlaying) await audioRef.current.play(); # Not needed, handled in player
  };
  return (
    <div className="album-player">
      <div className="upper-container">
        <Song cover={data.cover} currentSong={currentSong} />
        <Library
          setSongs={setSongs}
          isPlaying={isPlaying}
          audioRef={audioRef}
          songs={songs}
          setCurrentSong={setCurrentSong}
          />
      </div>
        <Player
          id={songs.id}
          songs={songs}
          songInfo={songInfo}
          setSongInfo={setSongInfo}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
        />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        src={currentSong.audio}
        ref={audioRef}
        onEnded={songEndHandler}
        preload="none"
        autoPlay={isPlaying}
      ></audio>
    </div>
  );
}

export default AudioPlayer;
