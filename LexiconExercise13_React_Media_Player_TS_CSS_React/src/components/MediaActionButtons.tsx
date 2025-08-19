import type { ReactElement } from "react";
import { Icon } from "./Icon";
import { Button } from "./Button";

export function MediaActionButtons(): ReactElement {
  return (
    <menu className="media-action-buttons">
      <Button className="repeat-button" iconName={"repeat"} />
      <Button className="fast-rewind-button" iconName={"fast_rewind"} />
      <Button className="play-button" iconName={"play_circle"} />
      <Button className="fast-forward-button" iconName={"fast_forward"} />
      <Button className="shuffle-button" iconName={"shuffle"} />
    </menu>
  );
}
