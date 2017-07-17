/**
 * Created by gzn on 2017/7/13.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params ,Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators,FormControl} from '@angular/forms';

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
  public tasksForm: FormGroup;
  public taskInfo: Tasks = new Tasks();
  ngOnInit():void {
    this.taskInfo.isComplete = 1;
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
  onSubmit(myForm){
    this.tasksForm.value.isComplete = this.taskInfo.isComplete
    this.taskInfo = this.tasksForm.value;
    this.taskInfo.createTime = (new Date()).toString();
    this.taskService.addTask(this.taskInfo).then(task=>this.router.navigate(['/unfinished']))
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
  //自定义表单校验
  // validateEmail(c: FormControl) {
  //   let EMAIL_REGEXP = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
  //   return EMAIL_REGEXP.test(c.value) ? null : {
  //   validateEmail: {
  //     valid: false
  //   }
  // };
 // }
}
