import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTockensComponent } from './api-tockens.component';

describe('ApiTockensComponent', () => {
  let component: ApiTockensComponent;
  let fixture: ComponentFixture<ApiTockensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiTockensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiTockensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
