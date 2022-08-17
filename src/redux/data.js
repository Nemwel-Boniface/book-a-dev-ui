import axios from 'axios';

const url = 'https://mocki.io/v1/7cabf1d8-70e2-4ccc-87e7-df304d113307';

export const signup = async (user) => {
  const response = await axios.post(`${url}/users`, {
    user: {
      email: user.email,
      password: user.password,
    },
  });
  return response.data;
};

export const login = async (user) => {
  const response = await axios.post(`${url}/users/sign_in`, {
    user: {
      email: user.email,
      password: user.password,
    },
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

export const createdeveloper = async (developer, e) => {
  const formData = new FormData();
  formData.append('developer[name]', developer.name);
  formData.append('developer[icon]', e.target.icon.files[0]);
  formData.append('developer[title]', developer.title);
  formData.append('developer[location]', developer.location);
  formData.append('developer[hourly_rate]', developer.hourly_rate);
  formData.append('developer[experience]', developer.experience);
  formData.append('developer[tech_stack]', developer.tech_stack);
  formData.append('developer[email]', developer.email);
  formData.append('developer[github]', developer.github);
  formData.append('developer[linkedin]', developer.linkedin);
  formData.append('developer[telephone]', developer.telephone);
  formData.append('developer[description]', developer.description);
  formData.append('developer[is_available]', developer.is_available);

  const response = await axios.post(`${url}/developers`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${authHeader()}`,
    },
  });

  return response.data;
};

export const getDeveloper = async () => {
  const response = await axios.get(`${url}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authHeader()}`,
    },
  });
  return response.data;
};

export const fetchDevelopers = async () => {
  const response = await axios.get(`${url}`, {
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
