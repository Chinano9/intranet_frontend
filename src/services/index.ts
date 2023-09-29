import { API_URL } from "../app/constants";
import EmpleadosAPI from "./recursos_humanos/EmpleadosAPI";
import { PuestosAPI } from "./recursos_humanos/PuestosAPI";

const urlRecursosHumanos =  `${API_URL}recursos_humanos`;

export const empleadosAPI = new EmpleadosAPI(urlRecursosHumanos);
export const puestosAPI = new PuestosAPI(urlRecursosHumanos)
