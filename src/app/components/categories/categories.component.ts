import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { BooksService } from '../../services/books.service';

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
