import axios from 'axios';
import qs from 'qs';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

const defaultOptions = {
  encodeValuesOnly: true,
};

const fetchWithQuery = async (url, query) => {
  try {
    const queryString = qs.stringify(query, defaultOptions);
    const { data } = await axios.get(`${API_URL}${url}?${queryString}`);
    return data;
  } catch (error) {
    console.error(`Error fetching ${url}`, error);
    throw error;
  }
};

export const getWorkouts = async (page) => {
  const query = {
    populate: {
      exercises: {
        fields: ['name', 'type'],
      },
      session: {
        fields: ['name', 'description'],
      },
    },
    sort: ['date:desc'],
    fields: ['date', 'comments', 'pull_reps', 'push_reps', 'leg_reps'],
    pagination: {
      page,
      pageSize: 7,
    },
  };

  return fetchWithQuery('/workouts', query);
};

export const getWorkoutById = async (id) => {
  const query = {
    populate: {
      exercises: {
        fields: ['name', 'type'],
      },
      session: {
        fields: ['name', 'description'],
      },
    },
  };

  return fetchWithQuery(`/workouts/${id}`, query);
};