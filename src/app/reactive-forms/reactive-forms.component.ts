import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-forms-comp',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  form : FormGroup;

  constructor(public fb:FormBuilder) {
    this.form = this.fb.group({
      first: '',
      last: '',
      username: '',
      password: '',
      confirm: '',
      newsletter: ''
    })
    this.form.patchValue({
      first: 'Nancy',
      last: 'Drew'
    })
  }

}
