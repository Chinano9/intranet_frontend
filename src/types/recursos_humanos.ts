export type Empleados = {
	pagina_actual: number;
	total_paginas: number;
	total_empleados: number;
	next: number;
	prev: number;
	results: Empleado[];
}
export interface Empleado {
	id: string | number;
  nombre: string;
  apellido_paterno: string;
  apellido_materno?: string | null;
  fecha_nacimiento: string; // Assuming date is represented as string in "DD/MMM/YYYY" format
  fecha_contratacion: string; // Assuming date is represented as string in "DD/MMM/YYYY" format
  foto?: File | null; // Assuming the photo is uploaded as a file
  ciudad_origen?: string | null;
  estado_origen?: string | null;
  ciudad_residencia: string;
  estado_residencia: string;
  calle: string;
  num_casa: string;
  codigo_postal: string;
  jefe_directo?: number | null; // Assuming jefe_directo is the ID of another Empleado
  estado_civil?: string | null;
  email: string;
  puesto: number; // Assuming puesto is the ID of a Puesto
  tel_casa?: string | null;
  tel_cel: string;
  rfc: string;
  seguro_social: string;
  curp: string;
  sueldo_dia: number;
  sueldo_texto: string;
  foto_url?: string | null;
}

interface File {
  name: string;
  size: number;
  type: string;
}

export type Puestos = Puesto[];
export interface Puesto {
	id:number;
	nombre:string;
	responsabilidad:string;
}

export type Departamentos = Departamento[];
export interface Departamento {
  id: number;
  nombre: string;
  jefe: Empleado;
  planta: Planta;
}

export type Plantas = Planta[];
export interface Planta {
	id: number;
	nombre: string;
}
