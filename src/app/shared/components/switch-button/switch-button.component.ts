import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButtonComponent implements OnInit {
  @Output() toogle = new EventEmitter()
  @Input()
  set active(bool: boolean) {
    this.activeSet = bool;
  }
  activeSet = false;
  constructor() { }

  ngOnInit() {
  }

  toggleSwitch(event) {
    this.toogle.emit(event.target.checked);
  }
}
