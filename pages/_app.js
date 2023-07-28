import { Pulsechain } from "@thirdweb-dev/chains";
import { ThirdwebProvider} from "@thirdweb-dev/react";
import { clientId } from "../const/yourDetails"
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider 
      activeChain={Pulsechain} 
      clientId={clientId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default App;
