import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public results : Category[];

  constructor(private _booksService: BooksService) { }

  ngOnInit() {
    this._booksService.getCategories().subscribe((data: any) => this.results = data["results"] );
  }

}
