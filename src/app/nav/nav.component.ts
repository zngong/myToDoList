import { Component, OnInit ,Inject} from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public selected:string;
  constructor(private router: Router,private location:Location) { }

  ngOnInit() {
    this.router.navigate(['/unfinished'])
    this.selected = 'unfinished';
    this.router.events
      .subscribe((event) => {
        var navInfo = event['url'].split('/')[1]
        if(navInfo == 'unfinished'){
          this.selectNav('unfinished')
        }
      })
  }
  selectNav(type:string):void{
    this.selected = type;
  }

}
