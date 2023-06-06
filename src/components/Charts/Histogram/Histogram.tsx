import React from "react";
import styles from "./Histogram.module.css";

export interface HistogramChartProps {
  data: number[];
  barColor: string;
  barWidth: number;
  barSpacing: number;
}

const HistogramChart: React.FC<HistogramChartProps> = ({
  data,
  barColor,
  barWidth,
  barSpacing,
}) => {
  const maxValue = Math.max(...data);

  return (
    <svg
      className={styles.chart}
      width={`${data.length * (barWidth + barSpacing)}`}
      height={`${maxValue}`}
    >
      {data.map((value, index) => (
        <g key={index}>
          <rect
            x={index * (barWidth + barSpacing)}
            y={maxValue - value}
            width={barWidth}
            height={value}
            fill={barColor}
            className={styles.bar}
          />
          <text
            x={index * (barWidth + barSpacing) + barWidth / 2}
            y={maxValue + 15}
            className={styles.label}
          >
            {value}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default HistogramChart;
