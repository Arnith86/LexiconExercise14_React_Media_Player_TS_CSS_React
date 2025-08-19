import { useState } from "react";
import "./css/base.css";

import { MediaActionButtons } from "./components/MediaActionButtons";
import { TrackBar } from "./components/TrackBar";

import { NowPlaying } from "./components/NowPlaying";

function App() {
  return (
    <>
      <NowPlaying artist="Like we used to" trackTitle="A Rocket to the moon" />
      <TrackBar trackLength={260} />
      <MediaActionButtons />
    </>
  );
}

export default App;
