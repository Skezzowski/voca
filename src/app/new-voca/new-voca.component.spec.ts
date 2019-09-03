import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVocaComponent } from './new-voca.component';

describe('NewVocaComponent', () => {
  let component: NewVocaComponent;
  let fixture: ComponentFixture<NewVocaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVocaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
