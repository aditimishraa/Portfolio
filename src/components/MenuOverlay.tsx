import React from "react";
import NavLink from "./NavLink";

// Define the type/interface for the links array
interface Link {
  path: string;
  title: string;
}

// Use the defined type/interface for the links prop
interface MenuOverlayProps {
  links: Link[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
