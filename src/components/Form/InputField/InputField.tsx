import classlist from "classnames";
import style from "./InputField.module.css";

export const InputField = ({
  type = "text",
  name,
  value,
  min,
  max,
  className,
  onChange,
  placeholder,
  label = "",
  error,
}: Partial<IInputField>) => {
  return (
    <div className={classlist({ [className]: !!className })}>
      <label htmlFor={name}>
        {label}
        <input
          name={name}
          type={type}
          value={value}
          min={min}
          max={max}
          className={style["text-input"]}
          onChange={onChange}
          placeholder={placeholder}
        />
      </label>

      {error && <p>{error}</p>}
    </div>
  );
};
