import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarUsuComponent } from './mostrar-usu.component';

describe('MostrarUsuComponent', () => {
  let component: MostrarUsuComponent;
  let fixture: ComponentFixture<MostrarUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarUsuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
