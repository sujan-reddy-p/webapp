export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  tags: string[];
  href?: string;
  repository?: string;
  accent: string;
};

/**
 * Keep portfolio content here. New projects can be added without changing the
 * page structure or visual system.
 */
export const projects: Project[] = [];

export const profile = {
  name: "Sujan",
  role: "Early-career software engineer",
  email: "",
  github: "",
  linkedin: "",
};
