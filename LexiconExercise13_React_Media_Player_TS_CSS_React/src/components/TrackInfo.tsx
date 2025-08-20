import type { ReactElement } from "react";

interface ITrackInfoProp {
  artist: string;
  trackTitle: string;
}

export function TrackInfo({
  artist,
  trackTitle,
}: ITrackInfoProp): ReactElement {
  return (
    <span className="track-info">
      <h2 className="artist-alias">{artist}</h2>
      <p className="track-title">{trackTitle}</p>
    </span>
  );
}
