import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ShelfModule } from 'src/app/models/shelf-module.model';
import { BooksCollectionService } from 'src/app/services/books-collection.service';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ShelfCollectionService } from 'src/app/services/shelf-collection.service';

@Component({
  selector: 'app-crud-cart',
  templateUrl: './crud-cart.component.html',
  styleUrls: ['./crud-cart.component.scss']
})
export class CrudCartComponent implements OnInit {

  @Input() book?: ShelfModule;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentShelf: ShelfModule = {
    title: '',
    author: '',
    about: '',
  };
  message = '';
  constructor(private bookService: CartServiceService) { }
  ngOnInit(): void {
    this.message = '';
  }
  ngOnChanges(): void {
    this.message = '';
    this.currentShelf = { ...this.book };
  }
  
  deleteShelf(): void {
    console.log(this.currentShelf)
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
