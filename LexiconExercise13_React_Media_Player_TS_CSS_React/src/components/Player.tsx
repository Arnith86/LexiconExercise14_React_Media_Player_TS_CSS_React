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
  const { cover, title, artist, length } = trackData;

  return (
    <section>
      <TrackCover imageSrc={cover} altText={`${title} cover`} />
      <NowPlaying artist={artist} trackTitle={title} />
      <TrackBar trackLength={length} />
      <MediaActionButtons />
      <BackgroundCoverBlurred coverUrl={cover} />
    </section>
  );
}
