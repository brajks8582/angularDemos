import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'frmbuildercomp',
  template: `
  <form [formGroup] = "frm">
<div formGroupName="name">
  <input formControlName="first" placeholder="First">
  <input formControlName="last" placeholder="Last">
</div>
<input formControlName="email" placeholder="Email" required>
<button>Submit</button>
</form>
<p>Value: {{frm.value | json}}</p>
<p>Validation status : {{frm.status}}</p>

  `,
  styles: [
  ]
})
export class FrmBuildercompComponent implements OnInit {
  ngOnInit() {}
  frm:FormGroup;
  constructor(@Inject(FormBuilder) fb:FormBuilder) { 

    this.frm = fb.group({
      name:fb.group({
      first:['Nancy',Validators.minLength(2)],
      last:'Drew',
      }),
      email:"",
      });
      }
  }



