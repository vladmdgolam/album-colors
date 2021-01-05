import styled from "styled-components"
import usePx from "@/hooks/usePx"
import { Caption, Number, H2 } from "@/components/typography"
import { sm } from "@/data/constants"

const StyledSources = styled.div`
  margin-bottom: ${() => usePx(20)};
`

const Source = styled(Caption)`
  margin-bottom: ${() => usePx(10)};
  ${sm} {
    font-size: ${() => usePx(16)};
    margin-bottom: ${() => usePx(5)};
  }
`

const List = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  margin-top: 0;
`

const Sources = () => {
  return (
    <StyledSources>
      <H2>источники</H2>

      <List>
        <li>
          <Source>
            <Number>1.</Number> неравнодушные друзья
          </Source>
        </li>
        <li>
          <Source>
            <Number>2.</Number> плейлисты:
          </Source>
          <ul>
            <Source>
              <Number>2.1</Number> Николая Редькина{" "}
              <a href="https://music.yandex.ru/users/music-blog/playlists/2459">
                «2020: крутая русская музыка»
              </a>
              ;
            </Source>
            <Source>
              <Number>2.1</Number> Александра Горбачёва{" "}
              <a href="https://open.spotify.com/playlist/2RpRwEHD33Yjs3yq4KiAIc?si=vAne_VGQTcyroJz9tqmX6g">
                «2020»
              </a>
              ;
            </Source>
          </ul>
        </li>
        <li>
          <Source>
            <Number>3.</Number> канал Александра Горбачёва{" "}
            <a href="https://t.me/musicinanutshell">
              «новая музыка. максимально коротко»
            </a>
          </Source>
        </li>
        <li>
          <Source>
            <Number>4.</Number> итоги года{" "}
            <a href="https://the-flow.ru/megaitogi2020">The-Flow</a>,{" "}
            <a href="https://music.apple.com/ru/playlist/100-%D0%BB%D1%83%D1%87%D1%88%D0%B8%D1%85-%D0%BF%D0%B5%D1%81%D0%B5%D0%BD-2020/pl.078970e433ee4c19a03b67a1106b9526">
              Apple Music
            </a>
            ;
          </Source>
        </li>
        {/* <li>
          <Source>
            <Number>5.</Number> лента друзей в Spotify.
          </Source>
        </li> */}
      </List>
    </StyledSources>
  )
}

export default Sources
