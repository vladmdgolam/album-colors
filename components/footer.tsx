import styled from "styled-components"
import { ColumnRow } from "./layout"
import { sm, xl } from "@/data/constants"
import usePx from "@/hooks/usePx"
const Arrow = styled.span`
  transform: rotate(-45deg);
  display: inline-block;

  font-size: ${() => usePx(92)};
  line-height: 1.14;
  vertical-align: text-top;

  ${xl} {
    margin-left: ${() => usePx(30)};
  }
  ${sm} {
    font-size: ${() => usePx(20)};
  }
`

const Listen = styled.h1`
  grid-column: span 9;
  ${sm} {
    grid-column: span 10;
  }
`

const Twenty = styled.h1`
  grid-column: span 2;
  text-align: right;
`

const StyledFooter = styled(ColumnRow)`
  align-items: end;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Listen>
        <a href="https://music.apple.com/ru/playlist/covers/pl.u-k8qau4kZjdA">
          ПОСЛУШАЙТЕ<Arrow>→</Arrow>
          <br />
          ЦВЕТА АЛЬБОМОВ
        </a>
      </Listen>
      <Twenty>2020</Twenty>
    </StyledFooter>
  )
}

export default Footer
