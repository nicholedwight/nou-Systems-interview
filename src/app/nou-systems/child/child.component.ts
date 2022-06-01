import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { fromEvent, debounceTime } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Output() consoleEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
