import classNames from "classnames";
import * as React from "react";
import style from "./Stack.module.css";

export const Stack: React.FC<StackProps> = ({
  children,
  spacing,
  wrap,
  direction = "row",
}) => (
  <div
    style={{
      gap: `${spacing * 0.25}rem`,
    }}
    className={classNames(style.container, {
      [style.column]: direction === "column" && "column",
      [style.wrap]: wrap,
    })}
  >
    {children}
  </div>
);

interface StackProps {
  children: React.ReactNode;
  spacing: number;
  wrap: boolean;
  direction: "row" | "column";
}
