"use client";

import axios from "axios";
import style from "./Sessions.module.css";
// https://www.w3schools.com/howto/default.asp

axios.interceptors.request.use((config) => {
  config.headers[
    "Authorization"
  ] = `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`;
  return config;
});

const getSessions = async () => {
  const { data } = await axios.get(`${process.env.API_BASE_URL}/sessions`);
  return data;
};

export default async function Sessions() {
  const sessions = await getSessions();

  const onKeyUpHandler = (evt) => {
    console.log({ evt });
  };

  if (!sessions) return <div>Loading ......</div>;
  return (
    <>
      <input
        type="text"
        id="myInput"
        placeholder="Search for names.."
        onKeyUp={onKeyUpHandler}
        title="Type in a name"
        className={style.search}
      />
      <table className={style.table}>
        <tr className="header">
          <th
            style={{
              width: "60%",
            }}
          >
            Name
          </th>
          <th
            style={{
              width: "40%",
            }}
          >
            Description
          </th>
        </tr>
        {sessions?.map(({ id, attributes: { description, name } }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{description}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
