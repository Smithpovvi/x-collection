import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-card',
  templateUrl: './toggle-card.component.html',
  styleUrls: ['./toggle-card.component.scss'],
})
export class ToggleCardComponent {
  @Input() checked = false;
  @Input() color = 'tertiary';

  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  state = false;

  switch(): void {
    this.state = !this.state;
    this.change.emit(this.state);
  }
}
