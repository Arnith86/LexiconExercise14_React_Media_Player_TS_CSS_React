import type { ReactElement } from "react";
import { Button } from "./Button";
import { TrackInfo } from "./TrackInfo";

interface INowPlayingProp {
  artist: string;
  trackTitle: string;
}

/**
 * A UI component that displays the currently playing track, including:
 * - Artist name
 * - Track title
 * - Buttons for adding the track to a playlist and marking it as a favorite
 *
 * This component uses the reusable {@link Button} component for actions.
 */
export function NowPlaying({
  artist,
  trackTitle,
}: INowPlayingProp): ReactElement {
  return (
    <section className="now-playing">
      <Button className="add-playList-button" iconName={"add_circle"} />
      <TrackInfo artist={artist} trackTitle={trackTitle} />
      <Button className="add-favorite-button" iconName={"favorite"} />
    </section>
  );
}
