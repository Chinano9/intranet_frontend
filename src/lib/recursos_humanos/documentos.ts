import { url } from '../utils';

const DOCS_ROUTE = `${url}empleados/documentos/`;

export const getDocumentoEmpleado = async (documento: string,num_empleado?: string,query?: string|undefined) => {
	if(!num_empleado){
		num_empleado = `?${query??''}`
	}
	let doc = `${DOCS_ROUTE}${documento}/${num_empleado??''}`;

	if(query){
		doc += `?${query}`
	}
	
	try {
		const response = await fetch(doc, {
		});

		if (response.ok) {
			// La solicitud fue exitosa
			const blob = await response.blob();
			// Crear un enlace para descargar el archivo
			const url = URL.createObjectURL(blob);
			return url;
		}
		throw new Error(`Error al obtener el ${documento}`);
	
	} catch (error:any) {
		console.error('Error:', error);
		throw new Error(`Error en la solicitud: ${error??'Error desconocido'}`);
	}
};
