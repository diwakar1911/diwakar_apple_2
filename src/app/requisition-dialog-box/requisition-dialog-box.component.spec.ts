import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitionDialogBoxComponent } from './requisition-dialog-box.component';

describe('RequisitionDialogBoxComponent', () => {
  let component: RequisitionDialogBoxComponent;
  let fixture: ComponentFixture<RequisitionDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitionDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitionDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
