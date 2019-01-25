import { FormsModule, FormBuilder, FormGroup, Validators, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { User, Dictionary } from '../entities';
import { UserService } from '../services/user.service';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { sha256, sha224 } from 'js-sha256';
import { DictionaryService } from '../services/dictionary.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  submitted = false;
  userForm: FormGroup;
  confirmPass: string;
  users: User[] = [];
  testHash: string;
  constructor(private httpService: HttpService, private fb: FormBuilder, private userService: UserService,
                       private usersService: UsersService, public dictionaryService: DictionaryService) {
   }


  ngOnInit() {
    this.user = this.userService.getUser();

   this.users = this.usersService.users;

    this.userForm = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z0-9]+'),
                   Validators.maxLength(25)], uniqueLogin(this.httpService)],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25), this.passwordConfirming]],
      email: ['', [Validators.required, Validators.email], uniqueEmail(this.httpService)],
      firstname: [''],
      lastname: ['']
    });

  }
register() {
  if (this.userForm.valid) {
    this.user.userType.userTypeId = 2;
  this.httpService.addUser(this.user).subscribe();
  }
}
onSubmit() {
  this.submitted = true;
}



get login() {
return this.userForm.get('login');
}
get password() {
  return this.userForm.get('password');
}
get confirmpassword() {
  return this.userForm.get('confirmpassword');
}
get email() {
  return this.userForm.get('email');
}
get firstname() {
  return this.userForm.get('firstname');
}
get lastname() {
  return this.userForm.get('lastname');
}
passwordConfirming(c: AbstractControl): any {
  if (!c.parent || !c) { return; }
  const pwd = c.parent.get('password');
  const cpwd = c.parent.get('confirmpassword');

  if (!pwd || !cpwd) { return ; }
  if (pwd.value !== cpwd.value) {
      return { invalid: true };
  }
}

}

export function uniqueLogin(httpService: HttpService): AsyncValidatorFn {
   return(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
     return httpService.getUserByLogin(c.value).pipe(
        map(users => {
          return users && users.length >  0 ? {'uniqueLogin': true} : null;
        })
     );
   };
  }
  export function uniqueEmail(httpService: HttpService): AsyncValidatorFn {
    return(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return httpService.getUserByEmail(c.value).pipe(
        map(users => {
          return users && users.length > 0 ? {'uniqueEmail': true} : null;
        } )
      );
    };
  }


