import style from "./SubMenu.module.css";

export const SubMenu = ({ children }) => {
  return (
    <nav>
      <ul className={style.menu}>{children}</ul>
    </nav>
  );
};
