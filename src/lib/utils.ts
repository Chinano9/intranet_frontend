import { API_URL } from "../app/constants";

const ENDPOINT = 'recursos_humanos/';

export const url = `${API_URL?API_URL:'http://localhost:8000/api'}${ENDPOINT}`;

export async function fetchData(endpoint: string, request?: RequestInit) {
	try {
		const response = await fetch(endpoint, request);
		const data = await response.json();
		if (!response.ok){
			console.error(data);
		}
		return data;
	} catch (error) {
		// console.error('Error al obtener los datos:', error);
		return [];
	}
}
