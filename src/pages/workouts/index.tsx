import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import qs from "qs";
import React from "react";
import { BarChartB } from "src/components";
import Stack from "src/components/Containers/Stack";

const getWorkouts = async (page) => {
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
      pagination: {
        page,
        pageSize: 7,
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/workouts?${query}`
  );
  return data;
};

function useWorkouts(page) {
  return useQuery({
    queryKey: ["workouts", page],
    queryFn: () => getWorkouts(page),
    keepPreviousData: true,
    staleTime: 5000,
  });
}

export default function Workouts() {
  const queryClient = useQueryClient();
  const [page, setPage] = React.useState(0);
  const { status, data, error, isFetching, isPreviousData } = useWorkouts(page);
  // const { data: workouts, pagination } = data;
  // queryClient.getQueryData(["post", post.id])

  // Prefetch the next page!
  React.useEffect(() => {
    if (data?.meta.pagination.pageCount - 1 !== page) {
      queryClient.prefetchQuery(["workouts", page + 1], () =>
        getWorkouts(page + 1)
      );
    }
  }, [data, page, queryClient]);

  return (
    <div>
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <>
          <span>Error: {error}</span>
        </>
      ) : data ? (
        <>
          <Stack direction="column">
            <ul>
              {data.data &&
                data.data.map((p) => (
                  <li key={p.id}>
                    {/* <pre>{JSON.stringify(p, null, 4)}</pre> */}
                    <BarChartB
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
            {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
            <div>Current Page: {page + 1}</div>
          </Stack>
          <Stack>
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              disabled={page === 0}
            >
              Previous Page
            </button>

            {Array.from(Array(data?.meta.pagination.pageCount).keys()).map(
              (p) => (
                <button
                  onClick={() => setPage(p)}
                  style={{
                    borderRadius: 0,
                    outline: "none",
                  }}
                >
                  {p + 1}
                </button>
              )
            )}
            <button
              onClick={() => {
                setPage((prev) => (data?.data ? prev + 1 : prev));
              }}
              disabled={
                isPreviousData || page === data?.meta.pagination.pageCount - 1
              }
            >
              Next Page
            </button>
          </Stack>
        </>
      ) : null}
    </div>
  );

  // let [page, setPage] = useState(0);
  // let data = post.reduce((acc, val) => {
  //   if (!val.attributes) {
  //     return acc;
  //   }
  //   return [
  //     ...acc,
  //     {
  //       id: val.id,
  //       date: val.attributes.date,
  //       comments: val.attributes.comments,
  //       pull_reps: val.attributes.pull_reps,
  //       push_reps: val.attributes.push_reps,
  //       leg_reps: val.attributes.leg_reps,
  //       exercises:
  //         val.attributes.exercises &&
  //         val.attributes.exercises.data.map((e) => ({
  //           name: e.attributes.name,
  //           type: e.attributes.type,
  //         })),
  //       session: val.attributes.session && val.attributes.session.data,
  //     },
  //   ];
  // }, []);

  // return (
  //   <Stack direction="column">
  //     <ul>
  //       {data &&
  //         data.map((p) => (
  //           <li key={p.id}>
  //             <BarChartB
  //               stats={[
  //                 {
  //                   name: "Pull",
  //                   value: p.pull_reps,
  //                 },
  //                 {
  //                   name: "Push",
  //                   value: p.push_reps,
  //                 },
  //                 {
  //                   name: "Legs",
  //                   value: p.leg_reps,
  //                 },
  //               ]}
  //               subHeader={p.comments}
  //               title={
  //                 <Link href={`/workouts/${p.id}`}>
  //                   {moment(p.date).calendar()}
  //                 </Link>
  //               }
  //             />
  //           </li>
  //         ))}
  //     </ul>
  //     <pre>{JSON.stringify(pagination, null, 4)}</pre>
  //   </Stack>
  // );
}

// This also gets called at build time
// export async function getStaticProps() {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const query = qs.stringify(
//     {
//       populate: {
//         exercises: {
//           fields: ["name", "type"],
//         },
//         session: {
//           fields: ["name", "description"],
//         },
//       },
//       sort: ["date:desc"],
//       fields: ["date", "comments", "pull_reps", "push_reps", "leg_reps"],
//     },
//     {
//       encodeValuesOnly: true, // prettify URL
//     }
//   );

//   const res = await fetcher(
//     `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/workouts?${query}`
//   );

//   if (res.error) {
//     return { props: { post: res.error } };
//   }

//   return { props: { post: res.data, pagination: res.meta } };
// }

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
