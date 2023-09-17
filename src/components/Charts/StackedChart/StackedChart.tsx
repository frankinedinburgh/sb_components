import { PropsWithChildren } from "react";
import style from "./StackedChart.module.css";

export interface IStat extends PropsWithChildren {
  value: number;
  color: string;
}

export interface IStackedChartProps extends PropsWithChildren {
  stats: IStat[];
}

const StackedChartContainer: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={style.row}>
    <div className={style.label}>Reps: </div>
    <div className={style["bar-container"]}>{children}</div>
  </div>
);

const StackedChartItem: React.FC<IStat> = ({ value, color, children }) => (
  <div
    className={style.bar}
    style={{ flexBasis: `${value}%`, backgroundColor: color }}
  >
    {children}
  </div>
);

export const StackedChart: React.FC<IStackedChartProps> & {
  Item: React.FC<IStat>;
  Container: React.FC<PropsWithChildren>;
} = ({ stats }) => {
  const total = stats.reduce((acc, { value }) => acc + value, 0);

  const getPercentage = (val: number) => Math.floor((val / total) * 100);

  return (
    <StackedChart.Container>
      {stats.map((stat) => (
        <StackedChart.Item key={stat.color} {...stat}>
          {getPercentage(stat.value)}%
        </StackedChart.Item>
      ))}
    </StackedChart.Container>
  );
};

StackedChart.Item = StackedChartItem;
StackedChart.Container = StackedChartContainer;
