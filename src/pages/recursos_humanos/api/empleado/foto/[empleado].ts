import type { APIRoute } from "astro";
import { patchFotoEmpleado } from "../../../../../lib/recursos_humanos";


export const post:APIRoute =async ({ params, request, redirect }) => {
	const {empleado} = params;
	console.table(await request);
	try {
		await patchFotoEmpleado(empleado, await request.formData());
		return redirect(`/recursos_humanos/empleado/${empleado}`, 308);
	} catch (error) {
		console.error('Error al subir foto: ', error);
		return redirect('/500', 301)
	}
}
