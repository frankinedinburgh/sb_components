import { useRouter } from "next/router";
import Button from "src/components/Button";
import Workout from "src/components/Workout";

export default function FirstPost({ post }) {
  const router = useRouter();
  const {
    attributes: { date, comments, pull_reps, push_reps, leg_reps },
  } = post;

  return (
    <article>
      <Workout
        date={date}
        comment={comments}
        pull={pull_reps}
        push={push_reps}
        legs={leg_reps}
      />
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

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`${process.env.apiBaseUrl}/workouts/${params.id}`);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post: post.data } };
}
