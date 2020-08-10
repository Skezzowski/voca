import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Vocabulary } from '../models/vocabulary.model';
import { VocabularyService } from '../services/vocabulary.service';

import * as uuid from 'uuid';

@Component({
  selector: 'app-new-voca',
  templateUrl: './voca-editor.component.html',
  styleUrls: ['./voca-editor.component.scss']
})
export class VocaEditorComponent implements OnInit, OnDestroy {

  vocabularies: Vocabulary[] = [];

  constructor(private vocabularyService: VocabularyService, private cdr: ChangeDetectorRef) {
  }
  
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.vocabularyService.vocabularies.subscribe((value) => {
      this.vocabularies = value;
      this.cdr.detectChanges();
    });
  }

  addVocabulary(vocaName: string) {
    if (vocaName !== '') {
      this.vocabularies.push({ id: uuid.v1(), name: vocaName, data: [] });
      this.vocabularyService.changeVoca(this.vocabularies);
    }
  }

  vocaChange(vocabulary: Vocabulary) {
    this.vocabularies.splice(this.vocabularies.findIndex(voca => voca.id === vocabulary.id), 1, vocabulary);
    this.vocabularyService.changeVoca(this.vocabularies);
  }

  deleteVocabulary(vocabularyId: string) {
    this.vocabularies.splice(this.vocabularies.findIndex(voca => voca.id === vocabularyId));
    this.vocabularyService.changeVoca(this.vocabularies);
  }
}
