import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeSComponent } from './three-s.component';

describe('ThreeSComponent', () => {
  let component: ThreeSComponent;
  let fixture: ComponentFixture<ThreeSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
