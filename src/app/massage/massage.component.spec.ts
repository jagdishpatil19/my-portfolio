import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageComponent } from './massage.component';

describe('MassageComponent', () => {
  let component: MassageComponent;
  let fixture: ComponentFixture<MassageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MassageComponent]
    });
    fixture = TestBed.createComponent(MassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
