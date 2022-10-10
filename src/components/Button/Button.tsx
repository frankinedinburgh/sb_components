import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import style from "./Button.module.css";

export const Button: FC<Partial<IButton>> = ({
  primary = false,
  backgroundColor = null,
  size = "medium",
  label = null,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={classNames(style.button, {
        [style["button--small"]]: size === "small",
        [style["button--medium"]]: size === "medium",
        [style["button--large"]]: size === "large",
        [style["button--primary"]]: primary,
        [style["button--secondary"]]: !primary,
      })}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {children ? children : label}
    </button>
  );
};

interface IButton extends PropsWithChildren {
  primary: boolean;
  backgroundColor: string;
  size: "small" | "medium" | "large";
  label: string;
  onClick: () => void;
}
