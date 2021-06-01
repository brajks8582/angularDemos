import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-optparametercomp',
  template: `
    <p>
      optparametercomp works!
    </p>
  `,
  styles: [
  ]
})
export class OptparametercompComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) {
      this.route.params.subscribe(params => {
        console.log(params);
        console.log (params['city']);
  console.log(params['state']);
      });
  
     }

  ngOnInit(): void {
  }

}
