import { useRouter } from "next/router";
import qs from "qs";
import Button from "src/components/Button";
import { fetcher } from "src/lib/api";

export default function Post({ workout }) {
  return <pre>{JSON.stringify(workout, null, 4)}</pre>;
  const router = useRouter();
  const { id } = router.query;
  return (
    <article>
      {/* <Workout workout={+id} /> */}
      <Button label="Go Back" primary onClick={() => router.back()} />
    </article>
  );
}

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
