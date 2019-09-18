import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';
import { Vocabulary } from '../models/vocabulary.model';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent {

  vocabularies: Vocabulary[] = [];

  constructor(private fileService: FileService) {
  }

  ngOnInit(): void {
    this.vocabularies = this.fileService.vocabularies;
  }

  

}
