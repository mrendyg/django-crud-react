import axios from "axios";

// Conexion entre back y front

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://127.0.0.1:8000";

console.log(URL);
const tasksApi = axios.create({
  baseURL: `${URL}/task/api/v1/task`,
});

export const getAllTasks = () => tasksApi.get("/");

export const getTask = (id) => tasksApi.get(`/${id}`);

export const createTask = (task) => tasksApi.post("/", task);

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);

export const deleteTask = (id) => tasksApi.delete(`/${id}`);