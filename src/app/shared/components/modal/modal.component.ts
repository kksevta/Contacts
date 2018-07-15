import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  modalVisiblityBoolSet: boolean = false;
  @Input()
  set modalVisiblityBool(bool: boolean) {
    this.modalVisiblityBoolSet = bool;
  }
  @Output() closeDialog = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public setVisibilityBool(bool) {
    this.modalVisiblityBoolSet = bool;
    this.closeDialog.emit();
  }

}
