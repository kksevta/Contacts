import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchButtonComponent } from './components/switch-button/switch-button.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SwitchButtonComponent, ModalComponent],
  exports: [FormsModule, SwitchButtonComponent, ModalComponent]
})
export class SharedModule { }
