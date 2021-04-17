import axios from "axios";

// axios api config

const apiDefaultConfig = () => ({
  baseURL: "http://localhost:3000",
  timeout: 4000,
  headers: {},
});

// create instance axios
export const instance = () => axios.create(apiDefaultConfig());
