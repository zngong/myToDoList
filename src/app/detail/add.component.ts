/**
 * Created by gzn on 2017/7/13.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params ,Router } from '@angular/router';
import { FormControl ,FormGroup,FormArray, FormBuilder,Validators,ReactiveFormsModule } from '@angular/forms';

import { Tasks } from '../app.taskType';
import { TaskService }  from '../app.task.service';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./detail.component.css']
})
export class AddComponent implements OnInit {
  constructor(private task:Tasks,private route:ActivatedRoute,
              private taskService:TaskService,private fb:FormBuilder,private router:Router) { }
  public tasks: FormGroup;
  public taskInfo: Tasks = new Tasks();
  public nowDate:string;
  ngOnInit():void {
    this.tasks = this.fb.group({
      "title": [
        this.taskInfo.title,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(32)
        ]
      ],
      "content": [
        this.taskInfo.content,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(64)
        ]
      ],
      "isComplete": [
        this.taskInfo.isComplete,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(64)
        ]
      ],
      "createTime": [
        this.taskInfo.createTime,
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ],
    });
  }
  onSubmit(){
    this.taskInfo = this.tasks.value;
    this.taskInfo.createTime = (new Date()).toString();
    this.taskService.addTask(this.taskInfo).then(task=>this.router.navigate(['/unfinished']))
  }
}
