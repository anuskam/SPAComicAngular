import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasiasComponent } from './fantasias.component';

describe('FantasiasComponent', () => {
  let component: FantasiasComponent;
  let fixture: ComponentFixture<FantasiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FantasiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FantasiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
