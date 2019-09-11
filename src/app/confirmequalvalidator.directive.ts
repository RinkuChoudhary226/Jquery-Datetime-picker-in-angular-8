import { Directive, Input  } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appConfirmequalvalidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmequalvalidatorDirective,
    multi: true
    }]
})
export class ConfirmequalvalidatorDirective {
  @Input() appConfirmEqualValidator: string;

  validate(control: AbstractControl): {[key: string]: any} |null {
  const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
  if (controlToCompare && controlToCompare.value !== control.value) {
  return { notEqual: true};
  }
  return null;
  }
  }
