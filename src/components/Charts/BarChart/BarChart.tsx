import style from "./BarChart.module.css";

export const BarChart = ({ stats, title }: IProps) => {
  const getMaxDataPoint = () => {
    return Math.max(...stats.map((d) => d.value));
  };

  return (
    <BarChart.Container title={title}>
      {stats &&
        stats.map((s: { name: string; value: number }, idx: number) => (
          <li
            key={s.name}
            style={
              {
                gridRow: `${getMaxDataPoint() - s.value + 1} / span ${s.value}`,
                gridColumn: idx + 1,
              } as React.CSSProperties
            }
          >
            {s.name}
            <span>{s.value}</span>
          </li>
        ))}
    </BarChart.Container>
  );
};

const BarChartContainer = ({ children, title }) => (
  <section>
    <h2>{title}</h2>
    <ul className={style.chart} id="chart">
      {children}
    </ul>
  </section>
);

BarChart.Container = BarChartContainer;

interface IProps extends IChart {
  title?: string;
}
