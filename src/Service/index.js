import axios from "axios";

export const http = axios.create({
  baseURL: "https://pokeapi.co/api/v2/"
});

export const defaultOptions = options => {
  const defaultHeaders = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  return { ...defaultHeaders, ...options };
};

export const get = async (endpoint, options = {}) => {
  const opts = defaultOptions(options);
  return http.get(endpoint, opts);
};
