import Link from "next/link";
import style from "./Navbar.module.css";
import { NavbarContainer } from "./NavbarContainer";

export const Navbar = ({ links }) => {
  return (
    <Navbar.Container>
      {links &&
        links.map(({ title, link }) => (
          <Link href={link} className={style.active}>
            {title}
          </Link>
        ))}
      <Link href="/login" className={style.split}>
        Log In
      </Link>
    </Navbar.Container>
  );
};

Navbar.Container = NavbarContainer;
