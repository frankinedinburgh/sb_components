import { FC } from "react";
import style from "./Workout.module.css";

export const Workout: FC<Partial<IWorkout>> = ({
  date,
  comment,
  push,
  pull,
  legs,
}) => {
  return (
    <article className={style.article}>
      {date && (
        <div className={style.article__header}>
          <h4>{new Date(date).toDateString()}</h4>
        </div>
      )}
      <div className={style.article__body}>
        <p>{comment}</p>
      </div>
      <div className={style.article__footer}>
        <div>Pull: </div>
        <div>{pull} </div>
        <div>Push: </div>
        <div>{push} </div>
        <div>Legs: </div>
        <div>{legs}</div>
      </div>
    </article>
  );
};

interface IWorkout {
  comment: string;
  push: number;
  pull: number;
  legs: number;
  date: string;
}
