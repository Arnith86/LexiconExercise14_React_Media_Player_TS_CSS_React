import type { ReactElement } from "react";

interface IPlayerHeaderProp {
  playListName: string;
}

export function PlayerHeader({
  playListName,
}: IPlayerHeaderProp): ReactElement {
  return (
    <section className="header">
      <h1>
        <p>Playlist - {playListName}</p>
      </h1>
    </section>
  );
}
