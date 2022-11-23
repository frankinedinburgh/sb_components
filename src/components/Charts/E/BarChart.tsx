import { FC } from "react";
import style from "./BarChart.module.css";

export const BarChart: FC<IProps> = ({ stats, title }) => {
  const getMaxDataPoint = () => {
    return Math.max(...stats.map((d) => d.value));
  };

  return (
    <section>
      <h2>{title}</h2>
      <ul className={style.chart} id="chart">
        {stats &&
          stats.map((s: { name: string; value: number }, idx: number) => (
            <li
              key={s.name}
              style={
                {
                  gridRow: `${getMaxDataPoint() - s.value + 1} / span ${
                    s.value
                  }`,
                  gridColumn: idx + 1,
                } as React.CSSProperties
              }
            >
              {s.name}
              <span>{s.value}</span>
            </li>
          ))}
      </ul>
    </section>
  );
};

interface IProps extends IChart {
  title?: string;
}
