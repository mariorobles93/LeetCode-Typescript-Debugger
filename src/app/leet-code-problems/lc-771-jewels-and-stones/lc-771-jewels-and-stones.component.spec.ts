import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lc771JewelsAndStonesComponent } from './lc-771-jewels-and-stones.component';

describe('Lc771JewelsAndStonesComponent', () => {
  let component: Lc771JewelsAndStonesComponent;
  let fixture: ComponentFixture<Lc771JewelsAndStonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lc771JewelsAndStonesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lc771JewelsAndStonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
