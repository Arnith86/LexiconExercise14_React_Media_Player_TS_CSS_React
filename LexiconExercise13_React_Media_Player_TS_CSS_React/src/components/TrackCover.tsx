import type { ReactElement } from "react";

interface ITrackCoverProp {
  imageSrc: string;
  altText: string;
}

/**
 * TrackCover component
 *
 * Displays the cover image of a music track.
 * The image is wrapped in a <figure> element to provide semantic grouping.
 *
 * @param imageSrc - The URL or path of the track cover image
 * @param altText - The alternative text describing the cover image
 * @returns A React element rendering the track cover
 */
export function TrackCover({
  imageSrc,
  altText,
}: ITrackCoverProp): ReactElement {
  return (
    <figure className="track-cover-image">
      <img src={imageSrc} alt={altText} />
    </figure>
  );
}
