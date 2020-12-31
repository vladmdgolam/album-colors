import styled from "styled-components"
import usePx from "@/hooks/usePx"
import { Caption } from "@/components/typography"
import { sm } from "@/data/constants"

const StyledSources = styled.div`
  margin-bottom: ${() => usePx(20)};
`

const Number = styled.span`
  font-size: ${() => usePx(16)};
  line-height: 1.125;
  letter-spacing: -0.03em;
`

const Source = styled(Caption)`
  margin-bottom: ${() => usePx(10)};
  ${sm} {
    margin-bottom: ${() => usePx(5)};
  }
`

const List = styled.ul`
  list-style: none;
  padding-inline-start: 0;
`

const Sources = () => {
  return (
    <StyledSources>
      <h2>источники</h2>

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
              <Number>2.1</Number>{" "}
              <a href="https://open.spotify.com/playlist/2RpRwEHD33Yjs3yq4KiAIc?si=vAne_VGQTcyroJz9tqmX6g">
                Александра Горбачёва «2020»;
              </a>
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
            <Number>4.</Number> итоги года Яндекс.Музыки;
          </Source>
        </li>
        <li>
          <Source>
            <Number>5.</Number> лента друзей в Spotify.
          </Source>
        </li>
      </List>
    </StyledSources>
  )
}

export default Sources
