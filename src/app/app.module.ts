import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatExpansionModule, MatGridListModule, MatButtonModule, MatCardModule, MatPaginatorModule} from '@angular/material';
import { CategoriesComponent } from './categories/categories.component';
import { BooksService } from './services/books.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BestssellersComponent } from './bests-sellers/bestssellers.component';


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
