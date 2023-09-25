export default interface CRUDOperations<T> {
  getAll(params?: URLSearchParams): Promise<T[]>;
  getOne(id: number): Promise<T>;
  create(data: T): Promise<T>;
  update(id: number, data: T): Promise<T>;
  delete(id: number): Promise<void>;
}
