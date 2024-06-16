import { Observable } from "rxjs";

export abstract class BaseDataService<T>  {
    // Get all
    abstract getAll(): Observable<T[]>;

    // Get by id
    abstract get(id: string): Observable<T>;

    // Create a new 
    abstract create(t: T): Observable<T>;

    // Update an existing 
    abstract update(uid: string, t: T): void;

    // Delete 
    abstract delete(uid: string): void;
}