import Link from "next/link";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <ul>
          <li>
            <Link href="/workouts/exercises/create">Create</Link>
          </li>
          <li>
            <Link href="/workouts/exercises/edit">Edit</Link>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  );
}
