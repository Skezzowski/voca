import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vocabulary } from '../models/vocabulary.model';
const electron = (window as any).require('electron');


const FILE_PATH = './data/vocabularies.json';

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {
  vocabularies = new BehaviorSubject<Vocabulary[]>([]);

  constructor() {
    electron.ipcRenderer.send('askVocabularies', FILE_PATH);

    electron.ipcRenderer.on('getVocabularies', (event, vocabularies) => {
      if (!vocabularies) {
        this.vocabularies.next([]);
      } else {
        this.vocabularies.next(vocabularies);
      }
    });
  }

  changeVoca(data: Vocabulary[]) {
    electron.ipcRenderer.send('writeFile', FILE_PATH, data);
  }

  removeFile(path) {
  }
}
