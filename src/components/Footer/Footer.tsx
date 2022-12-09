import { FC, PropsWithChildren } from "react";
import style from "./Footer.module.css";

export const Footer: FC<IFooter> = ({ children }) => {
  return <footer className={style.footer}>{children}</footer>;
};

interface IFooter extends PropsWithChildren {}
