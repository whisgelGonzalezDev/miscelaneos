import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ngResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef) { 
    // el.nativeElement.style.backgroundColor = 'cyan';    
  }
  @Input('ngResaltado') nuevoColor:string;
  
  @HostListener('mouseenter') mouseEntro() {
    this.resaltar( this.nuevoColor || 'yellow');  
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar( null );  

  }
  
  private resaltar( color: string ) {
    this.el.nativeElement.style.backgroundColor = color;    
  }

}
