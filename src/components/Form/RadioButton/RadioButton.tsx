import { FC, PropsWithChildren, ReactElement } from "react";
import style from "./RadioButton.module.css";

export const RadioButton: FC<IProps> = ({
  name,
  value,
  onChangeHandler,
  children,
  checked,
}: IProps): ReactElement => (
  <label className={style["radio-button"]} htmlFor={name}>
    <input
      type="radio"
      value={value}
      name={name}
      onChange={onChangeHandler}
      checked={checked}
    />
    {children ? children : <span>{value}</span>}
  </label>
);

interface IProps extends IRadioButton, PropsWithChildren {}
