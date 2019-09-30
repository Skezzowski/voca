import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';
import { Vocabulary, VocabularyPair } from '../models/vocabulary.model';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit{

  vocabularies: Vocabulary[] = [];

  selectedVocabulary: Vocabulary;
  questionWord: string;
  result: string;
  questionWordPair: VocabularyPair;
  questionsStarted: boolean = false;
  askAll: boolean = false;
  

  constructor(private fileService: FileService) {
  }

  ngOnInit(): void {
    this.vocabularies = this.fileService.vocabularies;
  }

  onPracticeStart(selectedVocaId: string) {
    this.questionsStarted = true;
    selectedVocaId === "all" ? 
      this.askAll = true : this.selectedVocabulary = this.vocabularies.find(voca => voca.id === selectedVocaId);
    this.askNewWorld();
  }

  askNewWorld() {
    if(this.askAll) {
      this.selectedVocabulary = this.vocabularies[this.getRandomInt(this.vocabularies.length)];
    }

    this.result = "";
    const wordPairs = this.selectedVocabulary.data;
    this.questionWordPair = wordPairs[this.getRandomInt(wordPairs.length)]
    
    if(this.getRandomInt(2) === 1){ 
      this.questionWord = this.questionWordPair.language1;
    } else {
      this.questionWord = this.questionWordPair.language2;
    }
  }

  checkAnswer(inputWord: string){
    if(this.questionWordPair.language1.toLocaleLowerCase() === inputWord.toLocaleLowerCase()
    || this.questionWordPair.language2.toLocaleLowerCase() === inputWord.toLocaleLowerCase()){
      this.result = "Good Answer! :)";
    } else {
      this.result = "Bad Answer! :(";
    }
  }


  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
