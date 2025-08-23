import type { ReactElement } from "react";
import { Button } from "./Button";
import { useToggleButtons } from "../helpers/toggledButtonsHock";

/**
 * A UI component that renders the main media player action buttons:
 * - Repeat
 * - Rewind
 * - Play
 * - Fast forward
 * - Shuffle
 *
 * This component groups all media-related controls inside a `<menu>` element
 * for semantic structure and accessibility.
 *
 * It uses the reusable {@link Button} component with material icons
 * to provide consistent styling and behavior.
 */
export function MediaActionButtons(): ReactElement {
  const { toggledButtons, toggledButton } = useToggleButtons({
    repeatButton: false,
    shuffleButton: false,
  });

  return (
    <menu className="media-action-buttons">
      <Button
        className={`repeat-button toggle ${
          toggledButtons.repeatButton === false ? "not-active-button" : ""
        }`}
        iconName={"repeat"}
        onClick={() => toggledButton("repeatButton")}
      />
      <Button
        className="previous-button"
        iconName={"fast_rewind"}
        isFilled={true}
      />
      <Button
        className="play-button"
        iconName={"play_circle"}
        isFilled={true}
      />
      <Button
        className="next-button"
        iconName={"fast_forward"}
        isFilled={true}
      />
      <Button
        className={`shuffle-button toggle ${
          toggledButtons.shuffleButton === false ? "not-active-button" : ""
        }`}
        iconName={"shuffle"}
        onClick={() => toggledButton("shuffleButton")}
      />
    </menu>
  );
}
