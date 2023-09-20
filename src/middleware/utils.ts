
export function skipMiddleware(urlPathname: string, passthroughRoutes:Array<string>) {
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
