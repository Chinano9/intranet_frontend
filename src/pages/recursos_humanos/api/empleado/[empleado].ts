/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { APIRoute } from 'astro';
import { empleadosAPI } from '../../../../services';
import { NumeroALetras } from '../../../../lib/numeros-a-letras';
import type { Empleado } from '../../../../types/recursos_humanos';

// Esta ruta se usa como un sustituto al metodo DELETE, ya que este no puede ser usado por formularios
// Para hacer fetch a los empleados, usa la funcion getEmpleado, o getEmpleados de ~/src/app/lib/recursos_humanos
// o en su defecto, la ruta de la API en django
export const get: APIRoute = async ({ params, redirect }) => {
	const { empleado } = params;
	await empleadosAPI.delete(Number.parseInt(empleado??'', 10));

	return redirect('/recursos_humanos/empleados/', 308)
};


// Este endpoint es usado como un metodo PATCH, si deseas hacer un post, usa la funcion postEmpleado, ubicada en ~/src/app/lib/recursos_humanos.
// o el endpoint en api/empleados
export const post: APIRoute = async ({ params, request, redirect }) => {
	const json: Empleado = {};
	const { empleado } = params;

	(await request.formData()).forEach((value, key) => {
		json[key] = value;
	});

	delete json.foto
	if (json.sueldo_dia){
		json.sueldo_texto = NumeroALetras(json.sueldo_dia);
	}

	// console.count("patch")

	try {
		await empleadosAPI.update(
			Number.parseInt(empleado??'', 10),
			json
		);
	} catch (error) {
		console.error('Error al actualizar empleado: ', error);
		return redirect('/error/500', 301)
	}
	return redirect(`/recursos_humanos/empleado/${empleado}`, 308);
};
