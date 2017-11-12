import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnAccordionGroupComponent } from './tn-accordion.component';

describe('TnAccordionGroupComponent', () => {
  let component: TnAccordionGroupComponent;
  let fixture: ComponentFixture<TnAccordionGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnAccordionGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnAccordionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
