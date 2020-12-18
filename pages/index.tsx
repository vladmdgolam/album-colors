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
    </div>
  )
}
