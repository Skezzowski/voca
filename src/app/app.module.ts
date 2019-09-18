import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewVocaComponent } from './new-voca/new-voca.component';
import { PracticeComponent } from './practice/practice.component';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { FileService } from './services/file.service';
import { TabContentComponent } from './widgets/tab-content/tab-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewVocaComponent,
    PracticeComponent,
    TabContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
