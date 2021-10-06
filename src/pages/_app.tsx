// import '../styles/globals.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import store from '../app/store'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from "../styles/Global"
import theme from  '../styles/theme'

interface CustomAppProps extends AppProps {}

const CustomApp : React.FC<CustomAppProps> = ({Component, pageProps}) => {
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

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   )
// }
