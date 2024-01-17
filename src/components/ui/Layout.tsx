import { ReactElement } from "react";

interface LayoutProps {
  children: ReactElement;
}
const Layout = ({ children }: LayoutProps): ReactElement => {
  return <div>{children}</div>;
};

export default Layout;
