import type { Metadata } from "next";
import { ConvergenceCaseStudy } from "@/components/convergence-case-study";

export const metadata: Metadata = {
  title: "Convergence — Technical case study",
  description: "How Convergence discovers specialist Polymarket wallets and turns independent same-side agreement into auditable signals.",
};

export default function ConvergencePage() {
  return <ConvergenceCaseStudy />;
}
