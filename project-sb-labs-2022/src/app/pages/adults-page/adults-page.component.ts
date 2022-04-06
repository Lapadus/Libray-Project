import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ShelfCollectionService } from 'src/app/services/shelf-collection.service';
import { ShelfModule } from 'src/app/models/shelf-module.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-adults-page',
  templateUrl: './adults-page.component.html',
  styleUrls: ['./adults-page.component.scss']
})
export class AdultsPageComponent implements OnInit {
  shelves?: ShelfModule[];
  currentShelf?: ShelfModule;
  currentIndex = -1;
  shelf: ShelfModule;

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
  
  receiveData($event){
    this.shelf = $event;
    this.shelf.email = this.authservice.currentUserName
    if (this.shelf.title) {
      this.cartService.create(this.shelf)
        .then(() => console.log('The book was updated successfully!'))
        .catch(err => console.log(err));
    }
    console.log(this.shelf.title)
  }

}
