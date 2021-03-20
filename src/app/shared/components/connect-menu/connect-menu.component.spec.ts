import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectMenuComponent } from './connect-menu.component';

describe('ConnectMenuComponent', () => {
  let component: ConnectMenuComponent;
  let fixture: ComponentFixture<ConnectMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
