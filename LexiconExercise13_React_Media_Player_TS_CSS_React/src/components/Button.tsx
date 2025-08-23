import { useState, type ReactElement } from "react";
import { Icon } from "./Icon";

interface IButtonProp {
  className: string;
  iconName?: null | string;
  isFilled?: boolean;
  buttonString?: null | string;
  onClick?: () => void /*JP comment: an optional callback function that must return void */;
}

/**
 * A reusable button component that can display either an icon (via {@link Icon}) or a text label.
 *
 * ### Visual behavior
 * - `isFilled` applies a `"filled"` CSS class to the icon.
 * - Text buttons will render the `buttonString` prop.
 *
 * ### Click behavior
 * - Calls the optional `onClick` callback if provided.
 *
 * @param props - Button properties as defined in {@link IButtonProp}
 * @returns A React button element with optional icon or text.
 */
export function Button({
  className,
  iconName,
  isFilled,
  buttonString,
  onClick,
}: IButtonProp): ReactElement {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
    /** The idea is that this function should execute features such as adding to playlist and favorites */
    onClick?.();
    /** JP Comment: ?: only executes if onClick is not undefined. works the same as
     * if (onClick) {
     *   onClick();
     * }
     */
  }

  return (
    <button className={`g-button ${className} `} onClick={handleClick}>
      {iconName ? (
        <Icon
          className={`button-icon icon ${isFilled ? "filled" : ""}`}
          iconName={iconName}
        />
      ) : (
        <span>{buttonString}</span>
      )}
    </button>
  );
}
