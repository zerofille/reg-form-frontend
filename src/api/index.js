import axios from "axios";
const httpClient = axios.create({ baseURL: "http://localhost:3000/api" });
export const createUser = async (data) => {
  return await httpClient.post("/users", data);
};

