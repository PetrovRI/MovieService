import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsListPageComponent } from './films-list-page.component';

describe('FilmsListPageComponent', () => {
  let component: FilmsListPageComponent;
  let fixture: ComponentFixture<FilmsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
