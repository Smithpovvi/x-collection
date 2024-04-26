import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-checkbox',
  templateUrl: './common-checkbox.component.html',
  styleUrls: ['./common-checkbox.component.scss'],
})
export class CommonCheckboxComponent {
  @Input() label!: string;
  @Input() color!: string;
}
