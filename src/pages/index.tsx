import Head from "next/head";
import Grid from "../components/Grid/Grid";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Grid row={true}>
          <Grid column={true} sm={12} md={4}>
            <h1>Column 1</h1>
          </Grid>
          <Grid column={true} sm={12} md={4}>
            <h1>Column 2</h1>
          </Grid>
          <Grid column={true} sm={12} md={4}>
            <h1>Column 3</h1>
          </Grid>
        </Grid>
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
