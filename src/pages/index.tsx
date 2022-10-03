import Head from "next/head";
import styles from "../styles/styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="wrapper">
          <div className="box a">A</div>
          <div className="box b">B</div>
          <div className="box c">C</div>
          <div className="box d">D</div>
          <div className="box e">E</div>
          <div className="box f">F</div>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>
    </div>
  );
}
