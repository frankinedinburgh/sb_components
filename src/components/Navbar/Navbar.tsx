import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { fetcher, setToken, unsetToken, useUser } from "src/lib";
import style from "./Navbar.module.css";

export const Navbar = ({
  title = "Creative Mind Agency",
  hasSubMenu = false,
}: INavbar) => {
  const [data, setData] = useState({
    identifier: "",
    password: "",
  });

  const { user, loading } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify({
          identifier: data.identifier,
          password: data.password,
        }),
      }
    );

    try {
      setToken(result);
    } catch (_) {
      console.log(result.error.message);
    }
  };

  const logout = () => {
    unsetToken();
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <nav>
      <ul className={style.menu}>
        <li className={style.logo}>
          <Link href="/workouts">{title}</Link>
        </li>
        <li className={style.item}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.item}>
          <Link href="/workouts">Workouts</Link>
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
          <Link href="#">Add a Workout</Link>
        </li>
        <li className={style.item}>
          <Link href="#">Contact</Link>
        </li>
        {!loading &&
          (user ? (
            <li>
              <Link href="/profile">
                <a className="md:p-2 py-2 block hover:text-purple-400">
                  Profile
                </a>
              </Link>
            </li>
          ) : (
            ""
          ))}
        {!loading &&
          (user ? (
            <li>
              <a
                className="md:p-2 py-2 block hover:text-purple-400"
                onClick={logout}
                style={{ cursor: "pointer" }}
              >
                Logout
              </a>
            </li>
          ) : (
            ""
          ))}
        {!loading && !user ? (
          <>
            <li className={classNames(style.item, style.button)}>
              <form onSubmit={handleSubmit} className="form-inline">
                <input
                  type="text"
                  name="identifier"
                  onChange={handleChange}
                  placeholder="Username"
                  className="md:p-2 form-input py-2 rounded mx-2"
                  required
                />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  className="md:p-2 form-input py-2 rounded mx-2"
                  required
                />

                <button
                  className="md:p-2 rounded py-2 text-black bg-purple-200 p-2"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </li>

            <li
              className={classNames(style.item, style.button, style.secondary)}
            >
              <Link href="#">Sign Up</Link>
            </li>
          </>
        ) : (
          ""
        )}
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
