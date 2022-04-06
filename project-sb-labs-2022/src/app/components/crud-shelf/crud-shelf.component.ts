import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ShelfModule } from 'src/app/models/shelf-module.model';
import { BooksCollectionService } from 'src/app/services/books-collection.service';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ShelfCollectionService } from 'src/app/services/shelf-collection.service';

@Component({
  selector: 'app-crud-shelf',
  templateUrl: './crud-shelf.component.html',
  styleUrls: ['./crud-shelf.component.scss']
})
export class CrudShelfComponent implements OnInit {

  @Input() book?: ShelfModule;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentShelf: ShelfModule = {
    title: '',
    author: '',
    about: '',
  };
  message = '';
  constructor(private bookService: ShelfCollectionService) { }
  ngOnInit(): void {
    this.message = '';
  }
  ngOnChanges(): void {
    this.message = '';
    this.currentShelf = { ...this.book };
  }
  
  updateTutorial(): void {
    console.log('CARTE PRIMITA:->>>', this.book.title);
    const data = {
      title: this.currentShelf.title,
      author: this.currentShelf.author,
      about: this.currentShelf.about
    };
    console.log('CURRENT->>> ', this.currentShelf.title)
    console.log('DATA:->>>> ', data.title);
    if (this.currentShelf.key) {
      this.bookService.update(this.book.key, data)
        .then(() => this.message = 'The book was updated successfully!')
        .catch(err => console.log(err));
    }
    
  }
  deleteShelf(): void {
    if (this.currentShelf.key) {

      this.bookService.delete(this.currentShelf.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tutorial was deleted successfully!';
        })
        .catch(err => console.log(err));
    }
  }

}
