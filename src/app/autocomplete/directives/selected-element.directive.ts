import { Directive, ElementRef, HostListener, Renderer2, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appSelectedElement]'
})
export class SelectedElementDirective {

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  @Output()
  searchFromFilter: EventEmitter<any> = new EventEmitter();

  @HostListener("mouseenter") onMouseEnter(){
    this.changeBackgroundColor("#ebe6e6");
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.changeBackgroundColor(null);
  }

  @HostListener("click") onMouseClick(){
    this.choosedFromFilter();
  }

  private changeBackgroundColor(color: string|null){
    this.render.setStyle(this.elementRef.nativeElement, "backgroundColor", color);
  }

  private choosedFromFilter(){
    // let ulElement: HTMLElement = this.render.parentNode(this.elementRef.nativeElement);
    // let divElement: HTMLElement = this.render.parentNode(ulElement);
    // let formElement: HTMLElement = this.render.parentNode(divElement);
    // let inputElement = formElement.querySelector("#searchInput");
    // this.render.setProperty(inputElement, 'value', this.elementRef.nativeElement.innerText);

    this.searchFromFilter.emit(this.elementRef.nativeElement.innerText);
  }
}
