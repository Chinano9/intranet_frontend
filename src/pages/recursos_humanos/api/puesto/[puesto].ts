import type { APIRoute } from 'astro';
import {
	patchPuesto,
	deletePuesto,
} from '../../../../lib/recursos_humanos';

// Esta ruta se usa como un sustituto al metodo DELETE, ya que este no puede ser usado por formularios
// Para hacer fetch a los puestos, usa la funcion getPuesto, o getPuestos de ~/src/app/lib/recursos_humanos
// o en su defecto, la ruta de la API en django
export const get: APIRoute = async ({ params, request, redirect }) => {
	const { puesto } = params;
	const body = await deletePuesto(Number.parseInt(puesto ? puesto : ''));

	return redirect('/recursos_humanos/puestos/', 308)
};


// Este endpoint es usado como un metodo PATCH, si deseas hacer un post, usa la funcion postPuesto, ubicada en ~/src/app/lib/recursos_humanos.
// o el endpoint en api/puestos
export const post: APIRoute = async ({ params, request, redirect }) => {
	const json: any = {};
	const { puesto } = params;

	(await request.formData()).forEach((value, key) => {
		json[key] = value;
	});

	// console.count("patch")

	try {
		const body = await patchPuesto(
			Number.parseInt(puesto, 10),
			json
		);
	} catch (error) {
		console.error('Error al actualizar puesto: ', error);
		return redirect('/error/500', 301)
	}
	return redirect(`/recursos_humanos/puesto/${puesto}`, 308);
};
