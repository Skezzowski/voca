import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Vocabulary } from 'src/app/models/vocabulary.model';
import { MatTable } from '@angular/material';


@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent {

  @Input() vocabulary: Vocabulary;
  @Output() onVocaChange = new EventEmitter<Vocabulary>();
  @Output() onVocaDelete = new EventEmitter<string>();

  displayedColumns = ['language1', 'language2'];
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;

  constructor() { }


  changeWordPair(event) {
    this.onVocaChange.emit(this.vocabulary);
  }

  deleteVocabulary() {
    this.onVocaDelete.emit(this.vocabulary.id);
  }

  addWordPair(lang1, lang2) {
    this.vocabulary.data.push({ language1: lang1, language2: lang2 });
    this.onVocaChange.emit(this.vocabulary);
    this.table.renderRows();
  }


}
