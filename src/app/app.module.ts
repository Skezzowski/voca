import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VocaEditorComponent } from './voca-editor/voca-editor.component';
import { PracticeComponent } from './practice/practice.component';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { VocabularyService } from './services/vocabulary.service';
import { TabContentComponent } from './widgets/tab-content/tab-content.component';
import { NavigationComponent } from './widgets/side-navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    VocaEditorComponent,
    PracticeComponent,
    TabContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [VocabularyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
