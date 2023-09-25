import type CRUDOperations from '../api/CRUDOperations';
import APIClient from '../api/APIClient';
import type { Empleado, Empleados } from '../../types/recursos_humanos';

class EmpleadosAPI implements CRUDOperations<Empleado> {
  private apiClient: APIClient<Empleado>;

  constructor(apiUrl: string) {
    this.apiClient = new APIClient<Empleado>(apiUrl, 'empleados');
  }

  async getAll(params?: URLSearchParams): Promise<Empleados> {
    return this.apiClient.getAll(params);
  }

  async getOne(id: number): Promise<Empleado> {
    return this.apiClient.getOne(id);
  }

  async create(data: Empleado): Promise<Empleado> {
    return this.apiClient.create(data);
  }

  async update(id: number, data: Empleado): Promise<Empleado> {
    return this.apiClient.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.apiClient.delete(id);
  }
}

export default EmpleadosAPI;
