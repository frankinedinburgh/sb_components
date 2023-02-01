import Head from "next/head";
import Button from "src/components/Button";
import Stack from "src/components/Containers/Stack";
import Form from "src/components/Form/Form";
import InputField from "src/components/Form/InputField";
import TextAreaField from "src/components/Form/TextArea";

export default function Home() {
  const handleSubmit = async (event: React.SyntheticEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    const target = event.target as typeof event.target & {
      date: { value: string };
      comments: { value: string };
      push: { value: string };
      pull: { value: string };
      legs: { value: string };
    };

    const data = {
      date: target.date.value,
      comments: target.comments.value,
      push: target.push.value,
      pull: target.pull.value,
      legs: target.legs.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/form";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
        <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Form onSubmit={handleSubmit}>
          <Stack direction="column" spacing={3}>
            <form onSubmit={handleSubmit}>
              <Stack direction="column" spacing={3}>
                <div>
                  <label htmlFor="date">Select Date:</label>
                  <input type="date" id="date" name="date" />
                </div>

                <TextAreaField rows={4} cols={50} name={"comments"} />
              </Stack>
              <Stack direction="row" spacing={3}>
                <InputField
                  label="Push Reps: "
                  max={400}
                  min={0}
                  name="push"
                  type="number"
                />
                <InputField
                  label="Pull Reps: "
                  max={400}
                  min={0}
                  name="pull"
                  type="number"
                />
                <InputField
                  label="Leg Reps: "
                  min={0}
                  name="legs"
                  type="number"
                />
              </Stack>

              <div>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Stack>
        </Form>
      </main>

      <footer>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a> */}
      </footer>
    </div>
  );
}
