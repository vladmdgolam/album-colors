import styled from "styled-components"
import usePx from "@/hooks/usePx"
import { sm } from "@/data/constants"

// export const H1 = styled.h1`
//   font-size: calc(var(--px) * 105);
//   line-height: 0.95;
//   letter-spacing: -0.03em;

//   ${sm} {
//     /* font-size: calc(var(--px) * 105); */
//   }
// `
export const H2 = styled.h2`
  margin-bottom: ${() => usePx(36)};
  ${sm} {
    margin-bottom: ${() => usePx(20)};
  }
`

export const Link = styled.a`
  text-decoration: underline;
`

export const Caption = styled.p`
  font-size: ${() => usePx(32)};
  line-height: 1;
  font-style: italic;
  letter-spacing: -0.03em;
  margin-bottom: ${() => usePx(6)};
  ${sm} {
    margin-bottom: ${() => usePx(0)};
    font-size: ${() => usePx(14)};
  }
`

export const Number = styled.span`
  font-size: ${() => usePx(16)};
  line-height: 1.125;
  letter-spacing: -0.03em;
  ${sm} {
    font-size: ${() => usePx(12)};
  }
`
