import { Component, OnInit } from '@angular/core';
import {MusicserviceService} from '../musicservice.service'
@Component({
  selector: 'compmusic',
  template: `
    <ul *ngFor="let x of musicalinstruments">
<li>{{x.instrumentname}}</li>
  </ul>
  `,
  styles: [
  ]
})
export class CompmusicComponent implements OnInit {
  public musicalinstruments:any =   [];

 
  constructor(private _musicserviceservice :MusicserviceService) {
 
     
 this.musicalinstruments= _musicserviceservice.getMusicalinstruments();
   
  }
 
  
  ngOnInit() {
     
   }
 
 }


