import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/';
const GET_URL = `${BASE_URL}todos`;
const POST_URL = `${BASE_URL}todos`;

export const get_todos = async () => {
  const response = await axios.get(GET_URL);
  return response.data;  
};

export const create_todo = async (todo_name) => {
  const response = await axios.post(POST_URL, {"todo_name": todo_name, completed: false});
  return response.data;
}