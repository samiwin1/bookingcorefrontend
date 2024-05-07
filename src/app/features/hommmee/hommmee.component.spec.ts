import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HommmeeComponent } from './hommmee.component';

describe('HommmeeComponent', () => {
  let component: HommmeeComponent;
  let fixture: ComponentFixture<HommmeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HommmeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HommmeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
