import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  @Input('appHightlight') appHighlight = 'blue';
  
  constructor(private el: ElementRef) {
      // el.nativeElement.style.color = this.appHighlight
  }

  ngOnInit(): void {
    this.el.nativeElement.style.color = this.appHighlight
  }

  

}
