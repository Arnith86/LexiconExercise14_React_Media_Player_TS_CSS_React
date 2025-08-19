import type { ReactElement } from "react";

interface ITrackBarProp {
  trackLength: number;
}

/**
 * TrackBar component
 *
 * A reusable slider component representing the playback position of a media track.
 * The component accepts a `trackLength` that sets the maximum range of the slider.
 *
 * Notes:
 * - The `value/currentTime` is currently hardcoded to `40` and should be replaced with a state
 *   value representing the current playback position (`currentTime`).
 **/

export function TrackBar({ trackLength }: ITrackBarProp): ReactElement {
  return (
    <section className="track-bar">
      {/* <audio>
          the actual audio track goes here i think.
        </audio> */}
      <input
        type="range"
        min={0}
        max={trackLength}
        value={
          40
        } /*currentTime needs some kind of event handler to keep track of currentTime*/
      />
    </section>
  );
}
