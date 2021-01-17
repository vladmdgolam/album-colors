import NextHead from "next/head"

const Head = ({
  title = "Цвета Альбомов",
  description = "Коллекция из 150 обложек альбомов и синглов 2020 года, вышедших в России и СНГ",
  children,
}) => {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple.png" />
      <link rel="manifest" href="/manifest.webmanifest" />

      <meta name="og:title" content={title} />
      <meta name="og:url" content="album-colors.ru" />

      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="twitter:site" content="@vladmdgolam" />
      <meta name="author" content="Vlad Md, Katya Do" />

      <meta property="og:site_name" content={title} />

      <meta property="og:image" content="/og.png" />

      <meta name="theme-color" content="#ee4621" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="ru" />

      {children}
    </NextHead>
  )
}

export default Head
