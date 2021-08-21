import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryMenuBoxComponent } from './library-menu-box.component';

describe('LibraryMenuBoxComponent', () => {
  let component: LibraryMenuBoxComponent;
  let fixture: ComponentFixture<LibraryMenuBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryMenuBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryMenuBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
