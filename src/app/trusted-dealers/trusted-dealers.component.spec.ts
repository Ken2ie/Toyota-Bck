import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedDealersComponent } from './trusted-dealers.component';

describe('TrustedDealersComponent', () => {
  let component: TrustedDealersComponent;
  let fixture: ComponentFixture<TrustedDealersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustedDealersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustedDealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
