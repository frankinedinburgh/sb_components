interface IInputField {
  type: "text" | "number" | "password" | "submit";
  name: string;
  value?: string;
  min?: string | number;
  max?: string | number;
  className?: string;
  onChange?: (...event: any[]) => void;
  onKeyUp?: (...event: any[]) => void;
  placeholder: string;
  label: string;
  error?: string;
}

interface IRadioButton {
  value: string | number;
  name: string;
  onChangeHandler?: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
}

interface ITaskProps {
  task: ITask;
  onArchiveTask: (...args: any[]) => any;
  onPinTask: (...args: any[]) => any;
}

interface ITask {
  id: string;
  title: string;
  state: string;
}

interface ITaskList {
  loading: true;
  tasks: any[];
  onPinTask: () => void;
  onArchiveTask: () => void;
}
