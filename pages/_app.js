import { Pulsechain } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "Pulsechain";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}
    clientId="fb5b78b67cf8fd462d6adb08086cc98b">
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
