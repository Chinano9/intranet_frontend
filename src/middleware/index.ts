import jwt from 'jsonwebtoken';

import { skipMiddleware } from './utils';
import type { APIContext } from 'astro';
// `context` and `next` are automatically typed
const passthroughRoutes = ['/sign-in', '/', '/404', '/500', '/favicon.ico'];


async function isAuthenticated({ locals , redirect, url}, next) {
  const accessToken = locals.accessToken;
	console.log('noesautenticado')

	if (!skipMiddleware(url.pathname, passthroughRoutes)) {
		// Skip authentication for this route
		return await next();
	}

  if (!accessToken) {
		const response = new Response("{ 'message': 'Acceso no autorizado. Falta el token de acceso.' }",{status:401})
    return redirect('/401', 303);
  }

  try {
    // Verificar y decodificar el token JWT utilizando la clave secreta
    const decodedToken = jwt.verify(accessToken, process.env.DJANGO_SECRET_KEY);
    // Aquí podrías realizar más validaciones basadas en la información del token decodificado
    // Agrega información de usuario autenticado al objeto locals si es necesario.
    locals.userAuthenticated = true;
    // Llama a next() para continuar con el flujo de ejecución.
    return await next();
  } catch (error) {
    return {
        status: 401,
        body: { message: 'Acceso no autorizado. Token de acceso no válido.' }
    };
  }

	return await next();
}

export async function onRequest(_, next){
	return next();
}
