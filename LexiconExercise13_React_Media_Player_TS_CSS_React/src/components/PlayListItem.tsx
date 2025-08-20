import type { ReactElement } from "react";
import { BackgroundCoverBlurred } from "./BackgroundCoverBlurred";
import type { IMusicTrack } from "../types/IMusicTrack";
import { TrackCover } from "./TrackCover";
import { TrackInfo } from "./TrackInfo";
import { Button } from "./Button";

interface IPlayListItemProp {
  trackData: IMusicTrack;
  isActive?: boolean;
}

/**
 * PlayListItem component
 *
 * Represents a single track item inside a playlist.
 *
 * It displays:
 * - The album/track cover art (`TrackCover`)
 * - Track metadata such as artist and title (`TrackInfo`)
 * - A play button (`Button`)
 * - A blurred cover image background (`BackgroundCoverBlurred`) **only if the track is active**
 *
 * Behavior:
 * - The `isActive` prop determines whether the playlist item is currently active/playing.
 * - When `isActive` is true:
 *   - The `<article>` element will include the `"active-song"` CSS class.
 *   - A blurred cover background (`BackgroundCoverBlurred`) will be rendered behind the item.
 *
 * @param trackData - Object containing track metadata (artist, title, cover, etc.)
 * @param isActive - Optional flag to mark this item as the active/playing track
 * @returns A React element rendering the playlist item
 */
export function PlayListItem({
  trackData,
  isActive,
}: IPlayListItemProp): ReactElement {
  const { artist, title, cover } = trackData;

  return (
    <article className={`playlist-item ${isActive ? "active-song" : ""}`}>
      {isActive && <BackgroundCoverBlurred coverUrl={cover} />}
      <TrackCover imageSrc={cover} altText={title} />
      <TrackInfo artist={artist} trackTitle={title} />
      <Button className="playlist-play-button" iconName={"play_circle"} />
    </article>
  );
}
