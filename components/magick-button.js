import { useContext } from "react"
import AppContext from "@/hooks/AppContext"
import styled, { css } from "styled-components"
import { sm } from "@/data/constants"
import usePx from "@/hooks/usePx"

// const rainbow = css`
//   &:before {
//     border-radius: 100%;
//     opacity: 0;
//     transform: translateZ(-1px);
//     width: 100%;
//     height: 100%;
//     transition: var(--transition);
//     left: 0;
//     top: 0;
//     position: absolute;
//     content: "";
//     background: conic-gradient(
//       from 180deg at 47.24% 49.67%,
//       #dc0936 -1.01deg,
//       #f07a16 59.21deg,
//       #efe61f 90.23deg,
//       #1a9d40 119.3deg,
//       #209b6c 148.36deg,
//       #169ed8 179.66deg,
//       #193e8e 210.19deg,
//       #881f7e 269.1deg,
//       #d80681 299.83deg,
//       #dc0936 358.99deg,
//       #f07a16 419.21deg
//     );
//     filter: blur(6px);
//   }
// `

const bg = css`
  border-radius: 100%;
  /* border-style: solid; */
  /* border-color: ${({ show }) =>
    show ? "var(--text-color)" : "var(--bg-color)"}; */
  /* border-width: ${() => usePx(1.5)}; */
  background: ${({ show }) => (show ? "var(--bg-color)" : "var(--text-color)")};
  transition: var(--transition);

  box-shadow: 0 0 0px ${() => usePx(1)}
    ${({ show }) => (show ? "var(--text-color)" : "var(--bg-color)")} inset;
  border: none;
  padding: ${() => usePx(7)};
  ${sm} {
    padding: ${() => usePx(3)};
  }
  /* box-sizing: content-box; */
`

const Button = styled.button`
  --webkit-appearance: none;
  position: fixed;
  z-index: 10;
  right: ${() => usePx(12)};
  top: ${() => usePx(35)};
  cursor: pointer;
  padding: 0;
  width: ${() => usePx(100)};
  height: ${() => usePx(100)};
  margin: 0;
  outline: none;
  transition: var(--transition);
  display: flex;
  justify-content: center;
  align-items: center;
  ${bg};

  ${sm} {
    right: ${() => usePx(10)};
    top: ${() => usePx(20)};
    width: ${() => usePx(35)};
    height: ${() => usePx(35)};
  }

  /* border: none; */
  span {
    ${bg};
    /* transform-style: preserve-3d; */
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    width: 100%;
    height: 100%;
    border: none;
    /* background: red; */
  }

  & > span {
    /* width: 85%;
    height: 85%; */
    ${sm} {
      /* width: ${() => usePx(30)};
      height: ${() => usePx(30)}; */
    }
    & > span {
      /* width: 70%;
      height: 70%; */
      pointer-events: none;
      box-sizing: border-box;
      ${sm} {
        /* width: ${() => usePx(25)};
        height: ${() => usePx(25)}; */
      }
    }
  }
`

const magickButton = () => {
  const { showColors, setShowColors } = useContext(AppContext)
  return (
    <Button show={showColors} onClick={() => setShowColors(!showColors)}>
      <span>
        <span></span>
      </span>
    </Button>
  )
}

export default magickButton
