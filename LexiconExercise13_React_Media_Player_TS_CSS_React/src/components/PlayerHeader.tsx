import type { ReactElement } from "react";
import { Button } from "./Button";

interface IPlayerHeaderProp {
  playListName: string;
}

/**
 * PlayerHeader component
 *
 * Renders the header section of the media player,
 * showing the name of the current playlist.
 *
 * @param playListName - The name of the playlist to display in the header
 * @returns A React element containing the header with playlist name
 */
export function PlayerHeader({
  playListName,
}: IPlayerHeaderProp): ReactElement {
  return (
    <section className="header">
      <Button className="back-header-button" iconName={"keyboard_arrow_left"} />
      <h1>Playlist - {playListName}</h1>
      <Button className="kebab-header-button" iconName={"more_vert"} />{" "}
      {/* Todo: kebab, leads nowhere as of now, add if enough time */}
    </section>
  );
}
