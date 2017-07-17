import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
// @Input()
tipDialog_config:any;
  constructor() { }
  ngOnInit() {
    this.tipDialog_config = {
      title:'提示框标题',
      content:'提示框内容！',
      CANCEL:true
    }
  }
  doSave(){
    return Promise.resolve('OK');
  }
  doCancel(){
    return Promise.resolve('CANCEL');
  }

}


