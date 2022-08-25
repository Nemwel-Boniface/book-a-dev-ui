import axios from 'axios';

const url = 'https://book-a-dev-api.herokuapp.com/api/v1';

// create a user
export const signup = async (user) => {
  const response = await axios.post(`${url}/users`, {
    ...user,
  });
  return response.data;
};

// login user
export const login = async (user) => {
  const response = await axios.post(`${url}/login`, {
    ...user,
  });
  return response;
};

// creat a new reservation
export const newReservation = async (reservation) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { developer_id: developerId } = reservation;
  const response = await axios.post(`${url}/users/${user.id}/reservations`, {
    ...reservation,
    user_id: user.id,
    developer_id: Number(developerId),
  });

  return response.data;
};

// create a dev
export const createdeveloper = async (developer) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const response = await axios.post(`${url}/developers`, {
    ...developer,
    user_id: user.id,
  });

  return response.data;
};

// get a dev
export const getDeveloper = async (id) => {
  const response = await axios.get(`${url}/developers/${id}`);
  return response.data;
};

// get all devs
export const fetchDevelopers = async () => {
  const response = await axios.get(`${url}/developers`);
  return response.data;
};

// delete dev
export const deleteDeveloper = async (id) => {
  const response = await axios.delete(`${url}/developers/${id}`, {});

  return response.data;
};

// get reservation
export const fetchReservations = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const response = await axios.get(`${url}/users/${user.id}/reservations`);

  return response.data;
};
