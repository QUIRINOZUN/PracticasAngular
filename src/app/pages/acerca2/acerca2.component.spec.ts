import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acerca2Component } from './acerca2.component';

describe('Acerca2Component', () => {
  let component: Acerca2Component;
  let fixture: ComponentFixture<Acerca2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acerca2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acerca2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
