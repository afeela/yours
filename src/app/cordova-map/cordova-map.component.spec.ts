import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordovaMapComponent } from './cordova-map.component';

describe('CordovaMapComponent', () => {
  let component: CordovaMapComponent;
  let fixture: ComponentFixture<CordovaMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordovaMapComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordovaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
