import React, { ReactNode } from "react";
import styles from "./Layout.module.css";

type Props = {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ header, footer, children }) => {
  return (
    <div className={styles.container}>
      {header && <header className={styles.header}>{header}</header>}
      <main className={styles.main}>{children}</main>
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </div>
  );
};

export default Layout;
