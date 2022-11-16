import { FC } from "react";
import "./BarChart.css";

export const BarChart: FC<IChart> = ({ stats, title }) => {
  return (
    <section className="chart">
      <h2>{title}</h2>
      <ul className="chart_list">
        {stats &&
          stats.map((d) => (
            <li style={{ gridColumn: `span ${d.value}` }}>
              {d.name}:<span>{d.value}</span>
            </li>
          ))}
      </ul>
    </section>
  );
};
