import { PropsWithChildren } from "react";
import style from "./Form.module.css";

export const Form = ({ children }: IForm) => {
  return <div className={style.form}>{children}</div>;
};

interface IForm extends PropsWithChildren {}
