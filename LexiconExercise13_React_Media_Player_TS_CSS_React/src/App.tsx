import { useState } from "react";
import "./css/base.css";
import { MediaActionButtons } from "./components/MediaActionButtons";
import { TrackBar } from "./components/TrackBar";
import { NowPlaying } from "./components/NowPlaying";
import { TrackCover } from "./components/TrackCover";

import { tracks } from "./data/tracks";
import type { IMusicTrack } from "./types/IMusicTrack";
import { PlayerHeader } from "./components/PlayerHeader";

function App() {
  const testCover: IMusicTrack = tracks[2];
  const testPlaylistName: string = "Moody";
  return (
    <>
      <PlayerHeader playListName={testPlaylistName} />
      <TrackCover
        imageSrc={testCover.cover}
        altText={`${testCover.title} cover`}
      />
      <NowPlaying artist="Like we used to" trackTitle="A Rocket to the moon" />
      <TrackBar trackLength={260} />
      <MediaActionButtons />

      {/** i dont understand this part at all yet, but i wanted it included :) */}
      <div
        className="blurred-background-image"
        style={{ "--cover-url": `url(${testCover.cover})` } as any}
      >
        <div className="cover-background" />
      </div>
    </>
  );
}

export default App;
