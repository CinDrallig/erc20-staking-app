import { Pulsechain } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// If used on the FRONTEND pass your 'clientId'
const sdk = new ThirdwebSDK(Pulsechain, {
  clientId: "fb5b78b67cf8fd462d6adb08086cc98b",
});
// --- OR ---
// If used on the BACKEND pass your 'secretKey'
const sdk = new ThirdwebSDK(Pulsechain, {
  secretKey: "mCicoRCbEq0C_ZaoQKLiHiA9YSsp-kClhMQveKnSoJbVZvC6jvCunNWhNAnQXYae0KtrQqnMeHSIKPxF5mi36Q",
});

const contract = await sdk.getContract("0x1D4F18d768755C19E036055fC5E597AC6740088a");
