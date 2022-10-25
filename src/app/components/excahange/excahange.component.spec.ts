import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcahangeComponent } from './excahange.component';

describe('ExcahangeComponent', () => {
  let component: ExcahangeComponent;
  let fixture: ComponentFixture<ExcahangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcahangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcahangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
