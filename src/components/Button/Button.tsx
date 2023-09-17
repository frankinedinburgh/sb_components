import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import style from "./Button.module.css";

export const Button: FC<Partial<IButton>> = ({
  type = "button",
  primary = false,
  backgroundColor = null,
  size = "medium",
  rounded = false,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={classNames(style.button, {
        [style["button--small"]]: size === "small",
        [style["button--medium"]]: size === "medium",
        [style["button--large"]]: size === "large",
        [style["button--primary"]]: primary,
        [style["button--secondary"]]: !primary,
        [style["button--rounded"]]: rounded,
      })}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {children || "Submit"}
    </button>
  );
};

interface IButton extends PropsWithChildren {
  type: "button" | "submit" | "reset";
  primary: boolean;
  backgroundColor: string;
  size: "small" | "medium" | "large";
  onClick: () => void;
  rounded: boolean;
  disabled: boolean;
}
