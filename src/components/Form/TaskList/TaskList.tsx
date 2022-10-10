import { FC } from "react";
import Task from "../Task";

export const TaskList: FC = ({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}: ITaskList) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

interface ITaskList {
  loading: true;
  tasks: any[];
  onPinTask: () => void;
  onArchiveTask: () => void;
}
