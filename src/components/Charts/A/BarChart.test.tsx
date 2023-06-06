import React from "react";
import { render } from "@testing-library/react";
import BarChart from "./BarChart";

describe("BarChart", () => {
  it("renders the bar chart with the provided stats", () => {
    const stats = [
      { name: "Category 1", value: 50 },
      { name: "Category 2", value: 30 },
      { name: "Category 3", value: 20 },
    ];

    const { getByText } = render(
      <BarChart
        stats={stats}
        title="Example Bar Chart"
        barColour="#c3c3c3"
        barHeight={30}
      />
    );

    // Check if the title is rendered
    const titleElement = getByText("Example Bar Chart");
    expect(titleElement).toBeInTheDocument();

    // Check if each category name and value are rendered
    stats.forEach((stat) => {
      const nameLabel = getByText(stat.name);
      const valueLabel = getByText(`${stat.value}`);
      expect(nameLabel).toBeInTheDocument();
      expect(valueLabel).toBeInTheDocument();
    });
  });
});
