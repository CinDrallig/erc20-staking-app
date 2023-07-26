import { Pulsechain } from "@thirdweb-dev/chains";
import { ThirdwebProvider} from "@thirdweb-dev/react";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider 
      activeChain={Pulsechain} 
      clientId="fb5b78b67cf8fd462d6adb08086cc98b">
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default App;
