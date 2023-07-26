import { Pulsechain } from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";

function App() {
  return (
    <ThirdwebProvider 
      activeChain={ Pulsechain } 
      clientId="fb5b78b67cf8fd462d6adb08086cc98b" // You can get a client id from dashboard settings
    >
      <Component />
    </ThirdwebProvider>
  )
}

function Component() {
  const { contract, isLoading } = useContract("0x1D4F18d768755C19E036055fC5E597AC6740088a");
}
