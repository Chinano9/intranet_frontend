import { API_URL } from "../app/constants";
import type { Empleado } from "../types/recursos_humanos";
const ENDPOINT = 'recursos_humanos/';

export const url = `${API_URL}${ENDPOINT}`;

const getEmpleados = async(query?:string, page?:string) => {
	console.log('getEmpleados');

	let endpoint = `${url}empleados/?`;
	if (query) endpoint += `query=${query}&`; 
	if (page) endpoint += `page=${page}`; 

	const request:RequestInit = {
		method: 'GET'
	};

	const data = await getData(endpoint, request);
	return data;
}

const postEmpleado = async(body:Empleado) => {
	console.log('getEmpleados');

	const endpoint = `${url}empleados/`;

	const request:RequestInit = {
		method: 'POST',
		body:JSON.stringify(body)
	};

	const data = await getData(endpoint, request);
	return data;
}

const deleteEmpleado = async(num_empleado:number,body:Empleado) => {
	console.log('getEmpleados');

	const endpoint = `${url}empleados/${num_empleado}`;

	const request:RequestInit = {
		method: 'PATCH',
		body:JSON.stringify(body)
	};

	const data = await getData(endpoint, request);
	return data;
}

const patchEmpleado = async(num_empleado:number,body:Empleado) => {
	console.log('getEmpleados');

	const endpoint = `${url}empleados/${num_empleado}`;

	const request:RequestInit = {
		method: 'PATCH',
		body:JSON.stringify(body)
	};

	const data = await getData(endpoint, request);
	return data;
}


const getData = async (endpoint:string, request:RequestInit) =>{
	try {
    const response = await fetch(endpoint, request);
    const data =  await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener la lista de empleados:', error);
    return [];
  }
}


export {
	getEmpleados,
	postEmpleado,
	patchEmpleado,
	deleteEmpleado,
	getEmpleado
}
