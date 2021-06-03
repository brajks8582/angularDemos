import { Component, OnInit } from '@angular/core';
import { MusicserviceService } from '../musicservice.service';
import { Observable  } from "rxjs/";

@Component({
  selector: 'displaymusic',
  template: `
   <ul *ngFor="let x of myinstruments">
    <li>{{x.instid}}:{{x.instrumentname}} costs {{x.price}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class DisplaymusicComponent implements OnInit {

  public myinstruments:any =[];

  constructor(private serviceobj : MusicserviceService) { }

  ngOnInit(): void {
    this.myinstruments=this.serviceobj.getMusicalinstruments() 
  }

}
