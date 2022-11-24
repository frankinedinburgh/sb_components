import moment from "moment";
import Link from "next/link";
import qs from "qs";
import { useState } from "react";
import { BarChartB } from "src/components";
import Stack from "src/components/Containers/Stack";
import { fetcher } from "src/lib/api";

export default function Workouts<IWorkouts>({ post, pagination }) {
  // return <pre>{JSON.stringify(post, null, 4)}</pre>;
  let [page, setPage] = useState(0);
  let data = post.reduce((acc, val) => {
    if (!val.attributes) {
      return acc;
    }
    return [
      ...acc,
      {
        id: val.id,
        date: val.attributes.date,
        comments: val.attributes.comments,
        pull_reps: val.attributes.pull_reps,
        push_reps: val.attributes.push_reps,
        leg_reps: val.attributes.leg_reps,
        exercises:
          val.attributes.exercises &&
          val.attributes.exercises.data.map((e) => ({
            name: e.attributes.name,
            type: e.attributes.type,
          })),
        session: val.attributes.session && val.attributes.session.data,
      },
    ];
  }, []);

  return (
    <Stack direction="column">
      <ul>
        {data &&
          data.map((p) => (
            <li key={p.id}>
              <BarChartB
                stats={[
                  {
                    name: "Pull",
                    value: p.pull_reps,
                  },
                  {
                    name: "Push",
                    value: p.push_reps,
                  },
                  {
                    name: "Legs",
                    value: p.leg_reps,
                  },
                ]}
                subHeader={p.comments}
                title={
                  <Link href={`/workouts/${p.id}`}>
                    {moment(p.date).calendar()}
                  </Link>
                }
              />
            </li>
          ))}
      </ul>
      <pre>{JSON.stringify(pagination, null, 4)}</pre>
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

interface IPost {
  date: string;
  comments: string;
  pull_reps: number;
  push_reps: number;
  leg_reps: number;
  [key: string]: any;
}
interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
