import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Project } from 'src/app/demo/api/project';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends ApiService<Project> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.service = '/projects';
  }
}
