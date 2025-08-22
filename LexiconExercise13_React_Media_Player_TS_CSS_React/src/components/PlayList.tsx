import { useState, type ReactElement } from "react";
import type { IMusicTrack } from "../types/IMusicTrack";
import { PlayListItem } from "./PlayListItem";

interface IPlayListProp {
  tracks: IMusicTrack[];
  selectedTrackId: string;
  onSelectTrack: (id: string) => void;
}

/**
 * PlayList component
 *
 * Renders a collection of tracks as a playlist.
 *
 * Each track is displayed using the `PlayListItem` component, showing:
 * - The album/track cover (`TrackCover`)
 * - Track metadata such as artist and title (`TrackInfo`)
 * - A play icon (`Icon`) which changes style depending on whether the track is active
 * - A blurred cover background (`BackgroundCoverBlurred`) **only for the active track**
 *
 * Behavior:
 * - The currently active track is determined by the `selectedTrackId` prop, which is
 *   managed by the parent component (e.g., `Player`).
 * - Clicking a playlist item calls the `onSelectTrack` callback with the track's `id`,
 *   notifying the parent to update the active track.
 * - The active track receives:
 *   - The `isActive` flag
 *   - A blurred cover background
 *   - The `"active-song"` CSS class
 *
 * This design ensures that the active track state is lifted up to the parent component,
 * allowing other components (like the Player) to react to track changes.
 *
 * @param tracks - Array of `IMusicTrack` objects representing the playlist items
 * @param selectedTrackId - The `id` of the currently active/playing track
 * @param onSelectTrack - Callback function invoked with the track `id` when a track is selected
 * @returns A React element rendering the playlist section with track items
 */
export function PlayList({
  tracks,
  selectedTrackId,
  onSelectTrack,
}: IPlayListProp): ReactElement {
  return (
    <section className="playlist background">
      {tracks.map((track) => (
        <PlayListItem
          trackData={track}
          key={track.id}
          isActive={selectedTrackId === track.id}
          onClick={onSelectTrack}
        />
      ))}
    </section>
  );
}
