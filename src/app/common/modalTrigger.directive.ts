import {Directive, OnInit, Inject, ElementRef, Input } from '@angular/core'
import { JQ_TOKEN } from './j-query.service';


@Directive({
  selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{
  private el!: HTMLElement;
  @Input('modal-trigger') modalId: string="";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any){
  this.el = ref.nativeElement;
}
 ngOnInit() {
   this.el.addEventListener('click',e => {
    this.$(`#${this.modalId}`).modal({e}) //added e
   })
 }
}

