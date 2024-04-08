import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lc856ScoreOfParenthesesComponent } from './lc-856-score-of-parentheses.component';

describe('Lc856ScoreOfParenthesesComponent', () => {
  let component: Lc856ScoreOfParenthesesComponent;
  let fixture: ComponentFixture<Lc856ScoreOfParenthesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lc856ScoreOfParenthesesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lc856ScoreOfParenthesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
