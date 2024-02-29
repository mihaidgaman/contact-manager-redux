import axios from 'axios';

const baseUrl = import.meta.env.VITE_SERVER_URI;

export const usersClient = axios.create({
  baseURL: baseUrl,
});
