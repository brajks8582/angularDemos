import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'templateform',
  template: `
    <h1>Template Form</h1>
  <form>
<p>Origin : <input type="text" id="origin"  [(ngModel)]="travel.origin" name="origin"/>
<p>Destination : <input type="text" id="destination"  [(ngModel)]="travel.destination" name="destination"/>
  </form>
  <h2>From {{travel.origin}} to  {{travel.destination}}</h2>
  `,
  styles: [
  ]
})
export class TemplateformComponent implements OnInit {
  public travel={origin:"Mumbai", destination:"Delhi"};
  constructor() { }

  ngOnInit(): void {
  }

}
