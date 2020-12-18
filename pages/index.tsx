import Head from "next/head"

import CardList from "@/components/cardList"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardList />
      <p>
        Источники: плейлист Николая Редькина{" "}
        <a href="https://open.spotify.com/playlist/2ntwTz2ctoV4etEqFK6vNH?si=kvMz23fMTVeGgLzfMKtvLQ">
          «2020: крутая русская музыка»
        </a>
        , итоги года Тихого места и The-Flow, лента друзей Spotify, итоги года
        Яндекс.музыки
      </p>
      <p>
        Придумал и разработал: <a href="https://vladmdgolam.now.sh/">Влад</a>
      </p>
    </div>
  )
}
