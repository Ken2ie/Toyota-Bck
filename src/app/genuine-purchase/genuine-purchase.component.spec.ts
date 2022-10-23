import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenuinePurchaseComponent } from './genuine-purchase.component';

describe('GenuinePurchaseComponent', () => {
  let component: GenuinePurchaseComponent;
  let fixture: ComponentFixture<GenuinePurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenuinePurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenuinePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
