import axios from 'axios';

const url = 'https://mocki.io/v1/7cabf1d8-70e2-4ccc-87e7-df304d113307';

export const getDeveloper = async () => {
  const response = await axios.get(`${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const fetchDevelopers = async () => {
  const response = await axios.get(`${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
