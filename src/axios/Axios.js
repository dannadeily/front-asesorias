import axios from "axios";


const conexionAxios = axios.create({
  baseURL: "http://localhost:8092",
});

export default conexionAxios;
