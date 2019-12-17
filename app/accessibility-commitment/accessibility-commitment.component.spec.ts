import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityCommitment } from './accessibility-commitment.component';

describe('AccessibilityCommitment', () => {
  let component: AccessibilityCommitment;
  let fixture: ComponentFixture<AccessibilityCommitment>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessibilityCommitment ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibilityCommitment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
