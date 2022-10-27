import Link from "next/link";
import qs from "qs";
import Stack from "src/components/Containers/Stack";
import Workout from "src/components/Workout";
import { fetcher } from "src/lib/api";

export default function Workouts({ post, pagination }) {
  let data = post.reduce((acc, val) => {
    return [
      ...acc,
      {
        id: val.id,
        date: val.attributes.date,
        comments: val.attributes.comments,
        pull_reps: val.attributes.pull_reps,
        push_reps: val.attributes.push_reps,
        leg_reps: val.attributes.leg_reps,
        exercises: val.attributes.exercises.data.map((e) => ({
          name: e.attributes.name,
          type: e.attributes.type,
        })),
        session: val.attributes.session.data,
      },
    ];
  }, []);

  return (
    <Stack direction="column">
      <ul>
        {data.map((p) => (
          <li key={p.id}>
            <Workout workout={p}>
              <Link href={`/workouts/${p.id}`}>{p.date}</Link>
            </Workout>
          </li>
        ))}
      </ul>
    </Stack>
  );
}

// This also gets called at build time
export async function getStaticProps() {
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
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/workouts?${query}`
  );

  if (res.error) {
    return { props: { post: res.error } };
  }

  return { props: { post: res.data, pagination: res.meta } };
}
