import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { JQ_TOKEN } from './j-query.service';
@Component({
  selector: 'app-simple-modal',
  template: `
    <div id="{{elementId}}" #modalcontainer class="modal fade" tabindex="-1">
       <div class="modal-dialog">
           <div class="modal-content">
            <div class="modal-header">
                <button class="close" type="button" data-dismiss="modal">
                  <span>&times;</span>
                </button>
                <h4 class="modal-title">{{title}}</h4>
               </div>
               <div class="modal-body" (click)="closeModel()">
                <ng-content></ng-content>
               </div>
           </div>
       </div>
    </div>
  `,
  styles: [`
    .modal-body{ height:250px;overflow-y: scroll;  }
  `]
})
export class SimpleModalComponent {
 @Input() title: string ="";
 @Input() elementId: string ="";
 @Input() closeOnBodyClick: string="";
 @ViewChild('modalcontainer') containerEl!: ElementRef;

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 constructor(@Inject(JQ_TOKEN) private $:any ){}

 closeModel(){
  if(this.closeOnBodyClick.toLocaleLowerCase()=== "true"){
 this. $(this.containerEl.nativeElement).modal('hide');
  }
 }
}
