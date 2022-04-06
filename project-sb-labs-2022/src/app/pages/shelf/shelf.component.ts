import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { BooksCollectionService } from 'src/app/services/books-collection.service';
import { Book } from 'src/app/models/book.model';
import { map } from 'rxjs/operators';
import { ShelfCollectionService } from 'src/app/services/shelf-collection.service';
import { AuthService } from "../../services/auth.service";
import { ShelfModule } from 'src/app/models/shelf-module.model';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {
   
  shelf: ShelfModule = new ShelfModule();
  submitted = false;


  constructor(private shelfService: ShelfCollectionService, public authservice: AuthService) { }
  ngOnInit(): void {
  
  }
  saveShelf(): void {
    if(this.shelf.email == this.authservice.currentUserName){
        this.shelfService.create(this.shelf).then(() => {
        console.log('Created new shelf successfully!');
        
        this.submitted = true;
      });
    }
    else{
      alert('YOU CAN NOT ADD ON SHELF IF YOU DONT TYPE YOUR EMAIL')
    }
    
  }
  newShelf(): void {
    this.submitted = false;
    this.shelf = new ShelfModule();
  }

}
