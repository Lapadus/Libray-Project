import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BooksCollectionService } from 'src/app/services/books-collection.service';
import { Book } from 'src/app/models/book.model';
import { map } from 'rxjs/operators';
import { ShelfModule } from 'src/app/models/shelf-module.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adults-books',
  templateUrl: './adults-books.component.html',
  styleUrls: ['./adults-books.component.scss']
})
export class AdultsBooksComponent implements OnInit {

  filterTerm!: string;
  books?: Book[];
  currentBook?: Book;
  currentIndex = -1; 
  bookNew: ShelfModule;
  starRating = 0;

  @Output() bookEvent: EventEmitter<any> = new EventEmitter();

  constructor(private bookService: BooksCollectionService, public authservice: AuthService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }
  
  retrieveTutorials(): void {
    this.bookService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.books = data;
    });
  }

  setActiveShelf(book: Book, index: number): void {
    this.currentBook = book;
    this.currentIndex = index;
  }
  
  getData(book: ShelfModule):void{
    console.log(book) //in book avem datele cartii pe care se apasa borrow
    //datele astea trebuie trimise la shelf.!!!
    this.bookNew = {
      title: book.title,
      author: book.author,
      poza: book.poza
    }
    //console.log(this.bookNew)
    this.bookEvent.emit(this.bookNew);
   
  }
}
