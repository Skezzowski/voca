import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VocaEditorComponent } from './voca-editor/voca-editor.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  { path: 'editor', component: VocaEditorComponent },
  { path: 'practice', component: PracticeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
