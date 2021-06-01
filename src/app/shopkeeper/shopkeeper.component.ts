import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-shopkeeper',
  template: `
  <h2>Shopkeeper</h2>
  <button (click)= "cust1()">Customer1</button>
  <br>
   <button (click)= "cust2()">Customer2</button>

   
   <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class ShopkeeperComponent implements OnInit {

  constructor(private ar:ActivatedRoute, private r:Router) { }

  cust1()
{
this.r.navigate(['customer1'], {relativeTo:this.ar});

}

cust2()
{
this.r.navigate(['customer2'], {relativeTo:this.ar});

}

  ngOnInit(): void {
  }

}
