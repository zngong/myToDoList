import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import { Location } from '@angular/common';
import {Tasks} from '../app.taskType';
import { TaskService }  from '../app.task.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(public task:Tasks, private route:ActivatedRoute,
              private taskService:TaskService,private location:Location,private router:Router) { }
  ngOnInit():void {
    this.route.params.switchMap((params: Params) => this.taskService.getTaskDetail(+params['id']))
      .subscribe(task => this.task = task);
  }
  doSave(task:Tasks):void{
    this.taskService.updateTask(task).then(res=>this.router.navigate(['/unfinished']))
  }
  goBack(): void {
    this.location.back();
  }

}
