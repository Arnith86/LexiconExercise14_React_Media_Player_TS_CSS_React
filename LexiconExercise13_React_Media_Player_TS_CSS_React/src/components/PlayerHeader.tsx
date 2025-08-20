import type { ReactElement } from "react";

interface IPlayerHeaderProp {
  playListName: string;
}

export function PlayerHeader({
  playListName,
}: IPlayerHeaderProp): ReactElement {
  return (
    <section className="header">
      <h1>Playlist - {playListName}</h1>
    </section>
  );
}
