import { useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import Link from "next/link";
import React, { useEffect } from "react";
import { BarChartB } from "src/components";
import Stack from "src/components/Containers/Stack";
import Pagination from "src/components/Pagination";
import { getWorkouts } from "../api";

interface Workout {
  id: string;
  attributes: {
    pull_reps: number;
    push_reps: number;
    leg_reps: number;
    comments: string;
    date: string;
  };
}

interface WorkoutsResponse {
  meta: {
    pagination: {
      pageCount: number;
      page: number;
      total: number;
    };
  };
  data: Workout[];
}

function useWorkouts(page: number) {
  return useQuery<WorkoutsResponse>(["workouts", page], () =>
    getWorkouts(page)
  );
}

export default function Workouts() {
  const queryClient = useQueryClient();
  const [page, setPage] = React.useState<number>(0);
  const {
    status,
    data,
    error,
    isFetching,
    isPreviousData,
  } = useWorkouts(page);

  useEffect(() => {
    if (data?.meta.pagination.pageCount - 1 !== page) {
      queryClient.prefetchQuery(
        ["workouts", page + 1],
        () => getWorkouts(page + 1)
      );
    }
  }, [data, page, queryClient]);

  return (
    <div>
      {status === "loading" ? (
        <span>Loading...</span>
      ) : status === "error" ? (
        <span>Error: {error?.message}</span>
      ) : data ? (
        <>
          <Stack direction="column">
            <ul>
              {data.data.map((p) => (
                <li key={p.id}>
                  <BarChartB
                    stats={[
                      { name: "Pull", value: p.attributes.pull_reps },
                      { name: "Push", value: p.attributes.push_reps },
                      { name: "Legs", value: p.attributes.leg_reps },
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
            <div>Current Page: {page + 1}</div>
          </Stack>
          <Stack>
            <Pagination currentPage={data.meta.pagination.page}
                totalPages={data.meta.pagination.total}
                onPageChange={(page) => {
                    setPage(page)
                }}/>  
  {/* <pre>{JSON.stringify(data.meta,null,4)}</pre> */}
            
          </Stack>
        </>
      ) : null}
    </div>
  );
}