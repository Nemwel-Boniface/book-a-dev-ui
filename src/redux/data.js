import axios from 'axios';
import url from '../helpers/developers.json'

export const getDeveloper = async () => {
  
  const response = await axios.get(`${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  },
  );
  return response.data;
};

export const fetchDevelopers = async () => {
  const response = await axios.get(`${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  },
  );
  return response.data;
  };
  console.log(fetchDevelopers())
