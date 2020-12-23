import styled from "styled-components"

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
