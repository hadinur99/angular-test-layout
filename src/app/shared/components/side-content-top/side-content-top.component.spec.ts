import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideContentTopComponent } from './side-content-top.component';

describe('SideContentTopComponent', () => {
  let component: SideContentTopComponent;
  let fixture: ComponentFixture<SideContentTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideContentTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideContentTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
