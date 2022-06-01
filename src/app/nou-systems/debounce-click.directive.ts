/* Heavily used Sam Herrmann's answer to this StackOverflow: https://stackoverflow.com/questions/51390476/how-to-prevent-double-click-in-angular */

import { Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output  } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  @Input() debounceTime = 2000;

  @Output() 
  debounceClick = new EventEmitter();
  
  private clicks = new Subject();
  private subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    this.subscription = this.clicks.pipe(
      debounceTime(this.debounceTime)
    ).subscribe(e => this.debounceClick.emit(e));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }

}
