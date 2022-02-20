import { Directive, OnChanges, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAccordion]',
})
export class PixieDustDirective implements OnChanges, AfterViewInit {
  public ngOnChanges(): void {}

  public ngAfterViewInit(): void {}
}
