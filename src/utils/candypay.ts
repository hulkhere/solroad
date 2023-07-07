import { CandyPay } from "@candypay/checkout-sdk";

export const candypay = new CandyPay({
  api_keys: {
    private_api_key: "cp_private_34z5edXP_5o91VcyBe1j6KJaWEkFewzwv",
    public_api_key: "cp_public_dwXgSgKb_HSfcoKk2uvir6cVW384HFxvP",
  },
  network: "devnet",
  config: {
    collect_shipping_address: false,
  },
});
