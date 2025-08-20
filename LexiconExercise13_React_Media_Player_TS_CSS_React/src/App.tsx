import { useState } from "react";
import "./css/base.css";
import { MediaActionButtons } from "./components/MediaActionButtons";
import { TrackBar } from "./components/TrackBar";
import { NowPlaying } from "./components/NowPlaying";
import { TrackCover } from "./components/TrackCover";

import { tracks } from "./data/tracks";
import type { IMusicTrack } from "./types/IMusicTrack";
import { PlayerHeader } from "./components/PlayerHeader";
import { BackgroundCoverBlurred } from "./components/BackgroundCoverBlurred";

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
      <BackgroundCoverBlurred coverUrl={testCover.cover} />
    </>
  );
}

export default App;
