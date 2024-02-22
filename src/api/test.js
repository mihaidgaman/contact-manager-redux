import axios from 'axios';

const baseUrl = import.meta.env.VITE_SERVER_URI;

export const client = axios.create({
  baseURL: baseUrl,
});
