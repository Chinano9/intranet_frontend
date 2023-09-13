import { defineMiddleware } from "astro:middleware";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {

});


const passthroughRoutes = ['/sign-in', '/'];

function skipMiddleware(urlPathname: string) {
  let shouldSkip = false;

  for (const route of passthroughRoutes) {
    if (urlPathname.startsWith(route)) {
      shouldSkip = true;
      break;
    }
  }

  return shouldSkip;
}
