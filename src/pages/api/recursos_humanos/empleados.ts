import type { APIRoute } from "astro";
import { postEmpleado , patchEmpleado } from "../../../lib/recursos_humanos";

export const post : APIRoute = async ({ request }) => {
	const body = await postEmpleado(request.body);
	return {
		body: JSON.stringify(body)
	}
}

export const all: APIRoute = async ({params ,request}) => {
	if (request.method == 'PATCH'){
		const body = await patchEmpleado(params, request.body);

		return {body: JSON.stringify(body)}
	}
}
