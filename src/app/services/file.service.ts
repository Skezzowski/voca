import { Injectable } from '@angular/core';
import * as _ from 'rxjs';
import { Vocabulary } from '../models/vocabulary.model';


@Injectable({
  providedIn: 'root'
})
export class FileService {
  private fs: any;

  constructor() {
    this.fs = (window as any).fs;
  }

  get vocabularies(): Vocabulary[] {
    return JSON.parse(this.fs.readFileSync('./data/vocabularies.json', 'utf8'));
  }

  writeFile(path, data: Vocabulary[]) {
    this.fs.writeFileSync(path, JSON.stringify(data));
  }

  removeFile(path) {
    this.fs.unlinkSync(path);
  }
}
