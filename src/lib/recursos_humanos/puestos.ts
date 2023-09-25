import { fetchData } from "../utils"
import { API_URL } from "../../app/constants";

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
