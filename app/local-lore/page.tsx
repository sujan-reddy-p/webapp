import { permanentRedirect } from "next/navigation";

const LOCAL_LORE_URL = "https://local-lore-five.vercel.app/";

export default function LocalLorePage() {
  permanentRedirect(LOCAL_LORE_URL);
}
