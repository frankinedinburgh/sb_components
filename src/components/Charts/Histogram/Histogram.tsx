import cn from "classnames";
import style from "./Histogram.module.css";

export const Histogram = ({ stats }) => (
  <Histogram.Container>
    {stats.map((stat) => (
      <Histogram.Item values={stat} />
    ))}
  </Histogram.Container>
);

const HistogramContainer = ({ children }) => (
  <div className={style.columns}>{children}</div>
);

const HistogramItem = ({ values }) => {
  const [A, B] = values;
  return (
    <div className={style["column-container"]}>
      <div
        className={cn(style["column-bar"], style["series-b"])}
        style={{ flexBasis: B }}
      ></div>
      <div
        className={cn(style["column-bar"], style["series-a"])}
        style={{ flexBasis: A }}
      ></div>
    </div>
  );
};

Histogram.Item = HistogramItem;
Histogram.Container = HistogramContainer;
