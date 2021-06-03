import { Component, OnInit } from '@angular/core';
import { ServicecallwebapiService} from '../servicecallwebapi.service'
import { Observable  } from "rxjs/";

@Component({
  selector: 'cognizant',
  template: `
  <h1>Braj demo</h1>
   <ul *ngFor="let x of myinstruments">
    <li>{{x.instid}}:{{x.instrumentname}} costs {{x.price}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class DisplaymusicComponent implements OnInit {

  public myinstruments:any =[];

  constructor(private serviceobj : ServicecallwebapiService) { }

  ngOnInit(): void {
    this.myinstruments=this.serviceobj.getmyData().subscribe(data=>this.myinstruments);

  }

}
