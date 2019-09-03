import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPairTableComponent } from './word-pair-table.component';

describe('WordPairTableComponent', () => {
  let component: WordPairTableComponent;
  let fixture: ComponentFixture<WordPairTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordPairTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordPairTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
