import { Directive, TemplateRef,ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appFilterIf]'
})
export class FilterIfDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input("appFilterIf") set ToFilterValue(condition: boolean){
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
