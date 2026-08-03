import { redirect } from "next/navigation";

export default function Home() {
  // Keep the audience chooser available for a future visitor launch.
  // The public entry point is recruiter-ready for now.
  redirect("/recruiter");
}
