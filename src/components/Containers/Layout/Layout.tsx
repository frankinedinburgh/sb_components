import * as React from "react";
import style from "./Layout.module.css";

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className={style["flex-container"]}>{children}</div>
);

interface LayoutProps {
  children: React.ReactNode;
}
