import type { ReactElement } from "react";
import { Icon } from "./Icon";

interface IButtonProp {
  className: string;
  iconName?: null | string;
  buttonString?: null | string;
}

/**
 * A reusable button component that can display either:
 * - a Material Icon (via the {@link Icon} component), or
 * - a text label.
 *
 * Which one is shown depends on whether {@link IButtonProp.iconName}
 * or {@link IButtonProp.buttonString} is provided.
 *
 * @example
 * ```tsx
 * <Button className="play-button" iconName="play_arrow" />
 * <Button className="playlist-button" buttonString="Add to Playlist" />
 * ```
 */
export function Button({
  className,
  iconName,
  buttonString,
}: IButtonProp): ReactElement {
  return (
    <button className={`g-button ${className}`}>
      {iconName ? (
        <Icon className="button-icon" iconName={iconName} />
      ) : (
        <span>{buttonString}</span>
      )}
    </button>
  );
}
