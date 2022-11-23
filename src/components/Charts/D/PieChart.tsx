import cn from "classnames";
import { FC } from "react";
import style from "./PieChart.module.css";

export const PieChart: FC<IPieChart> = ({
  percentage,
  colour = "darkblue",
  padding = 10,
  rounded = false,
}) => {
  return (
    <>
      <div
        className={cn({
          [style.pie]: true,
          [style.animate]: true,
          [style["no-round"]]: !rounded,
        })}
        style={
          {
            "--p": percentage,
            "--c": colour,
            "--b": `${padding}px`,
          } as React.CSSProperties
        }
      >
        {percentage}%
      </div>
    </>
  );
};
