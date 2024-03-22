import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lc2AddTwoNumbersComponent } from './lc-2-add-two-numbers.component';

describe('Lc2AddTwoNumbersComponent', () => {
  let component: Lc2AddTwoNumbersComponent;
  let fixture: ComponentFixture<Lc2AddTwoNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lc2AddTwoNumbersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lc2AddTwoNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
