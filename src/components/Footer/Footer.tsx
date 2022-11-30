import { FC, PropsWithChildren } from "react";
import style from "./Footer.module.css";

export const Footer: FC<IFooter> = ({ children }) => {
  return (
    <footer className={style.footer}>
      <div>
        <h3>Your Recent Activities</h3>
        <ul>
          <li>
            <a href="#">Lunch Run</a>
          </li>
          <li>
            <a href="#">Afternoon Run</a>
          </li>
          <li>
            <a href="#">Evening Run</a>
          </li>
          <li>
            <a href="#">Evening Run</a>
          </li>
          <li>
            <a href="#">Afternoon Run</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Strava Blog</h3>
        <p>
          <a href="#">Read our blog</a> - adventure stories, training tips and
          insights from the community.{" "}
        </p>
      </div>
    </footer>
  );
};

interface IFooter extends PropsWithChildren {}
