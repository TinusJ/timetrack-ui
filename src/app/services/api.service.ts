import { Injectable } from '@angular/core';
import { BaseDataService } from './base.service';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> implements BaseDataService<T> {

  public service: string = '';

  constructor(private http: HttpClient) { }

  getAll(): Observable<T[]> {
    return this.http.get(`${environment.apiUrl}${this.service}`)
      .pipe(map(res => res as T[]));
  }

  // Get by id
  get(id: string): Observable<T> {
    return this.http.get(`${environment.apiUrl}${this.service}/${id}`)
      .pipe(map(res => res as T));
  }

  create(t: T): Observable<T> {
    return this.http.post(`${environment.apiUrl}${this.service}`, t)
      .pipe(map(res => res as T));
  }

  update(uid: string, t: T): void {
    this.http.put(`${environment.apiUrl}${this.service}/${uid}`, t);
  }

  delete(uid: string): void {
    this.http.delete(`${environment.apiUrl}${this.service}/${uid}`);
  }
}
