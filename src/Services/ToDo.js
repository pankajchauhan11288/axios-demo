import axios from "axios";

const ToDo = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(({ data }) => data);
};
const ToDos = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos`).then(({ data }) => data);
};

export { ToDo, ToDos };
