import { useState } from "react";
import "./css/base.css";
import { tracks } from "./data/tracks";
import type { IMusicTrack } from "./types/IMusicTrack";
import { Player } from "./components/Player";
import { PlayerHeader } from "./components/PlayerHeader";
import { PlayList } from "./components/PlayList";

function App() {
  const testPlaylistName: string = "Moody";
  let activeTrack: IMusicTrack = tracks[0];

  const [selectedTrackId, setActiveTrack] = useState<string>(tracks[0].id);

  activeTrack =
    tracks[tracks.findIndex((track) => track.id === selectedTrackId)];
  const handleTrackActiveSelect = (id: string) => {
    setActiveTrack(id);
  };

  return (
    <main>
      <PlayerHeader playListName={testPlaylistName} />
      <Player trackData={activeTrack} />
      <PlayList
        tracks={tracks}
        selectedTrackId={activeTrack.id}
        onSelectTrack={handleTrackActiveSelect}
      />
    </main>
  );
}

export default App;
