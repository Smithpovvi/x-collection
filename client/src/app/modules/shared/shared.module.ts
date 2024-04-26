import { NgModule } from '@angular/core';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { IonicModule } from '@ionic/angular';
import { TextInputComponent } from './components/text-input/text-input.component';
import { CommonCheckboxComponent } from './components/common-checkbox/common-checkbox.component';
import { IconCardButtonComponent } from './components/icon-card-button/icon-card-button.component';
import { NgClass, NgIf, NgStyle } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { ToggleCardComponent } from './components/toggle-card/toggle-card.component';

@NgModule({
  imports: [
    IonicModule.forRoot({ mode: 'md' }),
    NgStyle,
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
  ],
  declarations: [
    SubmitButtonComponent,
    TextInputComponent,
    CommonCheckboxComponent,
    IconCardButtonComponent,
    ContentCardComponent,
    ToggleCardComponent,
  ],
  exports: [
    IonicModule,
    SubmitButtonComponent,
    TextInputComponent,
    CommonCheckboxComponent,
    IconCardButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    ContentCardComponent,
    ToggleCardComponent
  ],
})
export class SharedModule {
}
