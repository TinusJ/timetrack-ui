import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    ProjectComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ButtonModule,
    RippleModule
  ]
})
export class ProjectModule { }
