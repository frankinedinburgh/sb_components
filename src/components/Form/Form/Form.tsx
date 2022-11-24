import { PropsWithChildren } from "react";
import style from "./Form.module.css";

export const Form = ({ children, onSubmit }: IForm) => {
  return (
    <div className={style.form} onSubmit={onSubmit}>
      {children}
    </div>
  );
};

interface IForm extends PropsWithChildren {
  onSubmit: (e: React.SyntheticEvent) => void;
}
