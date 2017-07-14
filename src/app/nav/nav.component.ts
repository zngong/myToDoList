import { Component, OnInit ,Inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public selected:string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/unfinished'])
    this.selected = 'unfinished'
  }
  selectNav(type:string):void{
    this.selected = type;
  }

}
