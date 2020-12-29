import styled from "styled-components"
import { ColumnRow } from "./layout"
import { sm } from "@/data/constants"
// import usePx from "@/hooks/usePx"

const Listen = styled.div`
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

const Flex = styled.div`
  display: flex;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Listen>
        <h1>Цвета локальных</h1>
        <Flex>
          <h1>альбомов</h1>
        </Flex>
      </Listen>
      <Twenty>2020</Twenty>
    </StyledFooter>
  )
}

export default Footer
