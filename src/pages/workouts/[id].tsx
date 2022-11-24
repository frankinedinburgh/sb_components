import { useRouter } from "next/router";
import qs from "qs";
import { FC } from "react";
import Button from "src/components/Button";
import Stack from "src/components/Containers/Stack";
import Form from "src/components/Form/Form";
import InputField from "src/components/Form/InputField";
import TextAreaField from "src/components/Form/TextArea";
import { fetcher } from "src/lib/api";

const Post: FC<IWorkout> = ({ workout }) => {
  // return <pre>{JSON.stringify(workout, null, 4)}</pre>;
  const router = useRouter();
  const { id } = router.query;

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
    const endpoint = "/api/edit/form";

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
    <main>
      <Form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={3}>
          <form onSubmit={handleSubmit}>
            <Stack direction="column" spacing={3}>
              <div>
                <label htmlFor="date">Select Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={workout.data.attributes.date}
                />
              </div>

              <TextAreaField
                rows={4}
                cols={50}
                name={"comments"}
                value={workout.data.attributes.comments}
              />
            </Stack>
            <Stack direction="row" spacing={3}>
              <InputField
                label="Push Reps: "
                max={400}
                min={0}
                name="push"
                type="number"
                value={`${workout.data.attributes.push_reps}`}
              />
              <InputField
                label="Pull Reps: "
                max={400}
                min={0}
                name="pull"
                type="number"
                value={`${workout.data.attributes.pull_reps}`}
              />
              <InputField
                label="Leg Reps: "
                min={0}
                name="legs"
                type="number"
                value={`${workout.data.attributes.leg_reps}`}
              />
            </Stack>

            <div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Stack>
      </Form>
    </main>
  );
};

export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
  // Call an external API endpoint to get posts
  const res = await fetch(
    `${process.env.apiBaseUrl}/workouts?populate=session&populate=exercises&sort=date:desc`
  );
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.data.map((post) => ({
    params: { id: `${post.id}` },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// // This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const query = qs.stringify(
    {
      populate: {
        exercises: {
          fields: ["name", "type"],
        },
        session: {
          fields: ["name", "description"],
        },
      },
      sort: ["date:desc"],
      fields: ["date", "comments", "pull_reps", "push_reps", "leg_reps"],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const res = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/workouts/${params.id}?${query}`
  );

  if (res.error) {
    return { props: { post: res.error } };
  }

  return { props: { workout: res } };
}

export default Post;

interface IWorkout {
  workout: {
    data: {
      id: number;
      attributes: {
        date: string;
        comments: string;
        pull_reps: number | null;
        push_reps: number | null;
        leg_reps: number | null;
      };
    };
    meta: any;
  };
}
