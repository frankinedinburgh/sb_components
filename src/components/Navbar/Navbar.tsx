import React, { useState } from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./Navbar.module.css";

export interface ILink {
  id: string;
  url: string;
  label: string;
  active?: boolean;
}

export interface INavigationBarProps {
  links: ILink[];
  isLoggedIn?: boolean;
}

const Navbar: React.FC<INavigationBarProps> = ({ links, isLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navigationBar}>
      <button className={styles.hamburgerMenu} onClick={toggleMenu}>
        <span
          className={cn(styles.hamburgerIcon, { [styles.open]: menuOpen })}
        ></span>
      </button>
      <ul
        className={cn(styles.navList, {
          [styles.open]: menuOpen,
        })}
      >
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.url} legacyBehavior>
              <a className={link.active ? styles.active : ""}>{link.label}</a>
            </Link>
          </li>
        ))}
        {!isLoggedIn && (
          <li>
            <Link href="/login" legacyBehavior>
              <a className={(styles.link, styles.login)}>Login</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
