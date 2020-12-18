import { createContext } from "react"

const AppContext = createContext({
  showColors: false,
  setShowColors: null,

  // state: "intro",
  // setState: null,
  
  // menuOpened: false,
  // setMenuOpened: null,

  // loaded: false,
  // setLoaded: null,
})

export const AppProvider = AppContext.Provider

export default AppContext
