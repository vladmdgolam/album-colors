import styled from "styled-components"
import { ColumnRow } from "./layout"
import { sm } from "@/data/constants"
import usePx from "@/hooks/usePx"

const Listen = styled.div`
  grid-column: span 9;
  ${sm} {
    grid-column: span 10;
  }
`

const Twenty = styled.h1`
  grid-column: 11/12;
  text-align: right;
  ${sm} {
    grid-column: span 2;
  }
`

const StyledFooter = styled(ColumnRow)`
  align-items: end;
  padding-top: ${() => usePx(30)};
  background: url("/footer-circle.svg");
  position: relative;
  margin-bottom: ${() => usePx(-300)};
`

const Flex = styled.div`
  display: flex;
`

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Listen>
          <h1>Цвета локальных</h1>
          <Flex>
            <h1>альбомов</h1>
          </Flex>
        </Listen>
        <Twenty>2020</Twenty>
        <FooterCircle />
      </StyledFooter>
    </>
  )
}

const Bg = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
`

const FooterCircle = () => {
  return (
    <Bg>
      <svg
        width="760"
        height="370"
        viewBox="0 0 760 370"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="116.5"
          y="116.5"
          width="526"
          height="526"
          rx="263"
          stroke="var(--text-color)"
        />
        <rect
          x="0.65"
          y="0.65"
          width="758.7"
          height="758.7"
          rx="379.35"
          stroke="var(--text-color)"
          stroke-width="1.3"
        />
        <rect
          x="56.65"
          y="58.65"
          width="635.7"
          height="643.7"
          rx="317.85"
          stroke="var(--text-color)"
          stroke-width="1.3"
        />
      </svg>
    </Bg>
  )
}

export default Footer
