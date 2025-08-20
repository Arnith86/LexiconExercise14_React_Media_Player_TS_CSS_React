import type { ReactElement } from "react";
import { TrackCover } from "./TrackCover";
import { NowPlaying } from "./NowPlaying";
import { TrackBar } from "./TrackBar";
import { MediaActionButtons } from "./MediaActionButtons";
import { BackgroundCoverBlurred } from "./BackgroundCoverBlurred";
import type { IMusicTrack } from "../types/IMusicTrack";

interface IPlayerProp {
  trackData: IMusicTrack;
}

export function Player({ trackData }: IPlayerProp): ReactElement {
  return (
    <section>
      <TrackCover
        imageSrc={trackData.cover}
        altText={`${trackData.title} cover`}
      />
      <NowPlaying artist="Like we used to" trackTitle="A Rocket to the moon" />
      <TrackBar trackLength={trackData.length} />
      <MediaActionButtons />
      <BackgroundCoverBlurred coverUrl={trackData.cover} />
    </section>
  );
}
