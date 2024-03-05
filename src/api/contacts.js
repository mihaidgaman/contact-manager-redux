// for practice

import axios from 'axios';

// axios client
const baseUrl = import.meta.env.VITE_SERVER_URI;

export const contactsClient = axios.create({
  baseURL: baseUrl,
});
