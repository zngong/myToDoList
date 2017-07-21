/**
 * Created by gzn on 2017/7/14.
 */
import { Component, OnInit ,ViewChild} from '@angular/core';
import { TaskService } from '../app.task.service';
import { Tasks } from '../app.taskType';
import {Router} from '@angular/router'
import {Message,ConfirmationService } from 'primeng/primeng';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [ConfirmationService]
})
export class TaskListUnfinished implements OnInit {
  taskList:Tasks[];
  @ViewChild('popup1') popup1: Popup;
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
    this.showPopup();

  }
  showPopup(){
    this.popup1.options = {
      cancleBtnClass: "btn btn-default",
      confirmBtnClass: "btn btn-default",
      color: "#4180ab",
      header: "温馨提示",
      widthProsentage:20,
      confirmBtnContent:'确定',
      cancleBtnContent:'取消'
    }
    this.popup1.show(this.popup1.options);
  }
  confirm(task){
    this.taskService.deleteTask(task.id).then(()=>{
      this.taskList = this.taskList.filter(tasks=>tasks !== task)
    })
    this.popup1.hide();
  }
  doCancel(){
    console.log("=======取消删除=====");
  }


}
