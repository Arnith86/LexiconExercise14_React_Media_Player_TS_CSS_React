import { useState, type ReactElement } from "react";
import { TrackCover } from "./TrackCover";
import { NowPlaying } from "./NowPlaying";
import { TrackBar } from "./TrackBar";
import { MediaActionButtons } from "./MediaActionButtons";
import { BackgroundCoverBlurred } from "./BackgroundCoverBlurred";
import type { IMusicTrack } from "../types/IMusicTrack";

interface IPlayerProp {
  trackData: IMusicTrack;
}

/**
 * Player component
 *
 * Represents the main music player section.
 *
 * It displays:
 * - The track cover image (`TrackCover`)
 * - Track metadata such as artist and title (`NowPlaying`)
 * - A progress bar for the track (`TrackBar`)
 * - Playback control buttons (`MediaActionButtons`)
 * - A blurred cover background (`BackgroundCoverBlurred`) filling the entire player
 *
 * Behavior:
 * - The `trackData` prop provides all information needed for the player
 *   (cover image, title, artist, track length).
 * - The blurred background (`BackgroundCoverBlurred`) is always rendered
 *   behind the player content, filling the whole player area.
 * - The background is visually pushed behind other content using absolute
 *   positioning and `z-index`.
 *
 * @param trackData - Object containing track metadata (artist, title, cover image, and track length)
 * @returns A React element rendering the player with track info, controls, and background
 */
export function Player({ trackData }: IPlayerProp): ReactElement {
  const { cover, title, artist, length } = trackData;
  return (
    <section className="player">
      <TrackCover imageSrc={cover} altText={`${title} cover`} />
      <NowPlaying artist={artist} trackTitle={title} />
      <TrackBar trackLength={length} />
      <MediaActionButtons />
      <BackgroundCoverBlurred coverUrl={cover} className="player-cover" />
    </section>
  );
}
