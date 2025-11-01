import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Xue Ren Portfolio",
  DESCRIPTION: "Personal portfolio of Xue Ren — a full-stack software engineer specializing in React, TypeScript, and industrial automation integration. Building data-driven applications that connect manufacturing systems with elegant, modern web experiences.",
  AUTHOR: "Nora Ren",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "rx1996523@gmail.com",
    HREF: "mailto:rx1996523@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "Nora Ren",
    HREF: "http://github.com/NoraRen0523/xue-ren-portfolio#"
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Nora Ren",
    HREF: "https://www.linkedin.com/in/xue-ren/",
  },
  /*{
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "",
    HREF: "",
  },*/
]

