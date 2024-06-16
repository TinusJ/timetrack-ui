import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/model-services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {

  constructor(private service: ProjectService) { }

  ngOnInit(): void {
   console.log("ProjectComponent initialized "); 
  }

  createProject(){
    this.service.create({ projectName: 'Project 1', projectDescription: 'Description 1', projectCode: 'Code 1', active: true }).subscribe(
      response => {
        console.log(response);
      }
    );
  }

}
