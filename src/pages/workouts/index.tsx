import Link from "next/link";
import Stack from "src/components/Containers/Stack";

export default function Workouts({ post }) {
  return (
    <Stack direction="column">
      <ul>
        {post.map((p) => (
          <li>
            <Link href={`/workouts/${p.id}`}>{p.attributes.date}</Link>
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
  const res = await fetch(
    `${process.env.apiBaseUrl}/workouts?populate=session&populate=exercises&sort=date:desc`
  );
  const post = await res.json();

  return { props: { post: post.data } };
}
