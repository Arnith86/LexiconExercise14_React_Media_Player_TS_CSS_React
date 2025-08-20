import { useState } from "react";
import "./css/base.css";
import { tracks } from "./data/tracks";
import type { IMusicTrack } from "./types/IMusicTrack";
import { Player } from "./components/Player";
import { PlayerHeader } from "./components/PlayerHeader";
import { PlayList } from "./components/PlayList";

function App() {
  const defaultTrack: IMusicTrack = tracks[0];
  const testPlaylistName: string = "Moody";
  return (
    <main>
      <PlayerHeader playListName={testPlaylistName} />
      <Player trackData={defaultTrack} />
      {/* <PlayList tracks={tracks} selectedTrackId={defaultTrack.id} /> */}
    </main>
  );
}

export default App;
