import {url, fetchData} from '../utils'
import type { Empleado } from '../../types/recursos_humanos';

const getEmpleados = async(query?:string, page?:string) => {
	console.log('getEmpleados');

	let endpoint = `${url}empleados/?`;
	if (query) endpoint += `query=${query}`;
	console.log(query) 
	if (page) endpoint += `page=${page}`; 

	const request:RequestInit = {
		method: 'GET'
	};

	const data = await fetchData(endpoint, request);
	return data;
}

const postEmpleado = async(body:Empleado) => {
	console.log('postEmpleado');

	const endpoint = `${url}empleados/`;

	const request:RequestInit = {
		method: 'POST',
		body:JSON.stringify(body)
	};

	const data = await fetchData(endpoint, request);
	return data;
}

const deleteEmpleado = async(num_empleado:number,body:Empleado) => {
	console.log('deleteEmpleado');

	const endpoint = `${url}empleados/${num_empleado}`;

	const request:RequestInit = {
		method: 'PATCH',
		body:JSON.stringify(body)
	};

	const data = await fetchData(endpoint, request);
	return data;
}

const patchEmpleado = async(num_empleado:number,body:Empleado) => {
	console.log('patchEmpleado');

	const endpoint = `${url}empleados/${num_empleado}`;

	const request:RequestInit = {
		method: 'PATCH',
		body:JSON.stringify(body)
	};

	const data = await fetchData(endpoint, request);
	return data;
}

const getEmpleado =async (num_empleado:number) => {
	console.log('getEmpleado');

	const endpoint = `${url}empleados/${num_empleado}`;

	const request:RequestInit = {
		method: 'GET'
	};

	const data = await fetchData(endpoint, request);
	return data;
}

export {
	getEmpleados,
	postEmpleado,
	patchEmpleado,
	deleteEmpleado,
	getEmpleado
}
