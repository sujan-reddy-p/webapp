import type { Metadata } from "next";
import { PortfolioExperience } from "@/components/portfolio-experience";

export const metadata: Metadata = {
  title: "Explore — Sujan",
  description: "A visual collection of products, experiments, and work in progress.",
};

export default function ExplorePage() {
  return (
    <div className="relative">
      <PortfolioExperience />
    </div>
  );
}
