import type { APIRoute } from "astro";
import { postEmpleado , patchEmpleado } from "../../../lib/recursos_humanos";
import { NumeroALetras } from "../../../lib/numeros-a-letras";
import { getEmpleados } from "../../../lib/data";

export const post : APIRoute = async ({ request }) => {
	const json:any = {};

	(await request.formData()).forEach((value,key) => {
		json[key] = value
	});

	if (!json['foto']){
		delete json['foto'];
	}

	json['sueldo_texto'] = NumeroALetras(json['sueldo_dia']);
	
	const body = await postEmpleado(json);
	return {
		body: JSON.stringify(body)
	}
}

export const get : APIRoute = async ({props, request}) => {
	const {query, page} = props;
	const data = await getEmpleados(query, page);

	return data;
}
