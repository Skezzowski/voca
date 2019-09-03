import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewVocaComponent } from './new-voca/new-voca.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  { path: 'new', component: NewVocaComponent },
  { path: 'practice', component: PracticeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
