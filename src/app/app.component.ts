import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConfirmequalvalidatorDirective } from './confirmequalvalidator.directive';

declare var NgForm: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  txtdate: any;
  txtdate1: any;

  constructor(private formBuilder: FormBuilder) { }
  title = 'reactive-form-validation-in-angular8';

  ngOnInit() {

  }
  getDates() {

    alert(this.txtdate);
  }

  checkValue(event) {

    this.txtdate = event.target.value;

  }


}
