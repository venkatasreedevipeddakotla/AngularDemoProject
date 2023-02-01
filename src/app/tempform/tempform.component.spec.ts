import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempformComponent } from './tempform.component';

describe('TempformComponent', () => {
  let component: TempformComponent;
  let fixture: ComponentFixture<TempformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
