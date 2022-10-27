import Head from "next/head";
import Grid from "../components/Grid/Grid";

export default function Home() {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      date: event.target.date.value,
      comments: event.target.comments.value,
      push: event.target.push.value,
      pull: event.target.pull.value,
      legs: event.target.legs.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/form";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Date: ${result.data}`);
  };

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
        <Grid column={true}>
          <Grid column={true} sm={12} md={4}>
            {/* <form action="/api/form" method="post"> */}
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="date">Select Date:</label>
                <input type="date" id="date" name="date" />
              </div>

              <div>
                <label htmlFor="comments">Comment:</label>
                <textarea rows={4} cols={50} id="comments" name="comments" />
              </div>

              <div>
                <label htmlFor="push">Push:</label>
                <input type="number" min={0} id="push" name="push" />
              </div>

              <div>
                <label htmlFor="pull">Pull:</label>
                <input type="number" min={0} id="pull" name="pull" />
              </div>

              <div>
                <label htmlFor="legs">Legs:</label>
                <input type="number" min={0} id="legs" name="legs" />
              </div>

              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
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
