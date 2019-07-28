import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BooksService } from '../services/books.service';
import { Book } from '../models/book';
import { map } from 'rxjs/operators';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-bestssellers',
  templateUrl: './bestssellers.component.html',
  styleUrls: ['./bestssellers.component.css']
})
export class BestssellersComponent implements OnInit {


  public listNameEncoded : string;
  public books : Book;

  constructor(private route: ActivatedRoute,private _booksService: BooksService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map((params: ParamMap) =>
        this.listNameEncoded = params.get('list_name_encoded')
      )
    ).subscribe((d) => {
      this._booksService.getBooksByCategory(d).subscribe((data: any) => this.books = data["results"] );
    });
  }

}
