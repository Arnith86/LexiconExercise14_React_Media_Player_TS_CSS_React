import { useState } from "react";
import "./css/base.css";
import { tracks } from "./data/tracks";
import type { IMusicTrack } from "./types/IMusicTrack";
import { Player } from "./components/Player";
import { PlayerHeader } from "./components/PlayerHeader";
import { PlayList } from "./components/PlayList";

function App() {
  const testPlaylistName: string = "Moody";

  const [selectedTrackId, setActiveTrack] = useState<string>(tracks[0].id);
  const [activeView, setActiveView] = useState<"playlist" | "player">(
    "playlist"
  );

  let activeTrack: IMusicTrack = tracks[0];

  activeTrack =
    tracks[tracks.findIndex((track) => track.id === selectedTrackId)];

  const handleActiveView = () => {
    const nextView = activeView !== "playlist" ? "playlist" : "player";
    setActiveView(nextView);
  };

  const handleTrackActiveSelect = (id: string) => {
    setActiveTrack(id);
  };

  return (
    <main>
      <PlayerHeader
        playListName={testPlaylistName}
        onClick={handleActiveView}
      />
      <PlayList
        className={activeView === "playlist" ? "active" : ""}
        tracks={tracks}
        selectedTrackId={activeTrack.id}
        onSelectTrack={handleTrackActiveSelect}
      />
      <Player
        trackData={activeTrack}
        className={activeView === "player" ? "active" : ""}
      />
    </main>
  );
}

export default App;
