import axios from "axios";

const api = "http://localhost:3000/api/student";

export const createStudentApi = async (data) => {
  const students = await axios.post(`${api}/`, data);
};
export const getStudentsApi = async () => {
  const students = await axios.get(`${api}/`);
  return students.data;
};
export const getStudentById = async (id) => {
  const students = await axios.get(`${api}/${id}`);
  return students.data;
};
