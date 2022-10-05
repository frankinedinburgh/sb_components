import classlist from "classnames";
export const TextInput = ({
  name,
  value,
  className,
  onChange,
  placeholder,
  label = "",
  error,
}: Partial<ITextInput>) => {
  return (
    <div className={classlist({ [className]: !!className })}>
      <label htmlFor={name}>
        {label}
        <input
          name={name}
          type="text"
          value={value}
          className={""}
          onChange={onChange}
          placeholder={placeholder}
        />
      </label>

      {error && <p>{error}</p>}
    </div>
  );
};

interface ITextInput {
  name: string;
  value: string;
  className: string;
  onChange: () => void;
  placeholder: string;
  label: string;
  error?: string;
}
