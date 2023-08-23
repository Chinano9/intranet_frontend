import { url } from "../utils";

const DOCS_ROUTE = url + 'empleados/documentos/';


export const getKardexEmpleado = async (num_empleado:number) => {
	console.log('getKardex')
	const kardex = DOCS_ROUTE + `kardex/${num_empleado}`;
    try {
        const response = await fetch(kardex);
        
        if (response.ok) {
            // La solicitud fue exitosa
            const blob = await response.blob();
            const filename = response.headers.get("content-disposition").split("filename=")[1];

            // Crear un enlace para descargar el archivo
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);

            return "Descarga exitosa";
        } else {
            // La solicitud falló
            return "Error al obtener el kardex";
        }
    } catch (error) {
        console.error("Error:", error);
        return "Error en la solicitud";
    }
}

export const getGafeteEmpleado = async (num_empleado:number) => {
	
}

export const getContratoEmpleado = async (num_empleado:number) => {
	
}

export const getEmpleadoExport = async (num_empleado:number) => {
	
}
