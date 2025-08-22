import type { ReactElement } from "react";
import { BackgroundCoverBlurred } from "./BackgroundCoverBlurred";
import type { IMusicTrack } from "../types/IMusicTrack";
import { TrackCover } from "./TrackCover";
import { TrackInfo } from "./TrackInfo";
import { Icon } from "./Icon";

interface IPlayListItemProp {
  trackData: IMusicTrack;
  isActive?: boolean;
  onClick: (id: string) => void;
}

/**
 * PlayListItem component
 *
 * Represents a single track item inside a playlist.
 *
 * It displays:
 * - The album/track cover art (`TrackCover`)
 * - Track metadata such as artist and title (`TrackInfo`)
 * - A play icon (`Icon`) which changes style depending on whether the track is active
 * - A blurred cover image background (`BackgroundCoverBlurred`) **only if the track is active**
 *
 * Behavior:
 * - The `isActive` prop determines whether the playlist item is currently active/playing.
 * - When `isActive` is true:
 *   - The `<article>` element includes the `"active-song"` CSS class.
 *   - A blurred cover background (`BackgroundCoverBlurred`) is rendered behind the item.
 *   - The play icon is shown with the default `"playlist-play-icon"` class.
 * - When `isActive` is false:
 *   - The play icon is shown with the `"playlist-play-icon active"` class to indicate it is clickable.
 *
 * @param trackData - Object containing track metadata (artist, title, cover, etc.)
 * @param isActive - Optional flag to mark this item as the active/playing track
 * @param onClick - Callback function invoked with the track `id` when the item is clicked
 * @returns A React element rendering the playlist item
 */
export function PlayListItem({
  trackData,
  isActive,
  onClick,
}: IPlayListItemProp): ReactElement {
  const { id, artist, title, cover } = trackData;

  return (
    <article
      className={`playlist-item ${isActive ? "active-song" : ""}`}
      onClick={() => onClick(id)}
    >
      {isActive && (
        <BackgroundCoverBlurred
          coverUrl={cover}
          className="playlist-item-cover"
        />
      )}
      <TrackCover imageSrc={cover} altText={title} />
      <TrackInfo artist={artist} trackTitle={title} />
      {!isActive ? (
        <Icon className="playlist-play-icon active" iconName="play_circle" />
      ) : (
        <Icon className="playlist-play-icon" iconName="play_circle" />
      )}
    </article>
  );
}
