import { PropsWithChildren, ReactNode } from "react";
import styles from "./Layout.module.css";

export const Layout = ({
  navbar,
  header,
  aside,
  children,
  footer,
}: ILayout) => {
  return (
    <div className={styles.grid}>
      {!!navbar && navbar}
      <header>{!!header && header}</header>
      <main>{children}</main>
      <aside>{!!aside && aside}</aside>
      <footer>{!!footer && footer}</footer>
    </div>
  );
};

interface ILayout extends PropsWithChildren {
  navbar?: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  aside?: ReactNode;
}
