import { ProfileControls } from "@/components/profile-controls";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <>
      <ThemeToggle />
      <ProfileControls current="visitor" />
    </>
  );
}
