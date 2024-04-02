import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lc22GenerateParenthesesComponent } from './lc-22-generate-parentheses.component';

describe('Lc22GenerateParenthesesComponent', () => {
  let component: Lc22GenerateParenthesesComponent;
  let fixture: ComponentFixture<Lc22GenerateParenthesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lc22GenerateParenthesesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lc22GenerateParenthesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
