import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDialogboxComponent } from './upload-dialogbox.component';

describe('UploadDialogboxComponent', () => {
  let component: UploadDialogboxComponent;
  let fixture: ComponentFixture<UploadDialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDialogboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
