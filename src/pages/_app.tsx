// import "../styles/globals.css"
import { Provider } from "react-redux"
import type { AppProps } from "next/app"
import store from "../app/store"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/Global"
import theme from "../styles/theme"
import React from "react"

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}

export default CustomApp