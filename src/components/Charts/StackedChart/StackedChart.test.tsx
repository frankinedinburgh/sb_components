import React from "react";
import { render } from "@testing-library/react";
import StackedChart from "./StackedChart";

describe("StackedChart", () => {
  it("renders the stacked chart with the provided stats", () => {
    const stats = [
      { value: 50, color: "red" },
      { value: 30, color: "blue" },
      { value: 20, color: "green" },
    ];

    const { container, getByText } = render(<StackedChart stats={stats} />);

    // Check if the chart container is rendered
    const chartContainer = container.querySelector(".row");
    expect(chartContainer).toBeInTheDocument();

    // Check if each stat item is rendered with the correct value and color
    stats.forEach((stat) => {
      const statItem = getByText(`${stat.value}%`);
      expect(statItem).toBeInTheDocument();
      expect(statItem).toHaveStyle(`background-color: ${stat.color}`);
    });
  });
});
