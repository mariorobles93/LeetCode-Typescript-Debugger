import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lc1TwoSumComponent } from './lc-1-two-sum.component';

describe('Lc1TwoSumComponent', () => {
  let component: Lc1TwoSumComponent;
  let fixture: ComponentFixture<Lc1TwoSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lc1TwoSumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lc1TwoSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
