import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedPoductComponent } from './searched-poduct.component';

describe('SearchedPoductComponent', () => {
  let component: SearchedPoductComponent;
  let fixture: ComponentFixture<SearchedPoductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedPoductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedPoductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
