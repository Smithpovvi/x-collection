import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-card-button',
  templateUrl: './icon-card-button.component.html',
  styleUrls: ['./icon-card-button.component.scss'],
})
export class IconCardButtonComponent {
  @Input() icon: string;
  @Input() color?: string = 'tertiary';
  @Input() disableShadow?: boolean = false;
  @Input() iconSize?: string;
  @Input() disabled?: boolean;
}
