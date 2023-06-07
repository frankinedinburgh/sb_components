import { FC } from "react";
import styles from "./BarChart.module.css";

export interface IBarGroup {
  barHeight: number;
  item: { name: string; value: number };
  barColour: string;
  barPadding?: number;
}

const BarGroup: FC<IBarGroup> = ({
  barHeight,
  item,
  barColour,
  barPadding = 2,
}) => {
  const widthScale = (d: number) => d * 10;
  const width = widthScale(item.value);
  const yMid = barHeight * 0.5;

  return (
    <g className={styles["bar-group"]}>
      <text
        className={styles["name-label"]}
        x="-6"
        y={yMid}
        alignmentBaseline="middle"
      >
        {item.name}
      </text>
      <rect
        y={barPadding * 0.5}
        width={width}
        height={barHeight - barPadding}
        fill={barColour}
      />
      <text
        className={styles["value-label"]}
        x={width - 8}
        y={yMid}
        alignmentBaseline="middle"
      >
        {item.value}
      </text>
    </g>
  );
};

export interface IBarChart {
  stats?: Array<{ name: string; value: number }>;
  barColour?: string;
  title?: string;
  barHeight?: number;
}

export const BarChart: FC<IBarChart> = ({
  stats = [],
  barColour = "#c3c3c3",
  title,
  barHeight = 30,
}) => {
  return (
    <svg width="800" height="300">
      <g className={styles.container}>
        <text className={styles.title} x="10" y="30">
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
