import { Component, Input, OnInit } from '@angular/core';
import { BooksCollectionService } from 'src/app/services/books-collection.service';
import { Book } from 'src/app/models/book.model';
import { map } from 'rxjs/operators';
import { ShelfCollectionService } from 'src/app/services/shelf-collection.service';
import { ShelfModule } from 'src/app/models/shelf-module.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-shelf-show',
  templateUrl: './shelf-show.component.html',
  styleUrls: ['./shelf-show.component.scss']
})
export class ShelfShowComponent implements OnInit {

  shelves?: ShelfModule[];
  currentShelf?: ShelfModule;
  currentIndex = -1;
  shelf: ShelfModule;

  constructor(private shelfService: ShelfCollectionService, public authservice: AuthService) { }

  ngOnInit(): void {
    this.retrieveShelves();
  }

  refreshList(): void {
    this.currentShelf = undefined;
    this.currentIndex = -1;
    this.retrieveShelves();
  }

  retrieveShelves(): void {
    this.shelfService.getAll().snapshotChanges().pipe(
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
    this.shelfService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }
  receiveData($event){
    this.shelf = $event;
    if (this.shelf.title) {
      this.shelfService.create(this.shelf)
        .then(() => console.log('The book was updated successfully!'))
        .catch(err => console.log(err));
    }
    console.log(this.shelf.title)
  }
}


