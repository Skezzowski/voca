import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocaEditorComponent } from './voca-editor.component';

describe('NewVocaComponent', () => {
  let component: VocaEditorComponent;
  let fixture: ComponentFixture<VocaEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocaEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
