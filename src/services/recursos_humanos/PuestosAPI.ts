import type CRUDOperations from '../api/CRUDOperations';
import APIClient from '../api/APIClient';
import type { Puesto, Puestos } from '../../types/recursos_humanos';

class PuestosAPI implements CRUDOperations<Puesto> {
  private apiClient: APIClient<Puesto>;

  constructor(apiUrl: string) {
    this.apiClient = new APIClient<Puesto>(apiUrl, 'puestos');
  }

  async getAll(params?: URLSearchParams): Promise<Puestos> {
    return this.apiClient.getAll(params);
  }

  async getOne(id: number): Promise<Puesto> {
    return this.apiClient.getOne(id);
  }

  async create(data: Puesto): Promise<Puesto> {
    return this.apiClient.create(data);
  }

  async update(id: number, data: Puesto): Promise<Puesto> {
    return this.apiClient.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.apiClient.delete(id);
  }
}

export{ 
	PuestosAPI
};
