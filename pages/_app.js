import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Pulsechain } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
const activeChain = "pulsechain";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
