import { useContext } from "react"
import AppContext from "@/hooks/AppContext"
import styled from "styled-components"

const Button = styled.button`
  --webkit-appearance: none;
  border: none;
  /* background: none; */
  position: fixed;
  z-index: 10;
  right: 20px;
  top: 20px;
  background: black;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 7px;
  margin: 0;
  outline: none;
`

const magickButton = () => {
  const { showColors, setShowColors } = useContext(AppContext)
  return (
    <Button onClick={() => setShowColors(!showColors)}>Показать цвета!</Button>
  )
}

export default magickButton
