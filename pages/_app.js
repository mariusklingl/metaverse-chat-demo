import '../styles/globals.css'

import { MoralisProvider } from "react-moralis";
import de from 'javascript-time-ago/locale/de'
import TimeAgo from 'javascript-time-ago'

TimeAgo.setDefaultLocale(de)


function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={process.env.NEXT_PUBLIC_appId} serverUrl={process.env.NEXT_PUBLIC_serverUrl}>
      <Component {...pageProps} />
    </MoralisProvider>
  )

}

export default MyApp
