import { useState } from "react";
import "./css/base.css";
import { tracks } from "./data/tracks";
import type { IMusicTrack } from "./types/IMusicTrack";
import { Player } from "./components/Player";
import { PlayerHeader } from "./components/PlayerHeader";

function App() {
  const testTrack: IMusicTrack = tracks[2];
  const testPlaylistName: string = "Moody";
  return (
    <>
      <PlayerHeader playListName={testPlaylistName} />
      <Player trackData={testTrack} />
    </>
  );
}

export default App;
