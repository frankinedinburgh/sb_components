import { PropsWithChildren, ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./Layout.module.css";

export const Layout = ({ header, aside, children }) => {
  return (
    <div className={styles.grid}>
      <Navbar title={"Strength & Fitness"} hasSubMenu={false} />
      {!!header && header}
      <main>{children}</main>
      {!!aside && aside}
      <Footer />
    </div>
  );
};

interface ILayout extends PropsWithChildren {
  header?: ReactNode;
  aside?: ReactNode;
}
