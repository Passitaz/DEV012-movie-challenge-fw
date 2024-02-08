import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearButtonComponent } from './clearbutton.component';

describe('ClearButtonComponent', () => {
  let component: ClearButtonComponent;
  let fixture: ComponentFixture<ClearButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
