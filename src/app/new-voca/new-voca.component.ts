import { Component, OnInit } from '@angular/core';
import { Vocabulary } from '../models/vocabulary.model';
import { FileService } from '../services/file.service';

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

  removeVocabulary(vocaName: string) {
    // this.fileService.readFile(`${vocaName}.json`);
  }

  changeValue(event) {
    this.fileService.writeFile('./data/vocabularies.json', this.vocabularies);
  }

  addVocabulary(vocaName: string) {
    if (vocaName !== '') {
      this.vocabularies.push({ name: vocaName, data: [] });
      this.fileService.writeFile('./data/vocabularies.json', this.vocabularies);
    }
  }

  addWordPair(vocaName, lang1, lang2) {
    const vocadata = this.vocabularies;
    vocadata.find(voca => voca.name === vocaName).data.push({ language1: lang1, language2: lang2 });
    this.vocabularies = vocadata;
    this.fileService.writeFile('./data/vocabularies.json', this.vocabularies);
  }
}
