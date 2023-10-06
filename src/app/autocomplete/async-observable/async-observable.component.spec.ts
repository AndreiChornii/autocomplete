import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncObservableComponent } from './async-observable.component';

describe('AsyncObservableComponent', () => {
  let component: AsyncObservableComponent;
  let fixture: ComponentFixture<AsyncObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncObservableComponent]
    });
    fixture = TestBed.createComponent(AsyncObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
