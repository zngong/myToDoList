import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
@Input()
tipDialog_config:Object;
  constructor() { }
  ngOnInit() {
  }
  doSave(){
    return Promise.resolve('OK');
  }
  doCancel(){
    return Promise.resolve('CANCEL');
  }

}


