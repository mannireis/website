export const projects = [
  {
    title: "40%ish Split Keyboard",
    description: "A custom build Split Keyboard.",
    image: "/images/keyboard.jpg",
    github: "https://github.com/maker-lukas/40-ish-split-keyboard",
    tags: ["featured", "hardware", "complete"] as const,
  },
  {
    title: "print.lukasreis.com",
    description: "A website where you can leave a small message and it will auto-print on my home printer!",
    image: "/images/print.png",
    github: "https://print.lukasreis.com",
    tags: ["featured", "software", "complete"] as const,
  },
  {
    title: "B.E.T.T",
    description: "Better Enchanted Tool Textures. A Minecraft Resource pack that changes tool textures depending on the enchantments",
    image: "/images/pack.png",
    github: "https://github.com/maker-lukas/B.E.T.T",
    tags: ["software", "complete"] as const,
  },
  {
    title: "Dial",
    description: "A smooth scrolling 70mm dial with an AS5600 sensor.",
    image: "/images/dial.avif",
    github: "https://github.com/maker-lukas/scroll-dial",
    tags: ["hardware", "complete"] as const,
  },
  {
    title: "FireFly Tiny Whoop",
    description: "A custom 75mm tiny whoop drone frame",
    image: "/images/firefly.png",
    github: "https://github.com/maker-lukas/firefly-drone",
    tags: ["hardware", "complete"] as const,
  },
  {
    title: "Spotify Overlay",
    description: "A minimal, always-on-top Spotify overlay for Linux.",
    image: "/images/spotify-overlay.png",
    github: "https://github.com/maker-lukas/spotify-overlay",
    tags: ["software", "complete"] as const,
  },
  {
    title: "My personal website",
    description: "This website you're in!!",
    image: "/images/website.png",
    github: "https://github.com/mannireis/website",
    tags: ["featured", "software", "ongoing"] as const,
  },
];

export const featuredProjects = projects.filter((p) =>
  p.tags.includes("featured")
);