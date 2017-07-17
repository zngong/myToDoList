/**
 * Created by gzn on 2017/7/14.
 */
import { Component, OnInit ,Input} from '@angular/core';
import { TaskService } from '../app.task.service';
import { Tasks } from '../app.taskType';
import {Router} from '@angular/router'
import {Message,ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [ConfirmationService]
})
export class TaskListUnfinished implements OnInit {
  taskList:Tasks[];
  constructor(private taskService:TaskService,private router:Router,private confirmationService:ConfirmationService) { }
  ngOnInit() {
    this.taskService.getTaskList().then(tasks=>{
      this.taskList = tasks.filter(task=>task.isComplete != 2)
    })
  }
  viewDetail(task:Tasks):void{
    this.router.navigate(['/detail', task.id]);
  }
  doEdit(task:Tasks):void{
    this.router.navigate(['/edit', task.id]);
  }
  deleTask(task:Tasks):void{
    this.taskService.deleteTask(task.id).then(()=>{
      this.taskList = this.taskList.filter(tasks=>tasks !== task)
    })
  }

}
