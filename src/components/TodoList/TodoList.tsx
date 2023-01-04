import { memo, useRef, useState } from "react";
import style from "./TodoList.module.css";

export const TodoList: React.FC = ({ title, todos }: ITodoList) => {
  const [list, setList] = useState(todos);
  const inputRef = useRef<HTMLInputElement>();

  const addTasK = (item) => {
    inputRef.current.value = null;
    setList((prev) => [...prev, item]);
  };

  const removeItem = (item) => {
    setList((prev) => prev.filter((task) => task !== item));
  };

  return (
    <>
      <div className={style.header}>
        <h2
          style={{
            margin: "5px",
          }}
        >
          {title}
        </h2>
        <input type="text" id="myInput" placeholder="Title..." ref={inputRef} />
        <span
          onClick={() =>
            inputRef && inputRef.current && addTasK(inputRef.current.value)
          }
          className={style.addBtn}
        >
          Add
        </span>
      </div>

      <ul className={style.list}>
        {list &&
          list.map((item) => (
            <li>
              {item}
              <span className={style.close} onClick={() => removeItem(item)}>
                x
              </span>
            </li>
          ))}
      </ul>
    </>
  );
};

export default memo(TodoList);

interface ITodoList {
  title: string;
  todos: string[];
}
