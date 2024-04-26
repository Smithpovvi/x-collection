import { FormControl } from '@angular/forms';

export interface ILoginForm {
  loginOrEmail: FormControl<string>;
  password: FormControl<string>;
}
