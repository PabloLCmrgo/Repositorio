import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

   MENU_ITEMS: any[] = [
    {
      title: 'wizard',
      icon: '#',
      link: '/pages/wizard',
      home: true,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
