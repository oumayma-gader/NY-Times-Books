import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatExpansionModule, MatGridListModule, MatButtonModule, MatCardModule, MatPaginatorModule} from '@angular/material';
import { BooksService } from './services/books.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/categories/categories.component';
import { BestssellersComponent } from './components/bests-sellers/bestssellers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    BestssellersComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      { path: '', component: CategoriesComponent },
      { path: 'best-seller/:list_name_encoded', component: BestssellersComponent },
      { path: '**', component: PageNotFoundComponent }
    ]),
    HttpClientModule

  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
