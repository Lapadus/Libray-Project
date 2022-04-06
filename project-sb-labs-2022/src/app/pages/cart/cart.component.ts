import { Component, Input, OnInit } from '@angular/core';
import { BooksCollectionService } from 'src/app/services/books-collection.service';
import { Book } from 'src/app/models/book.model';
import { map } from 'rxjs/operators';
import { ShelfCollectionService } from 'src/app/services/shelf-collection.service';
import { ShelfModule } from 'src/app/models/shelf-module.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  shelves?: ShelfModule[];
  currentShelf?: ShelfModule;
  currentIndex = -1;
  shelf: ShelfModule;
  message: string;

  constructor(private shelfService: ShelfCollectionService, public authservice: AuthService,
    private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.retrieveShelves();
  }

  refreshList(): void {
    this.currentShelf = undefined;
    this.currentIndex = -1;
    this.retrieveShelves();
  }

  retrieveShelves(): void {
    this.cartService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.shelves = data;
    });
  }
  
  setActiveShelf(shelf: ShelfModule, index: number): void {
    this.currentShelf = shelf;
    this.currentIndex = index;
  }
  removeAllShelves(): void {
    this.cartService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
   
  }
  remove(shelves): void {
    for(let i of shelves){
      if(i.email == this.authservice.currentUserName){
        this.cartService.delete(i.key)
          .then(() => this.refreshList())
          .catch(err => console.log(err));
      }
    }
  }

  receiveData($event){
    this.shelf = $event;
    if (this.shelf.title) {
      this.cartService.create(this.shelf)
        .then(() => console.log('The book was updated successfully!'))
        .catch(err => console.log(err));
    }
    console.log(this.shelf.title)
  }
 receiveOrder(shelves): void{
  for(let i of shelves){
    this.cartService.create2(i)
        .then(() => console.log('The book was updated successfully!'))
        .catch(err => console.log(err));
    if(i.email == this.authservice.currentUserName){
      this.cartService.delete(i.key)
        .then(() => this.refreshList())
        .catch(err => console.log(err));
    }
  }
}
  
}
