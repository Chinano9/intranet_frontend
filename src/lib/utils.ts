import { API_URL } from "../app/constants";
const ENDPOINT = 'recursos_humanos/';

export const url = `${API_URL}${ENDPOINT}`;

export async function fetchData(endpoint: string, request?: RequestInit) {
	try {
		const response = await fetch(endpoint, request);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error al obtener los datos:', error);
		return [];
	}
}
