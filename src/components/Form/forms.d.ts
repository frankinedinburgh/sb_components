interface IDropdown {
  placeHolder: string;
  options: string[];
  isMulti: boolean;
  isSearchable: boolean;
  onChange: (evt: React.ChangeEventHandler) => void;
}

interface IInputField {
  type: "text" | "number";
  name: string;
  value?: string;
  min?: number;
  max?: number;
  className: string;
  onChange: () => void;
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
