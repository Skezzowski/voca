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
  @Output() VocaChange = new EventEmitter<Vocabulary>();
  @Output() VocaDelete = new EventEmitter<string>();

  displayedColumns = ['language1', 'language2'];
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;

  constructor() { }

  changeWordPair() {
    this.VocaChange.emit(this.vocabulary);
  }

  deleteVocabulary() {
    this.VocaDelete.emit(this.vocabulary.id);
  }

  addWordPair(lang1, lang2) {
    this.vocabulary.data.push({ language1: lang1, language2: lang2 });
    this.VocaChange.emit(this.vocabulary);
    this.table.renderRows();
  }


}
