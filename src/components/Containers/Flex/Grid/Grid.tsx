import classNames from "classnames";
import * as React from "react";

import styles from "./Grid.module.css";

export const Grid: React.FC<IGridProps> = (props) => {
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
