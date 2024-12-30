import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt={currentSong.name} />
      <div className="song-text-container">
        <h2 className="song-text">Release</h2>
        <h3 className="song-text">{currentSong.name}</h3>
        <h4 className="song-text">{currentSong.artist}</h4>
      </div>
    </div>
  );
};

export default Song;
