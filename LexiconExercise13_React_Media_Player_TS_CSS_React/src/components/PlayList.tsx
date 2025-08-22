import { useState, type ReactElement } from "react";
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
 * Each track is displayed using the `PlayListItem` component, showing:
 * - The album/track cover (`TrackCover`)
 * - Track metadata such as artist and title (`TrackInfo`)
 * - A play icon (`Icon`) which changes style depending on whether the track is active
 * - A blurred cover background (`BackgroundCoverBlurred`) **only for the active track**
 *
 * Behavior:
 * - The component internally manages the currently selected track using state.
 * - By default, the fourth track (`tracks[3]`) is set as active when the playlist mounts.
 * - Clicking on a track updates the active track state via `handleTrackClick`.
 * - The active track receives:
 *   - The `isActive` flag
 *   - A blurred cover background
 *   - The `"active-song"` CSS class
 *
 * @param tracks - Array of `IMusicTrack` objects representing the playlist items
 * @param selectedTrackId - The `id` of the initially active/playing track (currently unused in state, but available for future enhancements)
 * @returns A React element rendering the playlist section with track items
 */
export function PlayList({
  tracks,
  selectedTrackId,
}: IPlayListProp): ReactElement {
  const [selectedTrack, setActiveTrack] = useState<string>(tracks[3].id);
  const handleTrackClick = (id: string) => {
    setActiveTrack(id);
  };

  return (
    <section className="playlist">
      {tracks.map((track) => (
        <PlayListItem
          trackData={track}
          key={track.id}
          isActive={selectedTrack === track.id}
          onClick={handleTrackClick}
        />
      ))}
    </section>
  );
}
