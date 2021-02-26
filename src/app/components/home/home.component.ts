import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
  <br>
    <app-css></app-css>
  <br>
    <app-clases></app-clases>
  <br><br><br>
    <p [ngResaltado]=" 'purple' ">
    Hola mundo
    </p>
    <br>
    <app-ng-swicht></app-ng-swicht>

  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
