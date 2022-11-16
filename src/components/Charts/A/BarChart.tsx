import { FC } from "react";
import "./BarChart.css";

const BarGroup: FC<IBarGroup> = ({
  barHeight,
  item,
  barColour = "#348AA7",
  barPadding = 2,
}) => {
  let widthScale = (d) => d * 10;

  let width = widthScale(item.value);
  let yMid = barHeight * 0.5;

  return (
    <g className="bar-group">
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

export const BarChart: FC<IChart> = ({ stats = [], title }) => {
  let barHeight = 30;

  let barGroups = stats.map((d, i) => (
    <g transform={`translate(0, ${i * barHeight})`}>
      <BarGroup item={d} barHeight={barHeight} />
    </g>
  ));

  return (
    <svg width="800" height="300">
      <g className="container">
        <text className="title" x="10" y="30">
          {title}
        </text>
        <g className="chart" transform="translate(100,60)">
          {barGroups}
        </g>
      </g>
    </svg>
  );
};
