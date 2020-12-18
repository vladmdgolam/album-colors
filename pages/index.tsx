import Head from "next/head"
import styled from "styled-components"

import CardList from "@/components/cardList"

const Credits = styled.div`
  padding: 20px;
`
const P = styled.p`
  margin-bottom: 5px;
`

const Link = styled.a`
  text-decoration: underline;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardList />
      <Credits>
        <P>
          <Link href="https://music.apple.com/ru/playlist/covers/pl.u-k8qau4kZjdA">
            Плейлист!
          </Link>
        </P>
        <P>
          Источники: плейлист Николая Редькина{" "}
          <Link href="https://open.spotify.com/playlist/2ntwTz2ctoV4etEqFK6vNH?si=kvMz23fMTVeGgLzfMKtvLQ">
            «2020: крутая русская музыка»
          </Link>{" "}
          и Александра Горбачёва{" "}
          <Link href="https://open.spotify.com/playlist/2RpRwEHD33Yjs3yq4KiAIc?si=vAne_VGQTcyroJz9tqmX6g">
            «2020»
          </Link>
          , итоги года{" "}
          <Link href="https://the-flow.ru/megaitogi2020">The-Flow</Link> и{" "}
          <Link href="https://music.yandex.ru/users/music-blog/playlists/2459">
            Яндекс.Музыки
          </Link>{" "}
          и лента друзей Spotify
        </P>
        <P>
          Придумал и разработал:{" "}
          <Link href="https://vladmdgolam.now.sh/">Влад Мд</Link>, дизайн:{" "}
          <Link href="https://www.instagram.com/921d0/">Катя До</Link>
        </P>
        <P>
          Сильно вдохновлено проектом{" "}
          <Link href="https://albumcolors.com/">Album Covers</Link>
        </P>
      </Credits>
    </div>
  )
}
