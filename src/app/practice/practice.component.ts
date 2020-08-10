import { Component, OnInit } from '@angular/core';
import { VocabularyService } from '../services/vocabulary.service';
import { Vocabulary, VocabularyPair } from '../models/vocabulary.model';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  vocabularies: Vocabulary[] = [];

  selectedVocabulary: Vocabulary;
  questionWord: string;
  result: string;
  questionWordPair: VocabularyPair;
  askAll = false;

  constructor(private vocabularyService: VocabularyService) {
  }

  ngOnInit(): void {
     this.vocabularyService.vocabularies.subscribe((value) => this.vocabularies = value);
  }

  onPracticeStart(selectedVocaId: string) {
    selectedVocaId === 'all' ? this.vocabularies.map((voca) => this.selectedVocabulary.data.concat(voca.data))
                            : this.selectedVocabulary = this.vocabularies.find(voca => voca.id === selectedVocaId);
    this.askNewWorld();
  }

  askNewWorld() {
    this.result = '';
    const wordPairs = this.selectedVocabulary.data;
    this.questionWordPair = wordPairs[this.getRandomInt(wordPairs.length)]

    if (this.getRandomInt(2) === 1) {
      this.questionWord = this.questionWordPair.language1;
    } else {
      this.questionWord = this.questionWordPair.language2;
    }
  }

  checkAnswer(inputWord: string){
    if (this.questionWordPair.language1.toLocaleLowerCase() === inputWord.toLocaleLowerCase()
    || this.questionWordPair.language2.toLocaleLowerCase() === inputWord.toLocaleLowerCase()){
      this.result = 'Good Answer! :)';
    } else {
      this.result = 'Bad Answer! :(';
    }
  }


  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
