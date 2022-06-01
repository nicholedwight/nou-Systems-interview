import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  clicked?: boolean;
  consoleMessage(message: Event): void {
    this.clicked = true;
    console.log(message);
  };
  constructor() { }

  ngOnInit(): void {
  }

}
