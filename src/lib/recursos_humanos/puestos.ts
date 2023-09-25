/* eslint-disable no-console */
import { fetchData } from "../utils"
import { API_URL } from "../../app/constants";
import type { Puesto } from "../../types/recursos_humanos";

const ENDPOINT = 'recursos_humanos/';

export const url = `${API_URL}${ENDPOINT}`;

export const getPuestos = async(params?:URLSearchParams) => {
	console.log('getPuestos');

	const queryString = params?.toString();

	const endpoint = `${url}puestos/?${queryString ?? ''}`;

	const request:RequestInit = {
		method: 'GET'
	};

	const data = await fetchData(endpoint, request);
	return data;
}

export const getPuesto = async (num_puesto:number) => {
	console.log('getPuesto');

	const endpoint = `${url}puestos/${num_puesto}`;

	const request:RequestInit = {
		method: 'GET'
	};

	const data = await fetchData(endpoint, request);
	return data;
}

export const deletePuesto = async(num_puesto:number) => {
	console.log('deletePuesto');

	const endpoint = `${url}puestos/${num_puesto}`;

	const request:RequestInit = {
		method: 'DELETE',
	};

	const data = await fetchData(endpoint, request);
	
	return data;
}

export const patchPuesto = async(num_puesto:number|string,body:Puesto) => {
	console.log('patchPuesto');

	const endpoint = `${url}puestos/${num_puesto}`;

	
	const request:RequestInit = {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
		},
		body:JSON.stringify(body)
	};

	const data = await fetchData(endpoint, request);
	return data;
}
