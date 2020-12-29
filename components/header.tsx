import styled from "styled-components"
import { ColumnRow } from "@/components/layout"
import { Caption } from "@/components/typography"
import { sm } from "@/data/constants"

const Flex = styled.div`
  display: flex;
`

const ScaledHeader = styled.header`
  /* transform: scaleY(1.75);
  transform-origin: 0% 0%; */
  grid-column: span 9;
  ${sm} {
      grid-column: span 10;
  }
`

const Click = styled.div`
  grid-column: span 1;
`

const StyledArrow = styled.svg`
  stroke: var(--text-color);
  ${sm} {
    max-width: 100%;
    height: auto;
  }
`

const Arrow = () => (
  <StyledArrow
    width="115"
    height="42"
    viewBox="0 0 115 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1C2.9881 1.03475 4.6172 1.39977 6.45999 2.04018C10.5438 3.4594 14.5772 4.97989 18.6298 6.45755C36.4944 12.9713 54.2751 19.6163 72.2923 25.8427C84.1466 29.9392 95.9683 34.0657 107.7 38.3923C109.91 39.2074 112.084 40.2501 114.377 40.8779"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M114.456 40.7638C111.572 38.7585 108.852 36.5397 106.451 34.1421C106.055 33.7466 105.667 33.3475 105.263 32.958C105.17 32.8683 105.045 32.7838 105 32.6729"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledArrow>
)

const Header = () => {
  return (
    <ColumnRow>
      <ScaledHeader>
        <h1>Цвета локальных</h1>
        <Flex>
          <h1>альбомов</h1>
        </Flex>
      </ScaledHeader>
      <Click>
        <Caption>click!</Caption>
        <Arrow />
      </Click>
    </ColumnRow>
  )
}

export default Header
