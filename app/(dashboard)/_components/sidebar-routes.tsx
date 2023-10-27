"use client";

import { BarChart, BookmarkIcon, Compass, DollarSign, FileEdit, HomeIcon, Layout, List, User2 } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: HomeIcon,
    label: "Home",
    href: "/home",
  },
  {
    icon: User2,
    label: "About",
    href: "/about",
  },
  {
    icon: DollarSign,
    label: "Pricing",
    href: "/pricing",
  },
  {
    icon: FileEdit,
    label: "Blog",
    href: "/blog",
  },
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  }
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
]

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}