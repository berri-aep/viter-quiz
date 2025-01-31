

import { ChartColumnStacked, Clapperboard, LayoutDashboard, Megaphone, MegaphoneIcon, Star, UtensilsCrossed } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const SideNavigation = ({ menu }) => {
  const links = [
    {
      title: "Dashboard",
      slug: "/admin/dashboard",
      icon: <LayoutDashboard  size={20}/>,
    },
    {
      title: "Question",
      slug: "/admin/question",
      icon: <Megaphone  size={20}/>,
    },
  ];
  return (
    <aside className="p-4 border-r border-line">
        <h1>Quiz</h1>

      <nav>
        <ul className="mt-10">
          {links.map((item, key) => (
            <li
              className={`${
                menu === item.slug.replace("/admin/", "")
                  ? "border border-accent bg-accent  text-white opacity-100"
                  : ""
              } p-2 mb-2 rounded-md border border-transparent opacity-60 hover:opacity-100 duration-500`}
              key={key}
            >
              <NavLink to={`${item.slug}`} className="flex gap-2 text-base items-center">
                {item.icon}
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavigation;
