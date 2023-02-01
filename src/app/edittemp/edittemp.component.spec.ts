import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittempComponent } from './edittemp.component';

describe('EdittempComponent', () => {
  let component: EdittempComponent;
  let fixture: ComponentFixture<EdittempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
