import { Injectable } from '@angular/core';
import * as _ from 'rxjs';
import { Vocabulary } from '../models/vocabulary.model';


const FILE_PATH = './data/vocabularies.json';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private fs: any;

  constructor() {
    this.fs = (window as any).fs;
  }

  get vocabularies(): Vocabulary[] {
    return JSON.parse(this.fs.readFileSync(FILE_PATH, 'utf8'));
  }

  writeFile(data: Vocabulary[]) {
    this.fs.writeFileSync(FILE_PATH, JSON.stringify(data));
  }

  removeFile(path) {
    this.fs.unlinkSync(path);
  }
}
