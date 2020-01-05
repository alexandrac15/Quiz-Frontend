import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizComponent } from './component/quiz/quiz.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { QuestionComponent } from './component/question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryNavComponent } from './component/category-nav/category-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { GridviewComponent } from './component/gridview/gridview.component';
import {
  MatCardModule, MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatSlideToggleModule,

} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {CdkTreeModule} from '@angular/cdk/tree';
import { QuestionsComponent } from './component/questions/questions.component';


const APP_ROUTES: Routes = [
  { path: 'quiz/:id', component: QuizComponent },
  { path: '', component: GridviewComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionComponent,
    CategoryNavComponent,
    GridviewComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    RouterModule.forRoot(APP_ROUTES),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule,
    CdkTreeModule,
    MatExpansionModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
