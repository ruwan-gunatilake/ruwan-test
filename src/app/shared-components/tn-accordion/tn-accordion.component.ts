import {Component, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'tn-accordion',
  template: `    
            <div class="panel panel-default" [ngClass]="{'panel-open': isOpen}">
                <div class="panel-heading" (click)="toggleOpen($event)">
                    <h4 class="panel-title">
                        <span><strong class="text-right">{{heading}}</strong></span>
                        <span style="margin-right: 0" class="glyphicon"
                              [ngClass]="{'glyphicon-chevron-down': !isOpen, 'glyphicon-chevron-up': isOpen}"
                              aria-hidden="true"></span>
                    </h4>
                </div>
                <div class="panel-collapse" [hidden]="!isOpen">
                    <div class="panel-body">
                        <ng-content></ng-content>
                    </div>
                </div>
            </div>
  `,
  styleUrls: ['./tn-accordion.component.css']
})
export class TnAccordionComponent {
  isOpen: boolean = false;

  @Input() heading: string;

  toggleOpen(event: MouseEvent): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
