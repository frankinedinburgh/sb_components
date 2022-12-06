import style from "./NavbarContainer.module.css";

export const NavbarContainer = ({ children }) => {
  return <nav className={style.menu}>{children}</nav>;
};
