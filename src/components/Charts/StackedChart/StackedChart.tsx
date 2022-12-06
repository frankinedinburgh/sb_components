import { CSSProperties } from "react";
import style from "./StackedChart.module.css";

export const StackedChart = ({ stats }) => {
  const total = [...stats.map(({ value }) => value)].reduce(
    (acc, val) => acc + +val,
    0
  );

  const percentage = (val) => Math.floor((val / total) * 100);

  return (
    <StackedChart.Container>
      {stats.map((stat) => (
        <StackedChart.Item
          color={stat.color}
          value={`${percentage(stat.value)}%`}
        >
          {percentage(stat.value)}%
        </StackedChart.Item>
      ))}
    </StackedChart.Container>
  );
};

const StackedContainer = ({ children }) => (
  <div className={style.row}>
    <div className={style.label}>Reps: </div>
    <div className={style["bar-container"]}>{children}</div>
  </div>
);

const StackedItem = ({ value, color, children }) => (
  <div
    className={style.bar}
    style={
      {
        flexBasis: value,
        backgroundColor: color,
      } as CSSProperties
    }
  >
    {children}
  </div>
);

StackedChart.Item = StackedItem;
StackedChart.Container = StackedContainer;
