import type { APIRoute } from 'astro';
import {
	patchEmpleado,
	deleteEmpleado,
	patchFotoEmpleado,
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


// Este endpoint es usado como un metodo PATCH, si deseas hacer un post, usa la funcion postEmpleado, ubicada en ~/src/app/lib/recursos_humanos.
// o el endpoint en api/empleados
export const post: APIRoute = async ({ params, request, redirect }) => {
	const json: any = {};
	const { empleado } = params;

	(await request.formData()).forEach((value, key) => {
		json[key] = value;
	});

	delete json['foto'];
	if (json['sueldo_dia']){
		json['sueldo_texto'] = NumeroALetras(json['sueldo_dia']);
	}

	// console.count("patch")

	try {
		const body = await patchEmpleado(
			Number.parseInt(empleado),
			json,
		);
	} catch (error) {
		console.error('Error al actualizar empleado: ', error);
		return redirect('/500', 301)
	}
	return redirect(`/recursos_humanos/empleado/${empleado}`, 308);
};
