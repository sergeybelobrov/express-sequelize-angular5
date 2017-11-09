import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneprojectViewComponent } from './oneproject-view.component';

describe('OneprojectViewComponent', () => {
  let component: OneprojectViewComponent;
  let fixture: ComponentFixture<OneprojectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneprojectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneprojectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
