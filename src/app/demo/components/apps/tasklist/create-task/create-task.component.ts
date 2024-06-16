import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogConfig, Task } from 'src/app/demo/api/task';
import { TaskService } from '../service/task.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    providers: [MessageService]
})
export class CreateTaskComponent implements OnInit, OnDestroy {

    task!: Task;

    dialogConfig: DialogConfig = {header: '', visible: false};

    subscription: Subscription;

    dialogSubscription: Subscription;

    constructor(private messageService: MessageService, private taskService: TaskService) {
        this.subscription = this.taskService.selectedTask$.subscribe(data => this.task = data);
        this.dialogSubscription = this.taskService.dialogSource$.subscribe(data => {
            this.dialogConfig = data;
            
            if(this.dialogConfig.newTask) {
                this.resetTask();
            }
        });
    }

    ngOnInit(): void {
        this.resetTask();
    }

    filterMembers(event: any) {
        let query = event.query;
    }

    save() {
        this.task.id = Math.floor(Math.random() * 1000);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `Task "${this.task.name}" created successfully.` });
        this.taskService.addTask(this.task);
        this.taskService.closeDialog();
    }

    cancelTask(){
        this.resetTask()
        this.taskService.closeDialog();
    }

    resetTask() {
        this.task = { id: this.task && this.task.id ? this.task.id : Math.floor(Math.random() * 1000), status: 'Waiting' };
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    
}
