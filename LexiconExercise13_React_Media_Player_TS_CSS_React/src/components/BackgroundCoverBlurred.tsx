import type { ReactElement } from "react";

interface IBackgroundCoverBlurredProp {
  coverUrl: string;
}

/** i dont fully understand the css aspect of this part yet, but i wanted it included :) */
/**
 * Renders a blurred background cover image using the provided cover URL.
 * The component applies a CSS blur effect to the background image, which
 * is set via a CSS custom property.
 *
 * @param coverUrl - The URL of the image to be used as the blurred background cover.
 * @returns A React element containing the blurred background image.
 *
 * @remarks
 * - The component expects a CSS class `.blurred-background-image` that utilizes the
 *      `--cover-url` custom property for the background image.
 * - The `.cover-background` div can be used for additional overlay or styling purposes.
 */
export function BackgroundCoverBlurred({
  coverUrl,
}: IBackgroundCoverBlurredProp): ReactElement {
  return (
    <div
      className="blurred-background-image"
      style={{ "--cover-url": `url(${coverUrl})` } as any}
    >
      <div className="cover-background" />
    </div>
  );
}
