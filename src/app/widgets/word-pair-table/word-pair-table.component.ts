import { Component, Input } from '@angular/core';
import { VocabularyPair } from 'src/app/models/vocabulary.model';

@Component({
  selector: 'app-word-pair-table',
  templateUrl: './word-pair-table.component.html',
  styleUrls: ['./word-pair-table.component.scss']
})
export class WordPairTableComponent {

@Input() wordPairs: VocabularyPair[];

displayedColumns = ['language1', 'language2'];

constructor() { }


changeValue(event) {
//  this.fileService.writeFile('./data/vocabularies.json', this.vocabularies);
}

}
