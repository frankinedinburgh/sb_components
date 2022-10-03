export default function FirstPost({ post }) {
  return <pre>{JSON.stringify(post, null, 4)}</pre>;
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
    "http://localhost:1337/api/workouts?populate=session&populate=exercises"
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
  const res = await fetch(`http://localhost:1337/api/workouts/${params.id}`);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post: post.data } };
}
