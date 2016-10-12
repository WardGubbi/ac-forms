import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-forms-comp',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  form = new FormGroup({
    first: new FormControl(),
    last: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    confirm: new FormControl(),
    newsletter: new FormControl(),
  });
  
  constructor() {

  }

}
