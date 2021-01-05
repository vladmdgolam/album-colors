import styled from "styled-components"
import { ColumnRow } from "@/components/layout"
// import { Caption } from "@/components/typography"
import { sm, xl } from "@/data/constants"
import usePx from "@/hooks/usePx"

const HeaderRow = styled(ColumnRow)`
  grid-template-rows: auto;
  row-gap: ${() => usePx(50)};
  ${sm} {
    row-gap: ${() => usePx(10)};
  }
`

const Colors = styled.h1`
  margin-bottom: ${() => usePx(50)};
  padding-top: ${() => usePx(10)};
  ${sm} {
    margin-bottom: ${() => usePx(10)};
  }
`
const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  h2 {
    margin-left: ${() => usePx(30)};
    transform: scaleY(1.75);
    line-height: 1.35;
    ${sm} {
      margin-left: ${() => usePx(10)};
      font-size: ${() => usePx(14)};
    }
  }
`

const ScaledHeader = styled.header`
  grid-column: span 9;
  grid-row: 1/3;
  h1 {
    cursor: default;
    user-select: none;
  }
  ${xl} {
    /* margin-top: ${() => usePx(-25)}; */
  }
  ${sm} {
    grid-column: span 10;
  }
`

const Year = styled.h1`
  grid-row: 2/3;
  grid-column: 11/13;
  align-self: end;
  ${sm} {
    /* grid-column: span 2; */
  }
`

// const Bg = styled.div`
//   position: absolute;
//   bottom: 0;
//   height: 100%;
// `

// const FooterCircle = () => {
//   return (
//     <Bg>
//       <svg
//         width="760"
//         height="370"
//         viewBox="0 0 760 370"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect
//           x="116.5"
//           y="116.5"
//           width="526"
//           height="526"
//           rx="263"
//           stroke="var(--text-color)"
//         />
//         <rect
//           x="0.65"
//           y="0.65"
//           width="758.7"
//           height="758.7"
//           rx="379.35"
//           stroke="var(--text-color)"
//           stroke-width="1.3"
//         />
//         <rect
//           x="56.65"
//           y="58.65"
//           width="635.7"
//           height="643.7"
//           rx="317.85"
//           stroke="var(--text-color)"
//           stroke-width="1.3"
//         />
//       </svg>
//     </Bg>
//   )
// }

const Header = () => {
  return (
    <HeaderRow>
      <ScaledHeader>
        <Colors>Цвета локальных</Colors>
        <Flex>
          <div>
            <h1>альбомов</h1>
          </div>
          <h2>и синглов</h2>
        </Flex>
      </ScaledHeader>
      <Year>2020</Year>
      {/* <FooterCircle /> */}
    </HeaderRow>
  )
}

export default Header
