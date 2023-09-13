import { sequence } from '';
// `context` and `next` are automatically typed
const passthroughRoutes = ['/sign-in', '/'];

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

async function isAuthenticated({locals}, next:Function) {
	locals.user.isAuthenticated
	return next();
}

async function hasPermisions({locals}, next) {
	
}


export const onRequest = sequence(isAuthenticated, hasPermisions);
