import type { ReactElement } from "react";
import type { IMusicTrack } from "../types/IMusicTrack";
import { PlayListItem } from "./PlayListItem";

interface IPlayListProp {
  tracks: IMusicTrack[];
  selectedTrackId: string;
}

/**
 * PlayList component
 *
 * Renders a collection of tracks as a playlist.
 *
 * Each track is displayed as a `PlayListItem` component, showing:
 * - The album/track cover (`TrackCover`)
 * - Track metadata such as artist and title (`TrackInfo`)
 * - A play button (`Button`)
 * - A blurred cover background (`BackgroundCoverBlurred`) **only for the active track**
 *
 * Behavior:
 * - When a track’s `id` matches `selectedTrackId`, the `isActive` flag is passed
 *   to the corresponding `PlayListItem`. This allows that item to visually stand out
 *   (e.g., with a blurred background and an `"active-song"` CSS class).
 *
 * @param tracks - Array of `IMusicTrack` objects representing the playlist items
 * @param selectedTrackId - The `id` of the currently active/playing track
 * @returns A React element rendering the playlist section with track items
 */
export function PlayList({
  tracks,
  selectedTrackId,
}: IPlayListProp): ReactElement {
  return (
    <section className="playlist">
      {tracks.map((track) => (
        <PlayListItem
          trackData={track}
          key={track.id}
          isActive={selectedTrackId === track.id}
        />
      ))}
    </section>
  );
}
