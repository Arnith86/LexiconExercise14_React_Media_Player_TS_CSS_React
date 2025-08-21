import { useState, type ReactElement } from "react";
import { Icon } from "./Icon";

interface IButtonProp {
  className: string;
  iconName?: null | string;
  buttonString?: null | string;
  isToggleButton?: boolean;
  selected?: boolean;
  onClick?: () => void /*an optional callback function that must return void */;
}

/**
 * A reusable button component that can display either:
 * - a Material Icon (via the {@link Icon} component), or
 * - a text label.
 *
 * It also supports toggle behavior:
 * - If {@link IButtonProp.isToggleButton} is `true`, the button can maintain
 *   its own active state or be controlled by the parent via {@link IButtonProp.selected}.
 *
 * Click behavior:
 * - The button will always call {@link IButtonProp.onClick} if provided.
 * - If it is a toggle button *and* no parent `selected` prop is given,
 *   it will manage its own active state internally.
 *
 * @example
 * Basic icon button:
 * ```tsx
 * <Button className="play-button" iconName="play_arrow" />
 * ```
 *
 * Text button:
 * ```tsx
 * <Button className="playlist-button" buttonString="Add to Playlist" />
 * ```
 *
 * Self-managed toggle button:
 * ```tsx
 * <Button className="favorite-btn" iconName="favorite" isToggleButton />
 * ```
 *
 * Parent-controlled toggle button:
 * ```tsx
 * <Button
 *   className="favorite-btn"
 *   iconName="favorite"
 *   isToggleButton
 *   selected={isFavorited}
 *   onClick={() => toggleFavorite(songId)}
 * />
 * ```
 */
export function Button({
  className,
  iconName,
  buttonString,
  isToggleButton = false,
  selected,
  onClick,
}: IButtonProp): ReactElement {
  const [internalToggled, setInternalToggle] = useState<boolean>(false);

  const isActive: boolean = selected ?? internalToggled;

  function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
    if (isToggleButton && selected === undefined) {
      setInternalToggle((prev) => !prev);
    }

    /** The idea is that this function should execute features such as adding to playlist and favorites */
    onClick?.();
    /** ?: only executes if onClick is not undefined. works the same as
     * if (onClick) {
     *   onClick();
     * }
     */
  }

  return (
    <button
      className={`g-button ${className} ${isActive ? "button-active" : ""}`}
      onClick={handleClick}
    >
      {iconName ? (
        <Icon className="button-icon" iconName={iconName} />
      ) : (
        <span>{buttonString}</span>
      )}
    </button>
  );
}
