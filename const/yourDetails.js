import { Pulsechain } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// If used on the FRONTEND pass your 'clientId'
const sdk = new ThirdwebSDK(Pulsechain, {
  clientId: "YOUR_CLIENT_ID",
});
// --- OR ---
// If used on the BACKEND pass your 'secretKey'
const sdk = new ThirdwebSDK(Pulsechain, {
  secretKey: "YOUR_SECRET_KEY",
});

const contract = await sdk.getContract("0x1D4F18d768755C19E036055fC5E597AC6740088a");
