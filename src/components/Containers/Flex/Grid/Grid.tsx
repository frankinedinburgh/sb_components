import classNames from "classnames";
import * as React from "react";

import styles from "./Grid.module.css";

export const Grid: React.FC<GridProps> = (props) => {
  const { alignItems, children, column, expanded, justify, lg, md, row, sm } =
    props;

  const isRow: boolean = row || !column;

  const classes: string = classNames({
    // Row styling
    [styles.column]: !isRow,
    [styles.row]: isRow,
    [styles.expanded]: isRow && expanded,
    [styles[justify]]: isRow && justify,
    [styles["align-" + alignItems]]: isRow && alignItems,
    // Column styling
    [styles["sm-" + sm]]: !isRow && sm,
    [styles["md-" + md]]: !isRow && md,
    [styles["lg-" + lg]]: !isRow && lg,
  });

  return <div className={classes}>{children}</div>;
};

type GridItemsAlignment =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "baseline";

type GridJustify =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

type GridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridProps {
  alignItems?: GridItemsAlignment;
  column?: boolean;
  expanded?: boolean;
  justify?: GridJustify;
  lg?: GridSizes;
  md?: GridSizes;
  row?: boolean;
  sm?: GridSizes;
  children?: React.ReactNode | React.ReactNode[];
}
