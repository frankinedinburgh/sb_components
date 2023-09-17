import axios from "axios";
import qs from "qs";

axios.interceptors.request.use((config) => {
  config.headers[
    "Authorization"
  ] = `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`;
  return config;
});

export const getWorkouts = async (page) => {
  const query = qs.stringify(
    {
      populate: "*",
      // populate: {
      //   exercises: {
      //     fields: ["name", "type"],
      //   },
      //   session: {
      //     fields: ["name", "description"],
      //   },
      // },
      sort: ["date:desc"],
      // fields: [
      //   "date",
      //   "comments",
      //   "pull_reps",
      //   "push_reps",
      //   "leg_reps",
      //   "exercises",
      //   "session",
      // ],
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

export const getWorkoutById = async (id) => {
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
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/workouts/${id}?${query}`
  );
  return data;
};

export const getExercises = async (page) => {
  const query = qs.stringify(
    {
      sort: ["name:desc"],
      fields: ["name", "type"],
      pagination: {
        page,
        pageSize: 22,
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const { data } = await axios.get(
    // `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/exercises`
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/exercises?${query}`
  );
  return data;
};

export const getSessions = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/sessions`
  );
  return data;
};
