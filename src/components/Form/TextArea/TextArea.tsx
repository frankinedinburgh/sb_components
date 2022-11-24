import { FC, TextareaHTMLAttributes } from "react";
import style from "./TextArea.module.css";

export const TextAreaField: FC<TextareaHTMLAttributes<T>> = ({
  name,
  rows = 4,
  cols = 50,
  value,
}) => {
  return (
    <div className={style.textarea}>
      <label htmlFor={name}>Comment:</label>
      <textarea
        placeholder={"Enter a comment"}
        autoFocus={true}
        wrap={"on"}
        rows={rows}
        cols={cols}
        id={name}
        name={name}
        onChange={() => null}
        value={value}
      />
    </div>
  );
};
