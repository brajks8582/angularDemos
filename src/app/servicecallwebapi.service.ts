import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IMusicInstrument} from './musicinstrument';
import {Observable} from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class ServicecallwebapiService {

  private url :string = "https://localhost:44388/api/shopping";
  constructor(private http:HttpClient) { }

  getmyData(): Observable<IMusicInstrument[]> {
    return this.http.get<IMusicInstrument[]>(this.url);
  }
}
