import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideContentBottomComponent } from './side-content-bottom.component';

describe('SideContentBottomComponent', () => {
  let component: SideContentBottomComponent;
  let fixture: ComponentFixture<SideContentBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideContentBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideContentBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
