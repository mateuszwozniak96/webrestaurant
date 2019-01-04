import { UserService } from './../services/user.service';
import { AbstractControl, ValidatorFn, AsyncValidatorFn, ValidationErrors, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../entities';

export function uniqueLoginValidator(users: User[]): ValidatorFn {

  return (control: AbstractControl): {[key: string]: any} | null => {
    users.forEach(user => {

      if (user.login === control.value) {
          return {
            invalidLogin: true
          };
      }
    });
    return null;
  };
}
