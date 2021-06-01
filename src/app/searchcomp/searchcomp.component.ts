import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchcomp',
  template: `
    <p>
      searchcomp works!
      <button (click)="navigate('mumbai', 'chennai')">Navigate</button>
    </p>
  `,
  styles: [
  ]
})
export class SearchcompComponent implements OnInit {

  constructor(private router:Router) { 
   
  }

  navigate(c:string, s:string) {
    this.router.navigate(['optparameter', {city: c, state:s}]);
  }
  ngOnInit(): void {
  }

  
}
