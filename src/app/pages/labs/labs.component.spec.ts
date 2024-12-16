import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalitiesComponent } from './labs.component';

describe('LabsComponent', () => {
  let component: PersonalitiesComponent;
  let fixture: ComponentFixture<PersonalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalitiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
