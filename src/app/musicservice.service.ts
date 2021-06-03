import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicserviceService {

  constructor() { }

  
  
getMusicalinstruments()
  
{

    return  [
      {"instid":1, "instrumentname":"tabla", price:5000},

      {"instid":2, "instrumentname":"harmonium", price:35000},

      {"instid":3, "instrumentname":"Dholak", price:2000},

      {"instid":4, "instrumentname":"casio", price:3000},
   
   {"instid":5, "instrumentname":"flute", price:200}
        ];
  }


}
