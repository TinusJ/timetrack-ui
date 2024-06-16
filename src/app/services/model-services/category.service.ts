import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/demo/api/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ApiService<Category> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.service = '/categories';
  }
}
