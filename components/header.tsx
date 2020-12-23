import { useContext } from "react"
import styled from "styled-components"
import AppContext from "@/hooks/AppContext"
import getFileName from "@/lib/getFilename"
import usePx from "@/hooks/usePx"
// import { H1 } from "./typography"

const Flex = styled.div`
  display: flex;
`

const Header = () => {
  return (
    <header>
      <h1>Цвета российских</h1>
      <Flex>
        <h1>альбомов</h1>
      </Flex>
    </header>
  )
}

export default Header
