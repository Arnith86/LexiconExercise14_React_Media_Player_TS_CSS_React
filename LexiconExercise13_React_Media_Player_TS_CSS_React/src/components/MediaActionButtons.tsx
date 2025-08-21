import type { ReactElement } from "react";
import { Button } from "./Button";

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
  return (
    <menu className="media-action-buttons">
      <Button
        className="repeat-button"
        iconName={"repeat"}
        isToggleButton={true}
      />
      <Button className="previous-button" iconName={"fast_rewind"} />
      <Button className="play-button" iconName={"play_circle"} />
      <Button className="next-button" iconName={"fast_forward"} />
      <Button
        className="shuffle-button"
        iconName={"shuffle"}
        isToggleButton={true}
      />
    </menu>
  );
}
