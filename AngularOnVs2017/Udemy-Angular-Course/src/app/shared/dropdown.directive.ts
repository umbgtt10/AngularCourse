import { Directive, HostBinding, OnInit, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector:'[appDropdown]'
})
export class DropdownDirective implements OnInit {  
  // dropDownOpen: boolean = false;
  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // this.dropDownOpen = false;
  }
  /*
  @HostListener('click') toggleAddOpenClass() {
    if (!this.dropDownOpen) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
    }
    this.dropDownOpen = !this.dropDownOpen;
  }
  */
  @HostListener('click') toggleWithHostBinding() {
    this.isOpen = !this.isOpen;
  }
}
