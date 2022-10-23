import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaloneComponent } from './stalone.component';

describe('StaloneComponent', () => {
  let component: StaloneComponent;
  let fixture: ComponentFixture<StaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
