import type { APIContext, APIRoute } from "astro";
import { getKardexEmpleado, getContratoEmpleado, getGafeteEmpleado } from "../../../../lib/recursos_humanos";

export const post:APIRoute = async ({params, request, redirect}:APIContext) => {
	const {id} = params;
	const select = await request.formData();
	console.table(select)
	let data;
	switch(select.get('documento')){
		case 'kardex':
			data = await getKardexEmpleado(id);
			break;
		// case 'contrato':
		// 	data = getContratoEmpleado(id);
		// 	break;
		// case 'gafete':
		// 	data = getGafeteEmpleado(id);
		// 	break;
		// default:
		// 	console.error('ruta inexistente');
		// 	return redirect('/404', 308)
	}
	return new Response( data, {encoding:'binary'});
}
