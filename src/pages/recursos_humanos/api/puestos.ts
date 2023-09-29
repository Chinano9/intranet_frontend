import type { APIContext, APIRoute } from "astro";
import { puestosAPI } from "../../../services";

export const post : APIRoute = async ({ request, redirect }:APIContext) => {
	const json:any = {};

	(await request.formData()).forEach((value,key) => {
		json[key] = value
	});
	
	const body = await puestosAPI.create(json);
	return redirect('/recursos_humanos/puestos', 308);
}
