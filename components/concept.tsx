import styled from "styled-components"

import { Link } from "./typography"

const Credits = styled.div`
  max-width: 650px;
`
const P = styled.p`
  margin-bottom: 10px;
  line-height: 1.3;
`

const Concept = () => {
  return (
    <Credits>
      <P>
        <Link href="https://music.apple.com/ru/playlist/covers/pl.u-k8qau4kZjdA">
          Плейлист!
        </Link>
      </P>
      <P>
        Источники: плейлисты Николая Редькина{" "}
        <Link href="https://open.spotify.com/playlist/2ntwTz2ctoV4etEqFK6vNH?si=kvMz23fMTVeGgLzfMKtvLQ">
          «2020: крутая русская музыка»
        </Link>{" "}
        и&nbsp;Александра Горбачёва{" "}
        <Link href="https://open.spotify.com/playlist/2RpRwEHD33Yjs3yq4KiAIc?si=vAne_VGQTcyroJz9tqmX6g">
          «2020»
        </Link>
        , итоги года{" "}
        <Link href="https://the-flow.ru/megaitogi2020">The-Flow</Link> и&nbsp;
        <Link href="https://music.yandex.ru/users/music-blog/playlists/2459">
          Яндекс.Музыки
        </Link>
        &nbsp;и лента друзей в Spotify
      </P>
      <P>
        Разработал и&nbsp;запустил:{" "}
        <Link href="https://vladmdgolam.now.sh/">Влад&nbsp;Мд</Link>
        <br />
        Дизайн:{" "}
        <Link href="https://www.instagram.com/921d0/">Катя&nbsp;До</Link>
      </P>
      <P>
        Сильно вдохновлено проектом{" "}
        <Link href="https://albumcolors.com/">Album&nbsp;Colors</Link>
      </P>
    </Credits>
  )
}

export default Concept
