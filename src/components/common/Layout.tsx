import React, { useState, ReactNode, FC } from "react";
import DrawerMenu from "../ui/DrawerMenu/DrawerMenu";
import TopBar from "../ui/TopBar/TopBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen  bg-white dark:bg-gradient-to-t from-black via-gray-950 to-gray-900">
      <DrawerMenu isMenuOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-grow flex flex-col">
        <TopBar isMenuOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-grow overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
