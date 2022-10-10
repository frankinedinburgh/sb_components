import { FC, PropsWithChildren } from "react";
import style from "./Grid.module.css";

export const Grid: FC<IGrid> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

interface IGrid extends PropsWithChildren {}
