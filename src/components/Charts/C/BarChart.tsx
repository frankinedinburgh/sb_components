import { FC } from "react";
import style from "./BarChart.module.css";

export const BarChart: FC<IChart> = ({ stats }) => {
  return (
    <dl
      className={style.chart}
      style={
        {
          "--scale": 100,
        } as React.CSSProperties
      }
    >
      {stats &&
        stats.map((s: { name: string; value: number }) => (
          <>
            <dt className={style.date}>{s.name}</dt>
            <dd
              className={style.bar}
              style={
                {
                  "--start": 100 + 1 - s.value,
                } as React.CSSProperties
              }
            >
              <span className="value">{s.value}%</span>
            </dd>
          </>
        ))}
    </dl>
  );
};
