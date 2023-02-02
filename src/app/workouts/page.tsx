"use client";
import moment from "moment";
import Link from "next/link";
import { use } from "react";
import { BarChart } from "src/components";

async function getWorkouts(page) {
  const res = await fetch(`${process.env.apiBaseUrl}/workouts`, {
    headers: {
      Authorizaton: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Workouts() {
  const { data: workouts } = use(getWorkouts(0));

  return workouts.map(
    ({
      id,
      attributes: { date, comments, pull_reps, push_reps, leg_reps },
    }) => (
      <BarChart
        stats={[
          {
            name: "Pull",
            value: pull_reps,
          },
          {
            name: "Push",
            value: push_reps,
          },
          {
            name: "Legs",
            value: leg_reps,
          },
        ]}
        subHeader={comments}
        title={<Link href={`/workouts/${id}`}>{moment(date).calendar()}</Link>}
      />
    )
  );
}
