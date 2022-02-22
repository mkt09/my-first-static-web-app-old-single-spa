import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsmUiComponent } from './psm-ui.component';

describe('PsmUiComponent', () => {
  let component: PsmUiComponent;
  let fixture: ComponentFixture<PsmUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsmUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsmUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
