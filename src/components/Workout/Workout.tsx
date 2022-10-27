import { FC, PropsWithChildren } from "react";
import style from "./Workout.module.css";

export const Workout: FC<IWorkout> = ({ workout, children }) => {
  return (
    <article className={style.article}>
      {workout.date && (
        <div className={style.article__header}>
          <h3>{new Date(workout.date).toDateString()}</h3>
        </div>
      )}
      <div className={style.article__body}>
        <p>{workout.comments}</p>
      </div>
      <div className={style.article__footer}>
        <div>
          <strong>Pull:</strong>
        </div>
        <div>{workout.pull_reps || 0} </div>
        <div>
          <strong>Push:</strong>
        </div>
        <div>{workout.push_reps || 0} </div>
        <div>
          <strong>Legs:</strong>
        </div>
        <div>{workout.leg_reps || 0}</div>
        {children}
      </div>
    </article>
  );
};

interface IWorkout extends PropsWithChildren {
  workout: IWorkoutItem;
}

interface IWorkoutItem {
  date: string;
  comments: string;
  pull_reps: number | null;
  push_reps: number | null;
  leg_reps: number | null;
  exercises: {
    name: string;
    type: string;
  }[];
  session: null;
}
