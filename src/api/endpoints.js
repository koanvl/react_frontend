import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/';
const GET_LISTS_URL = `${BASE_URL}lists`;
const POST_LIST_URL = `${BASE_URL}lists`;
const DELETE_URL = (id) => `${BASE_URL}lists/${id}`;
const UPDATE_URL = (id) => `${BASE_URL}lists/${id}`;

export const get_lists = async () => {
  const response = await axios.get(GET_LISTS_URL);
  return response.data;
}

export const create_list = async(list_name) => {
  const response = await axios.post(POST_LIST_URL, {"name": list_name});
  return response.data;
}

export const delete_list = async (id) => {
  const response = await axios.delete(DELETE_URL(id));
  return response.data;
}

export const update_list = async (id, name) => {
  const response = await axios.patch(UPDATE_URL(id), {"name": name});
  return response.data;
}


const GET_TASKS_URL = (id) => `${BASE_URL}lists/${id}/tasks`;
const POST_TASK_URL = (id) => `${BASE_URL}lists/${id}/tasks`;

export const get_tasks = async(id) => {
  const respose = await axios.get(GET_TASKS_URL(id));
  return respose.data;
}

export const create_task = async (listId, name) => { 
  const response = await axios.post(POST_TASK_URL(listId), {"title": name, "completed": false});
  return response.data;
}

