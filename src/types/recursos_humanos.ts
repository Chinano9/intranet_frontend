export type Empleados = Empleado[];
export interface Empleado {
  id: number;
  planta: string;
  nombre: string;
  jefe_directo: Empleado | null;
  apellido_paterno: string;
  apellido_materno: string;
  fecha_nacimiento: string; 
  fecha_contratacion: string; 
  foto?: string; 
  ciudad: string;
  estado: string;
  codigo_postal: string;
  email: string;
  area_trabajo: Departamento;
  puesto: string;
  tel_casa: string;
  tel_cel: string;
  rfc: string;
  seguro_social: string;
  curp: string;
  sueldo_hora: number;
  sueldo_texto: string;
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
