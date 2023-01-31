import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIngresoComponent } from './create-ingreso.component';

describe('CreateIngresoComponent', () => {
  let component: CreateIngresoComponent;
  let fixture: ComponentFixture<CreateIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIngresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
