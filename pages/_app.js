import "../styles/globals.css";
import {SessionProvider} from "next-auth/react"
import Auth from "./api/auth/authenticate";
function MyApp({ Component, pageProps }) {
  console.log(Component,'<<<<')
  return <SessionProvider session={pageProps.session}>
     {
          Component.controlling 
          ?
              <Component {...pageProps} />
          :
              <Auth><Component {...pageProps} /></Auth> 
     }

  </SessionProvider>;
}

export default MyApp;
