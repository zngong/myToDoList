import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import { Location } from '@angular/common';
import {Tasks} from '../app.taskType';
import { TaskService }  from '../app.task.service';
import 'rxjs/add/operator/switchMap';
import { FormGroup, FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './edit.component.html',
  styleUrls: ['./detail.component.css']
})
export class EditComponent implements OnInit {
  constructor(public task:Tasks, private route:ActivatedRoute,private fb:FormBuilder,
              private taskService:TaskService,private location:Location,private router:Router) { }
  public tasksForm: FormGroup;
  ngOnInit():void {
    this.route.params.switchMap((params: Params) => this.taskService.getTaskDetail(+params['id']))
      .subscribe(task => this.task = task);
    this.tasksForm = this.fb.group({
      "title": [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(32),
          // this.validateEmail
        ]
      ],
      "content": [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(64)
        ]
      ],
      "isComplete": [
        '',
        [

        ]
      ],
    });
    this.tasksForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
  onSubmit(task:Tasks):void{
    this.taskService.updateTask(task).then(res=>this.router.navigate(['/unfinished']))
  }
  onValueChanged(data?:any){
    if (!this.tasksForm) { return; }
    const form = this.tasksForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';// 清空上一次的错误信息
      const control = form.get(field);//调用FormGroup的get方法得到某一个需要校验的表单字段
      if (control && control.dirty && !control.valid) {//给验证不合格的字段赋错误信息值
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'title': '',
    'content': ''
  };

  validationMessages = {
    'title': {
      'required':      'title is required.',
      'minlength':     'title must be at least 5 characters long.',
      'maxlength':     'title cannot be more than 32 characters long.',
      // 'validateEmail' : 'this is not email'
    },
    'content': {
      'required': 'content is required.',
      'minlength':     'title must be at least 2 characters long.',
      'maxlength':     'title cannot be more than 64 characters long.',
    },
  };
  goBack(): void {
    this.location.back();
  }

}
