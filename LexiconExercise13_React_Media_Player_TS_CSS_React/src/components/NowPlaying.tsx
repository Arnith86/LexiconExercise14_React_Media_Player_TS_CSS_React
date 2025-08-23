import { useState, type ReactElement } from "react";
import { Button } from "./Button";
import { TrackInfo } from "./TrackInfo";
import { useToggleButtons } from "../helpers/toggledButtonsHock";

interface INowPlayingProp {
  artist: string;
  trackTitle: string;
}

/**
 * Features:
 * - Shows artist name and track title via {@link TrackInfo}.
 * - Provides a button to add the track to a playlist.
 * - Provides a button to mark the track as a favorite, which can appear filled when active.
 * - Uses the {@link useToggleButtons} hook to manage the toggle state of each button.
 *
 * Toggle behavior:
 * - Each button has its own toggle state stored in a single object (`toggledButtons`).
 * - Clicking a button calls `toggledButton` from the hook, which toggles the boolean
 *   value corresponding to that button while keeping other button states unchanged.
 *
 * Button styling:
 * - Active buttons can have different CSS classes, e.g., `not-active-button` is added
 *   when the button is not toggled.
 *
 * @returns A React element containing track information and interactive buttons.
 */
export function NowPlaying({
  artist,
  trackTitle,
}: INowPlayingProp): ReactElement {
  const { toggledButtons, toggledButton } = useToggleButtons({
    addButton: false,
    favoriteButton: false,
  });

  return (
    <section className="now-playing">
      <Button
        className={`add-playList-button toggle ${
          toggledButtons.addButton === false ? "not-active-button" : ""
        }`}
        iconName={"add_circle"}
        onClick={() => toggledButton("addButton")}
      />
      <TrackInfo artist={artist} trackTitle={trackTitle} />
      <Button
        className={`add-favorite-button toggle ${
          toggledButtons.favoriteButton === false ? "not-active-button" : ""
        }`}
        iconName={"favorite"}
        onClick={() => toggledButton("favoriteButton")}
        isFilled={toggledButtons.favoriteButton}
      />
    </section>
  );
}
