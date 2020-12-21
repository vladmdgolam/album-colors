import styled from "styled-components"

const Arrow = styled.span`
  transform: rotate(-45deg);
  display: inline-block;
`

const Footer = () => {
  return (
    <footer>
      <h1>
        ПОСЛУШАЙТЕ<Arrow>→</Arrow>ЦВЕТА АЛЬБОМОВ
      </h1>
      <h1>2020</h1>
    </footer>
  )
}

export default Footer
