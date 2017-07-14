import { Component, OnInit } from '@angular/core';
import { TaskService } from '../app.task.service';
import { Tasks } from '../app.taskType';
import {Router} from '@angular/router'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListCompleted implements OnInit {
  taskList:Tasks[];
  constructor(private taskService:TaskService,private router:Router) { }
  ngOnInit() {
    this.taskService.getTaskList().then(tasks=>{
      this.taskList = tasks.filter(task=>task.isComplete != 1)
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
