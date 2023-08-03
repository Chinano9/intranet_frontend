import type { APIRoute } from 'astro';
import {
	getEmpleado,
	patchEmpleado,
	deleteEmpleado,
} from '../../../../lib/recursos_humanos';
import { NumeroALetras } from '../../../../lib/numeros-a-letras';

export const get: APIRoute = async ({ params, request }) => {
	const { empleado } = params;
	console.log(typeof(empleado))
	const body = await getEmpleado(Number.parseInt(empleado ? empleado : ''));

	return {
		body: JSON.stringify(body),
	};
};

export const del: APIRoute = async ({ params, request, redirect }) => {
	const {empleado} = params;
	await deleteEmpleado(Number.parseInt(empleado));
	return redirect('../empleados', 301)
};

export const post: APIRoute = async ({ params, request, redirect }) => {
	const json: any = {};

	(await request.formData()).forEach((value, key) => {
		json[key] = value;
	});

	if (!json['foto']) {
		delete json['foto'];
	}
	console.log(json);


	json['sueldo_texto'] = NumeroALetras(json['sueldo_dia']);

	const body = await patchEmpleado(
		Number.parseInt(json.id),
		json,
	);
	return redirect(`../empleado/${json.id}`, 308);
};
