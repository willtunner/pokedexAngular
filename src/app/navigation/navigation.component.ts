import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})

export class NavigationComponent implements OnInit {

  @Output() clickUndo = new EventEmitter();
  @Output() clickPrev = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public undo() {
    this.clickUndo.emit();

  }

  public prev() {
    this.clickPrev.emit();
  }
}
