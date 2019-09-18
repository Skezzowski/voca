import { Component, OnInit } from '@angular/core';
import { Vocabulary } from '../models/vocabulary.model';
import { FileService } from '../services/file.service';

import * as uuid from 'uuid';

@Component({
  selector: 'app-new-voca',
  templateUrl: './new-voca.component.html',
  styleUrls: ['./new-voca.component.scss']
})
export class NewVocaComponent implements OnInit {

  vocabularies: Vocabulary[] = [];

  constructor(private fileService: FileService) {
  }

  ngOnInit(): void {
    this.vocabularies = this.fileService.vocabularies;
  }

  addVocabulary(vocaName: string) {
    if (vocaName !== '') {
      this.vocabularies.push({ id: uuid.v1(), name: vocaName, data: [] });
      this.fileService.writeFile(this.vocabularies);
    }
  }

  vocaChange(vocabulary: Vocabulary) {
    this.vocabularies.splice(this.vocabularies.findIndex(voca => voca.id === vocabulary.id));
    this.vocabularies.push(vocabulary);
    this.fileService.writeFile(this.vocabularies);
  }

  deleteVocabulary(vocabularyId: string){
    this.vocabularies.splice(this.vocabularies.findIndex(voca => voca.id === vocabularyId));
    this.fileService.writeFile(this.vocabularies);
  }
}
