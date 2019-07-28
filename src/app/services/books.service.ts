import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private  API_KEY = "7JOhf4GwPD5LFWBPBvQgCSpRRsZkq4UX";

  constructor(private _http: HttpClient) { 
  }

  getCategories(){
    return this._http.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key='+this.API_KEY);
  }

  getBooksByCategory(listNameEncoded: string){
    return this._http.get('https://api.nytimes.com/svc/books/v3/lists.json?list='+listNameEncoded+'&api-key='+this.API_KEY);
  }
}
