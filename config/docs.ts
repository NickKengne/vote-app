import { MainNavItem, SidebarNavItem } from "../types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Explore",
      href: "/",
    },
    {
      title: "Pricing",
      href: "/#pricing",
    },
    {
      title: "login",
      href: "/auth/authentication",
    }
  ],
  sidebarNav: [
    {
      title: "",
      items: [
        {
          title: "",
          href: "#",
          items: [],
        },
        {
          title: "",
          href: "#",
          items: [],
        }
      ],
    },
  ],
}
