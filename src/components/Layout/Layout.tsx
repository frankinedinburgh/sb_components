import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./Layout.module.css";

export const Layout: FC<ILayout>  = ({
  navbar,
  header,
  aside,
  children,
  footer,
}: ILayout) => {
  return (
    <div className={styles.grid}>
      {navbar && <div className={styles.navbar}>{navbar}</div>}
      <header>{header}</header>
      <main>{children}</main>
      {aside && <aside className={styles.aside}>{aside}</aside>}
      <footer>{footer}</footer>
    </div>
  );
};

interface ILayout extends PropsWithChildren {
  navbar?: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  aside?: ReactNode;
}
