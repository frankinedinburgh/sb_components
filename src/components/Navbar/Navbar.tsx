import classNames from "classnames";
import Link from "next/link";
import style from "./Navbar.module.css";

export const Navbar = ({
  title = "Creative Mind Agency",
  hasSubMenu = false,
}: INavbar) => {
  return (
    <nav>
      <ul className={style.menu}>
        <li className={style.logo}>
          <Link href="#">{title}</Link>
        </li>
        <li className={style.item}>
          <Link href="#">Home</Link>
        </li>
        <li className={style.item}>
          <Link href="#">About</Link>
        </li>
        {hasSubMenu && (
          <>
            <li className={classNames(style.item, style["has-submenu"])}>
              <Link tabIndex={1} href={""}>
                Services
              </Link>
              <ul className={style.submenu}>
                <li className={style.subitem}>
                  <Link href="#">Design</Link>
                </li>
                <li className={style.subitem}>
                  <Link href="#">Development</Link>
                </li>
                <li className={style.subitem}>
                  <Link href="#">SEO</Link>
                </li>
                <li className={style.subitem}>
                  <Link href="#">Copywriting</Link>
                </li>
              </ul>
            </li>
            <li className={classNames(style.item, style["has-submenu"])}>
              <Link tabIndex={0} href={""}>
                Plans
              </Link>
              <ul className={style.submenu}>
                <li className={style.subitem}>
                  <Link href="#">Freelancer</Link>
                </li>
                <li className={style.subitem}>
                  <Link href="#">Startup</Link>
                </li>
                <li className={style.subitem}>
                  <Link href="#">Enterprise</Link>
                </li>
              </ul>
            </li>
          </>
        )}
        <li className={style.item}>
          <Link href="#">Blog</Link>
        </li>
        <li className={style.item}>
          <Link href="#">Contact</Link>
        </li>
        <li className={classNames(style.item, style.button)}>
          <Link href="#">Log In</Link>
        </li>
        <li className={classNames(style.item, style.button, style.secondary)}>
          <Link href="#">Sign Up</Link>
        </li>
        <li className={style.toggle}>
          <Link href="#">
            <i className="fas fa-bars"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

interface INavbar {
  title: string;
  hasSubMenu: boolean;
}
