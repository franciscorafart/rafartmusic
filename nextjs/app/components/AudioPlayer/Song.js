import React from "react";

const Song = ({ cover, currentSong }) => {
  return (
    <div className="song-container">
      <img src={cover} alt={currentSong.name} />
      <div className="song-text-container">
        <h2 className="song-text">{currentSong.name}</h2>
        <h3 className="song-text">{currentSong.artist}</h3>
      </div>
    </div>
  );
};

export default Song;
