import { FC } from "react";
import styles from "./BarChart.module.css";

export const BarChart: FC<IChart> = ({ stats, title, subHeader }) => {
  return (
    <section className={styles.chart}>
      <h2>{title}</h2>
      {subHeader && <p>{subHeader}</p>}
      <ul className={styles.chart_list}>
        {stats &&
          stats.map((d, idx) => {
            if (d.value) {
              return (
                <li
                  style={{
                    gridColumn: `span ${d.value}`,
                    gridRowStart: idx + 1,
                  }}
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
