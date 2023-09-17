import { PropsWithChildren, useState } from "react";
import style from "./ScrollIndicator.module.css";

export const ScrollIndicator = ({
  title,
  colour = "#04aa6d",
  children,
}: IScrollIndicator) => {
  const [scroller, setScroller] = useState(0);

  const handleScroll = (event) => {
    const height = event.currentTarget.clientHeight;
    const barHeight = event.currentTarget.scrollHeight;
    const scrollTop = event.currentTarget.scrollTop;

    setScroller(((scrollTop + height) / barHeight) * 100);
  };

  return (
    <>
      <div className={style.progressHeader}>
        <h2>{title}</h2>
        <div className={style.progressContainer}>
          <div
            className={style.progressBar}
            style={{ background: colour, width: `${scroller.toFixed(2)}%` }}
          ></div>
        </div>
      </div>

      <div onScroll={handleScroll} className={style.progressContent}>
        {children}
      </div>
    </>
  );
};

interface IScrollIndicator extends PropsWithChildren {
  title: string;
  colour?: string;
}
