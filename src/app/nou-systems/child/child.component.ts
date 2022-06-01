import { Component, OnInit, Output, EventEmitter, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { fromEvent, debounceTime } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterViewInit {
  @ViewChild('debouncedBtn') debouncedBtn!: ElementRef;

  @Output() consoleEvent = new EventEmitter();

  ngAfterViewInit() {}

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  public updateText(text: string, originalText: string): void {
    this.debouncedBtn.nativeElement.innerHTML = text;
    this.renderer.setStyle(this.debouncedBtn.nativeElement.children[0], 'position', 'relative');
    setTimeout(() => {
        this.debouncedBtn.nativeElement.innerHTML = originalText;
        this.renderer.setStyle(this.debouncedBtn.nativeElement.children[0], 'position', 'relative');
    }, 2000);
  };

}
