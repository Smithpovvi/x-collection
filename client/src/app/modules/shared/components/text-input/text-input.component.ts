import { Component, Input, Optional, Self } from '@angular/core';
import { ControlContainer, FormGroupDirective, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective,
  }],
})
export class TextInputComponent {
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() linkText?: string;
  @Input() linkTextColor?: string;
  @Input() formControlName?: string;
  @Input() error?: string;

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = {
        writeValue(): void {
        },
        registerOnChange(): void {
        },
        registerOnTouched(): void {
        },
      };
    }
  }
}
