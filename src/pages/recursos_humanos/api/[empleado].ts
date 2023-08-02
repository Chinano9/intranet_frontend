import type { APIRoute } from 'astro';
import {
	getEmpleado,
	patchEmpleado,
	deleteEmpleado,
} from '../../../lib/recursos_humanos/index';

export const get: APIRoute = async ({ params, request }) => {
	const { empleado } = params;
	const body = await getEmpleado(Number.parseInt(empleado ? empleado : ''));

	return {
		body: JSON.stringify(body)
	};
};

export const del: APIRoute = async ({ params, request }) => {
};

export const all: APIRoute = async ({ params, request }) => {
	const { empleado } = params;
	if (request.method == 'PATCH') {
		const body = await patchEmpleado(
			Number.parseInt(empleado ? empleado : ''),
			request.body,
		);

		return { body: JSON.stringify(body) };
	}
	return {
		headers:{
			'':''
		}
	}
};
