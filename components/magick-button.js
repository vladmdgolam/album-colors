import { useContext } from "react"
import AppContext from "@/hooks/AppContext"
import styled from "styled-components"
import { sm } from "@/data/constants"
import usePx from "@/hooks/usePx"

// const Rainbow = styled.button`
//   width: ${() => usePx(85)};
//   height: ${() => usePx(85)};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: conic-gradient(
//     from 180deg at 47.24% 49.67%,
//     #dc0936 -1.01deg,
//     #f07a16 59.21deg,
//     #efe61f 90.23deg,
//     #1a9d40 119.3deg,
//     #209b6c 148.36deg,
//     #169ed8 179.66deg,
//     #193e8e 210.19deg,
//     #881f7e 269.1deg,
//     #d80681 299.83deg,
//     #dc0936 358.99deg,
//     #f07a16 419.21deg
//   );
//   backdrop-filter: blur(29px);
// `

const Button = styled.button`
  --webkit-appearance: none;
  border: none;
  position: fixed;
  z-index: 10;
  right: ${() => usePx(35)};
  top: ${() => usePx(35)};
  background: black;
  color: white;
  cursor: pointer;
  width: ${() => usePx(75)};
  height: ${() => usePx(75)};
  border-radius: 100%;
  margin: 0;
  outline: none;
  transform-style: preserve-3d;

  ${sm} {
    right: ${() => usePx(10)};
    top: ${() => usePx(10)};
    width: ${() => usePx(35)};
    height: ${() => usePx(35)};
  }

  &:before {
    border-radius: 100%;
    transform: translateZ(-1px);
    width: ${() => usePx(75)};
    height: ${() => usePx(75)};
    ${sm} {
      width: ${() => usePx(35)};
      height: ${() => usePx(35)};
    }
    left: 0;
    top: 0;
    position: absolute;
    content: "";
    background: conic-gradient(
      from 180deg at 47.24% 49.67%,
      #dc0936 -1.01deg,
      #f07a16 59.21deg,
      #efe61f 90.23deg,
      #1a9d40 119.3deg,
      #209b6c 148.36deg,
      #169ed8 179.66deg,
      #193e8e 210.19deg,
      #881f7e 269.1deg,
      #d80681 299.83deg,
      #dc0936 358.99deg,
      #f07a16 419.21deg
    );
    filter: blur(7px);
  }
  ${sm} {
  }
`

const magickButton = () => {
  const { showColors, setShowColors } = useContext(AppContext)
  return <Button show={showColors} onClick={() => setShowColors(!showColors)} />
}

export default magickButton
