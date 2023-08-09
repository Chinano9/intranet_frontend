import type { APIRoute } from 'astro';
import {
	patchEmpleado,
	deleteEmpleado,
} from '../../../../lib/recursos_humanos';
import { NumeroALetras } from '../../../../lib/numeros-a-letras';

// Esta ruta se usa como un sustituto al metodo DELETE, ya que este no puede ser usado por formularios
// Para hacer fetch a los empleados, usa la funcion getEmpleado, o getEmpleados de ~/src/app/lib/recursos_humanos
// o en su defecto, la ruta de la API en django
export const get: APIRoute = async ({ params, request, redirect }) => {
	const { empleado } = params;
	const body = await deleteEmpleado(Number.parseInt(empleado ? empleado : ''));

	return redirect('/recursos_humanos/empleados/', 308)
};

// export const del: APIRoute = async ({ params, request, redirect }) => {
// 	const {empleado} = params;
// 	await deleteEmpleado(Number.parseInt(empleado));
// 	return redirect('../empleados', 301)
// };

// Este endpoint es usado como un metodo PATCH, si deseas hacer un post, ya existe un
export const post: APIRoute = async ({ params, request, redirect }) => {
	const json: any = {};
	const { empleado } = params;

	(await request.formData()).forEach((value, key) => {
		json[key] = value;
	});

	if (!json['foto']) {
		delete json['foto'];
	}

	json['sueldo_texto'] = NumeroALetras(json['sueldo_dia']);

	// console.count("patch")


	const body = await patchEmpleado(
		Number.parseInt(empleado),
		json,
	);
	return redirect(`/recursos_humanos/empleado/${empleado}`, 308);
};
