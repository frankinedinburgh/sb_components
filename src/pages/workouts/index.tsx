import { useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BarChart } from "src/components";
import Stack from "src/components/Containers/Stack";
import Layout from "src/components/Layout";
import { getExercises, getWorkouts } from "../api";
import { getSessions } from "../api/workouts.api";

function useWorkouts(page) {
  return useQuery({
    queryKey: ["workouts", page],
    queryFn: () => getWorkouts(page),
    keepPreviousData: true,
    staleTime: 5000,
  });
}

const Workouts = ({ exercises, sessions, error }) => {
  if (error) {
    return <pre>{JSON.stringify(error, null, 4)}</pre>;
  }

  const queryClient = useQueryClient();
  const [page, setPage] = useState(0);
  const {
    status,
    data,
    isError,
    error: err,
    isSuccess,
    isFetching,
    isPreviousData,
  } = useWorkouts(page);

  // console.log({ data });

  // const handlePreviousClick = useCallback(
  //   () => setPage((old) => Math.max(old - 1, 0)),
  //   []
  // );

  // const handleNextClick = useCallback(() => {
  //   console.log("clicked");
  //   if (!isPreviousData && page < data?.meta.pagination.pageCount) {
  //     setPage((old) => old + 1);
  //   }
  // }, []);

  useEffect(() => {
    if (!isPreviousData && page < data?.meta.pagination.page) {
      queryClient.prefetchQuery({
        queryKey: ["projects", page + 1],
        queryFn: () => getWorkouts(page + 1),
      });
    }
  }, [data, isPreviousData, page, queryClient]);

  if (status === "loading") return "Loading...";
  if (isFetching) return <div>Refreshing...</div>;
  if (isError) {
    if (err instanceof Error) {
      return <div>Error: {err.message}</div>;
    }
    return <div>Error</div>;
  }

  return (
    <Layout
      aside={
        <>
          <div>
            <h3>Exercises: </h3>
            <ul>
              {exercises &&
                exercises.map(({ id, attributes: { name, type } }) => (
                  <li key={id}>
                    {id} - {name}
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3>Sessions: </h3>
            <ul>
              {sessions &&
                sessions.map(({ id, attributes: { name, description } }) => (
                  <li key={id}>
                    {id} - {description}
                  </li>
                ))}
            </ul>
          </div>
        </>
      }
    >
      <Stack direction="column">
        <ul>
          {isSuccess &&
            data.data.map((p) => (
              <li key={p.id}>
                <BarChart
                  stats={[
                    {
                      name: "Pull",
                      value: p.attributes.pull_reps,
                    },
                    {
                      name: "Push",
                      value: p.attributes.push_reps,
                    },
                    {
                      name: "Legs",
                      value: p.attributes.leg_reps,
                    },
                  ]}
                  subHeader={p.attributes.comments}
                  title={
                    <Link href={`/workouts/${p.id}`}>
                      {moment(p.attributes.date).calendar()}
                    </Link>
                  }
                />
              </li>
            ))}
        </ul>
      </Stack>
      <Stack>
        <span>Current Page: {page + 1}</span>
        {/* <Button onClick={handlePreviousClick} disabled={page === 0}>
          Previous Page
        </Button>
        <Button
          onClick={handleNextClick}
          disabled={isPreviousData || page >= data?.meta.pagination.pageCount}
        >
          Next Page
        </Button> */}
      </Stack>
    </Layout>
  );
};

Workouts.getInitialProps = async () => {
  try {
    const { data: exercises } = await getExercises(1);
    const { data: sessions } = await getSessions();

    return { exercises, sessions };
  } catch (error) {
    return { error };
  }
};

export default Workouts;
