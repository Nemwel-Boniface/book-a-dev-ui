import axios from 'axios';

const url = 'http://localhost:8080/api/v1';

export const getDeveloper = async (id) => {
  const response = await axios.get(`${url}/developers/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const fetchDevelopers = async () => {
  const response = await axios.get(`${url}/developers`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
