import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms' 

@Component({
  selector: 'app-reactiveforms',
  template: `
    
  `,
  styles: [
  ]
})
export class ReactiveformsComponent implements OnInit {

  constructor() { }
   ngOnInit()
  {
  // this.nameForm=new FormGroup(
  // {
  // origin: new FormControl('', {validators: Validators.required, updateOn:'blur'}),
  // destination:new FormControl ('',{validators: Validators.required, updateOn:'blur'})
  // });
  }

}
