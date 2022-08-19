import axios from 'axios';

const url = 'http://localhost:8080/api/v1';
const authUrl = 'http://localhost:8080/';

export const signup = async (user) => {
  const response = await axios.post(`${authUrl}/auth`, {
    ...user,
  });
  return response.data;
};

export const login = async (user) => {
  const response = await axios.post(`${authUrl}/auth/sign_in`, {
    ...user,
  });
  return response;
};

const authHeader = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return token;
  }
  return {};
};

export const newReservation = async (reservation) => {
  const formData = new FormData();
  formData.append('reservation[developer_id]', reservation.developer_id);
  formData.append('reservation[city]', reservation.city);
  formData.append('reservation[start_date]', reservation.start_date);
  formData.append('reservation[end_date]', reservation.end_date);
  const response = await axios.post(`${url}/reservations`, formData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authHeader()}`,
    },
  });

  return response.data;
};

export const createdeveloper = async (developer) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const response = await axios.post(`${url}/developers`, {
    ...developer,
    user_id: user.id,
  });

  return response.data;
};

export const getDeveloper = async (id) => {
  const response = await axios.get(`${url}/developers/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authHeader()}`,
    },
  });
  return response.data;
};

export const fetchDevelopers = async () => {
  const response = await axios.get(`${url}/developers`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authHeader()}`,
    },
  });
  return response.data;
};

export const deleteDeveloper = async (id) => {
  const response = await axios.delete(`${url}/developers/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authHeader()}`,
    },
  });

  return response.data;
};

export const fetchReservations = async () => {
  const response = await axios.get(`${url}/reservations`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authHeader()}`,
    },
  });

  return response.data;
};

export const deleteReservation = async (id) => {
  const response = await axios.delete(`${url}/reservations/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authHeader()}`,
    },
  });

  return response.data;
};
