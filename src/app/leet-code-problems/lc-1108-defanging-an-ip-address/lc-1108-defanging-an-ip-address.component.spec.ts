import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lc1108DefangingAnIpAddressComponent } from './lc-1108-defanging-an-ip-address.component';

describe('Lc1108DefangingAnIpAddressComponent', () => {
  let component: Lc1108DefangingAnIpAddressComponent;
  let fixture: ComponentFixture<Lc1108DefangingAnIpAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lc1108DefangingAnIpAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lc1108DefangingAnIpAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
