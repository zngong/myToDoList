import { Component ,ViewChild } from '@angular/core';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent{
  email:string;
  password:string;

  constructor() { }
  @ViewChild('popup1') popup1: Popup;
  @ViewChild('popup2') popup2: Popup;
  @ViewChild('popup3') popup3: Popup;
  @ViewChild('popup4') popup4: Popup;
  @ViewChild('popup5') popup5: Popup;
  ngOnInit() {
  }
  /*Popup拥有的属性和方法*/
  /*confirmBtnStyle
  cancelBtnStyle
  mainClass
  confirmClick
  cancelClick
  options
  onResize
  ngOnInit
  show
  setOptions
  hide
  confirmNo
  confirmYes
  setWidth*/

  showPopup1(){
    this.popup1.options = {
      cancleBtnClass: "btn btn-default",
      confirmBtnClass: "btn btn-default",
      color: "#4180ab",
      header: "Single Popup on a page",
      widthProsentage:20,
      confirmBtnContent:'确定',
      cancleBtnContent:'取消'
    }
    // this.popup1['mainStyle']['margin-left'] = '10%'

    console.log('=======popup======',this.popup1)
    // for(var i in this.popup1){
    //   console.log('=======popup======',i)
    // }
    this.popup1.show(this.popup1.options);
  }

  showPopup2(){
    this.popup2.options = {
      cancleBtnClass: "btn btn-default",
      confirmBtnClass: "btn btn-default",
      color: "#5cb85c",
      header: "Size 60% of page - color = #5cb85c",
      widthProsentage:60,
      animation:"fadeInUp"}
    this.popup2.show(this.popup2.options);
  }

  showPopup3(){
    this.popup3.options = {
      cancleBtnClass: "btn btn-default",
      confirmBtnClass: "btn btn-default",
      color: "#333",
      header: "Animations...",
      widthProsentage:60,
      animation: "bounceIn"}
    this.popup3.show(this.popup3.options);
  }

  showPopup4(){
    this.popup4.options = {
      cancleBtnClass: "btn btn-default",
      confirmBtnClass: "btn btn-default",
      color: "#5cb85c",
      header: "Events...",
      widthProsentage:50,
      animation: "bounceInDown"}
    this.popup4.show(this.popup4.options);
  }

  showPopup5(){
    this.popup5.options = {
      cancleBtnClass: "btn btn-default",
      confirmBtnClass: "btn btn-mbe-attack",
      color: "#A0DE4F",
      header: "Login...",
      widthProsentage:50,
      animation: "bounceInDown",
      confirmBtnContent: "Login"}
    this.popup5.show(this.popup5.options);
  }

  YourConfirmEvent(){
    alert('You cliked confirm');
    this.popup4.hide();
  }

  login(){
    alert('Email: ' + this.email + '  Password: ' + this.password);
    this.popup5.hide();
  }
}
