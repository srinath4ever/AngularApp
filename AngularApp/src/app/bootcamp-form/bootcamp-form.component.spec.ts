import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampFormComponent } from './bootcamp-form.component';

describe('BootcampFormComponent', () => {
  let component: BootcampFormComponent;
  let fixture: ComponentFixture<BootcampFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootcampFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcampFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
