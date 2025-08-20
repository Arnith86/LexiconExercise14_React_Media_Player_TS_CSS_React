import type { ReactElement } from "react";
import { BackgroundCoverBlurred } from "./BackgroundCoverBlurred";
import type { IMusicTrack } from "../types/IMusicTrack";
import { TrackCover } from "./TrackCover";
import { TrackInfo } from "./TrackInfo";
import { Button } from "./Button";

interface IPlayListItemProp {
  trackData: IMusicTrack;
}

/**
 * PlayListItem component
 *
 * Represents a single track item inside a playlist.
 * It displays:
 * - A blurred cover image background (`BackgroundCoverBlurred`)
 * - The album/track cover art (`TrackCover`)
 * - Track metadata such as artist and title (`TrackInfo`)
 * - A play button (`Button`)
 *
 * This component encapsulates all UI related to showing one track entry
 * in the playlist view.
 *
 * @param trackData - Object containing track metadata (artist, title, cover, etc.)
 * @returns A React element rendering the playlist item
 */
export function PlayListItem({ trackData }: IPlayListItemProp): ReactElement {
  const { artist, title, cover } = trackData;

  return (
    <article>
      <BackgroundCoverBlurred coverUrl={cover} />
      <TrackCover imageSrc={cover} altText={title} />
      <TrackInfo artist={artist} trackTitle={title} />
      <Button className="playlist-play-button" iconName={"play_circle"} />
    </article>
  );
}
