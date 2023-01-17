import { Session } from 'inspector'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
const https = require("https")
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
}

export default MyApp
