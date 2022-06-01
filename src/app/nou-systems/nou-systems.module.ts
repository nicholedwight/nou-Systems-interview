import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DebounceClickDirective } from './debounce-click.directive';



@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    DebounceClickDirective
  ],
  exports: [
    ParentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NouSystemsModule { }
