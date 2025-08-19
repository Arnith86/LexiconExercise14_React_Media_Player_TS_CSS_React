import type { ReactElement } from "react";

interface IPlayButtonProp {
  className: string;
}

/**
 * PlayButton component
 *
 * Renders a Material Symbols "play_circle" icon with optional custom styling.
 * This component accepts a `className` prop to allow additional CSS classes.
 *
 * @param {IPlayButtonProp} props - The properties for the PlayButton component.
 * @returns {ReactElement} A span element containing the play_circle icon.
 */
export function PlayButton({ className }: IPlayButtonProp): ReactElement {
  return (
    <span className={`${className} material-symbols-outlined`}>
      play_circle
    </span>
  );
}
