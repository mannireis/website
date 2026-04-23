export const projects = [
  {
    title: "My personal website",
    description: "This website your in !!",
    image: "/images/website.png",
    github: "https://github.com/mannireis/website",
    tags: ["featured", "software", "ongoing"] as const,
  },
  {
    title: "Relic Keyboard",
    description: "A split keyboard i use everyday",
    image: "/images/keyboard.jpg",
    github: "https://github.com/mannireis/relic",
    tags: ["featured", "hardware", "complete"] as const,
  },
  {
    title: "Subway Surface",
    description: "My submision for campfire lisbon",
    image: "/images/subway-surface.png",
    github: "https://github.com/mannireis",
    tags: ["featured", "software", "paused"] as const,
  },
];

export const featuredProjects = projects.filter((p) =>
  p.tags.includes("featured"),
);
