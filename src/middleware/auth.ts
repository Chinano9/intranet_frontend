/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { sequence, defineMiddleware } from 'astro:middleware';
import jwt from 'jsonwebtoken';
// `context` and `next` are automatically typed
const passthroughRoutes = ['/sign-in', '/', '/401', '/500', '/404'];

function skipMiddleware(urlPathname: string) {
	let shouldSkip = false;
	
  // eslint-disable-next-line no-restricted-syntax
  for (const route of passthroughRoutes) {
		if (urlPathname.startsWith(route)) {
			shouldSkip = true;
      break;
    }
  }
	
  return shouldSkip;
}


const isAuthenticated = defineMiddleware(({ locals, request, redirect }, next) => {
	const url = request.url.split('/') 
	console.log(url)
	if(skipMiddleware('/'+url[3])) return next();
	const {accessToken} = locals;
	console.log('isAuth?')

	if (!accessToken) {
			return redirect('/401', 308);
	}
	
	try {
		// Verificar y decodificar el token JWT utilizando la clave secreta

		// Aquí podrías realizar más validaciones basadas en la información del token decodificado

		// Agrega información de usuario autenticado al objeto locals si es necesario.
		locals.userAuthenticated = true;

		// Llama a next() para continuar con el flujo de ejecución.
		return next();
	} catch (error) {
		return {
				status: 401,
				body: { message: 'Acceso no autorizado. Token de acceso no válido.' }
		};
	}
})
async function hasPermisions({locals}, next) {
	return next();
}


export const onRequest = sequence(isAuthenticated, hasPermisions);
