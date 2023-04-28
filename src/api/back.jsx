import axios from "axios";

const backRequiest = axios.create({
  baseURL: "http://localhost:3000/api",
});

export { backRequiest };
