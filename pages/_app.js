import { Pulsechain } from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import "../styles/globals.css";

function App() {
  return (
    <ThirdwebProvider 
      activeChain={Pulsechain} 
      clientId="fb5b78b67cf8fd462d6adb08086cc98b">
      <Component />
    </ThirdwebProvider>
  )
}

export default App;
