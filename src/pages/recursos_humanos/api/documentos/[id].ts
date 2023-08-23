import type { APIContext, APIRoute } from "astro";
import { getKardexEmpleado, getContratoEmpleado, getGafeteEmpleado } from "../../../../lib/recursos_humanos";

export const get:APIRoute = async ({params, request, redirect}:APIContext) => {
	console.log('hola')
	const {id} = params;
	const select = await request.formData();
	console.table(select)
	let data;
	switch(select['documento']){
		case 'kardex':
			data = getKardexEmpleado(id);
			break;
		case 'contrato':
			data = getContratoEmpleado(id);
			break;
		case 'gafete':
			data = getGafeteEmpleado(id);
			break;
		default:
			console.log('ruta inexistente');
			return redirect('/404', 308)
	}
	return redirect(`/recursos_humanos/empleado/${id}`);
}
