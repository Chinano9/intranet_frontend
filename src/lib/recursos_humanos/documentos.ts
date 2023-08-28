import { url } from '../utils';

const DOCS_ROUTE = url + 'empleados/documentos/';

export const getDocumentoEmpleado = async (documento: string,num_empleado: string) => {
	const doc = DOCS_ROUTE + `${documento}/${num_empleado}`;
	try {
		const response = await fetch(doc, {
		});

		if (response.ok) {
			// La solicitud fue exitosa
			const blob = await response.blob();
			// Crear un enlace para descargar el archivo
			const url = URL.createObjectURL(blob);
			return url;
		} else {
			// La solicitud falló
			throw new Error(`Error al obtener el ${documento}`);
		}
	} catch (error) {
		console.error('Error:', error);
		throw new Error(`Error en la solicitud ${error}`);
	}
};
