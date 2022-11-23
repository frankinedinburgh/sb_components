import { FC, ReactNode } from "react";
import styles from "./BarChart.module.css";

export const BarChart: FC<IProps> = ({ stats, title, subHeader }) => {
  return (
    <section className={styles.chart}>
      {title}
      {subHeader && <p>{subHeader}</p>}
      <ul className={styles.chart_list}>
        {stats &&
          stats.map((d, idx) => {
            if (d.value) {
              return (
                <li
                  style={
                    {
                      gridColumn: `span ${d.value}`,
                      gridRowStart: idx + 1,
                    } as React.CSSProperties
                  }
                >
                  {d.name}:<span>{d.value}</span>
                </li>
              );
            }
          })}
      </ul>
    </section>
  );
};

interface IProps extends IChart {
  title?: ReactNode | string;
}
