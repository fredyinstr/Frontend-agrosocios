import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  progreso1: number = 20;
  progreso2: number = 30;

  tabs: any  = [
    {
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
