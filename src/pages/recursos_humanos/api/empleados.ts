import type { APIContext, APIRoute } from "astro";
import { empleadosAPI } from "../../../services";
import { NumeroALetras } from "../../../lib/numeros-a-letras";

export const post : APIRoute = async ({ request, redirect }:APIContext) => {
	const json:any = {};

	(await request.formData()).forEach((value,key) => {
		json[key] = value
	});

	if (!json['foto']){
		delete json['foto'];
	}

	json['sueldo_texto'] = NumeroALetras(json['sueldo_dia']);
	
	const body = await empleadosAPI.create(json);
	return redirect('/recursos_humanos/empleados', 308);
}
