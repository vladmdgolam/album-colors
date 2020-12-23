import styled from "styled-components"

import usePx from "@/hooks/usePx"
import { sm } from "@/data/constants"

export const ColumnRow = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  grid-template-columns: repeat(12, ${() => usePx(99)});
  column-gap: ${() => usePx(20)};

  ${sm} {
    grid-template-columns: repeat(12, ${() => usePx(18)});
    column-gap: ${() => usePx(10)};
    max-width: 420px;
  }
`
