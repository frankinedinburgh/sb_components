import { FC } from "react";
import styles from "./BarChart.module.css";

const BarGroup: FC<IBarGroup> = ({
  barHeight,
  item,
  barColour,
  barPadding = 2,
}) => {
  let widthScale = (d) => d * 10;

  let width = widthScale(item.value);
  let yMid = barHeight * 0.5;

  return (
    <g className={styles["bar-group"]}>
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle">
        {item.name}
      </text>
      <rect
        y={barPadding * 0.5}
        width={width}
        height={barHeight - barPadding}
        fill={barColour}
      />
      <text
        className="value-label"
        x={width - 8}
        y={yMid}
        alignmentBaseline="middle"
      >
        {item.value}
      </text>
    </g>
  );
};

export const BarChart: FC<IBarChart> = ({
  stats = [],
  barColour = "#c3c3c3",
  title,
  barHeight = 30,
}) => {
  return (
    <svg width="800" height="300">
      <g className={styles.container}>
        <text className="title" x="10" y="30">
          {title}
        </text>
        <g className={styles.chart} transform="translate(100,60)">
          {stats.map((d, i) => (
            <g
              key={`${d.name}-${i}`}
              transform={`translate(0, ${i * barHeight})`}
            >
              <BarGroup item={d} barHeight={barHeight} barColour={barColour} />
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
};

interface IBarChart extends IChart {
  title?: string;
  barColour?: string;
  barHeight?: number;
}
