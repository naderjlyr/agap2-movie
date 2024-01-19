import { NavLink as RRNavLink } from "react-router-dom";
import { FC } from "react";

interface NavLinkProps {
  to: string;
  title: string;
}

const NavLink: FC<NavLinkProps> = ({ to, title }) => {
  return (
    <RRNavLink
      to={to}
      end
      className={({ isActive }) =>
        `block text-lg py-3 px-4 text-center w-full transition-all duration-300 ${
          isActive
            ? "bg-pink-950 text-white"
            : "text-gray-300 hover:bg-pink-900 hover:text-white"
        }`
      }
    >
      {title}
    </RRNavLink>
  );
};

export default NavLink;
