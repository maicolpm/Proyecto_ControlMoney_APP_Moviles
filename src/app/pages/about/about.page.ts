import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  appName: string = 'ControlMONEY';
  author: string = '@MaicolPastorMoreno'
  constructor() { }
  

  ngOnInit() {
  }

}
