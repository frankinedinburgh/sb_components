import { useRef, useState } from "react";
import style from "./TodoList.module.css";

export const TodoList: React.FC = ({ title }: ITodoList) => {
  const [list, setList] = useState([]);
  const inputRef = useRef();

  const addTasK = (item) => {
    inputRef.current.value = null;
    setList((prev) => [...prev, item]);
  };

  const removeItem = (item) => {
    setList((prev) => prev.filter((task) => task !== item));
  };

  return (
    <>
      <div id="myDIV" className={style.header}>
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

      <ul id="myUL" className={style.list}>
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

export default TodoList;

interface ITodoList {
  title: string;
}
