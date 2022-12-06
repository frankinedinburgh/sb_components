import axios from "axios";
import qs from "qs";

export const getWorkouts = async (page) => {
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
