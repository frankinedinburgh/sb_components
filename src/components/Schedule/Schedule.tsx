import classnames from "classnames";
import { FC } from "react";
import style from "./Schedule.module.css";

export const Schedule: FC<ISchedule> = ({ schedule, onReserve }) => {
  return (
    schedule && (
      <div className={style.wrapper}>
        {schedule.map((s) => (
          <div>
            <span>{s.slot}</span>
            <span
              className={classnames(style.badge, {
                [style["badge--green"]]: s.reserved,
                [style["badge--red"]]: !s.reserved,
              })}
              onClick={() => onReserve(s)}
            ></span>
          </div>
        ))}
      </div>
    )
  );
};

interface ISchedule {
  schedule: { id: number; slot: string; reserved: boolean }[];
  onReserve: (slot: {
    id: number;
    slot: string;
    reserved: boolean;
  }) => Promise<any>;
}
