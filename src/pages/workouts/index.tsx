export default function WorkoutList({ post }) {
  return <pre>{JSON.stringify(post, null, 4)}</pre>;
}

// This also gets called at build time
export async function getStaticProps() {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    "http://localhost:1337/api/workouts?populate=session&populate=exercises"
  );
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post: post.data } };
}
