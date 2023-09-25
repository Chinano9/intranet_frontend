import CRUDOperations from './CRUDOperations';

class APIClient<T> implements CRUDOperations<T> {
  constructor(private apiUrl: string, private resource: string) {}

  private getResourceUrl(id?: number | string): string {
    return id ? `${this.apiUrl}/${this.resource}/${id}` : `${this.apiUrl}/${this.resource}`;
  }

  async getAll(params?: URLSearchParams): Promise<T[]> {
    const endpoint = `${this.getResourceUrl()}?${params?.toString() ?? ''}`;
    const response = await fetch(endpoint, { method: 'GET' });
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    return response.json();
  }

  async getOne(id: number): Promise<T> {
    const endpoint = this.getResourceUrl(id);
    const response = await fetch(endpoint, { method: 'GET' });
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    return response.json();
  }

  async create(data: T): Promise<T> {
    const endpoint = this.getResourceUrl();
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Error creating resource');
    }
    return response.json();
  }

  async update(id: number, data: T): Promise<T> {
    const endpoint = this.getResourceUrl(id);
    const response = await fetch(endpoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Error updating resource');
    }
    return response.json();
  }

  async delete(id: number): Promise<void> {
    const endpoint = this.getResourceUrl(id);
    const response = await fetch(endpoint, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error('Error deleting resource');
    }
  }
}

export default APIClient;
