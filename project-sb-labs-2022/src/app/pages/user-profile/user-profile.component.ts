import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input() name1:string="";

  shelves?: User[];
  currentShelf?: User;
  currentIndex = -1;
  shelf: User;
  message: string;

  constructor(private router:Router, public authservice: AuthService, public profileService: ProfileService) { }

  ngOnInit(): void {
    this.retrieveShelves();
  }

  refreshList(): void {
    this.currentShelf = undefined;
    this.currentIndex = -1;
    this.retrieveShelves();
  }

  retrieveShelves(): void {
    this.profileService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.shelves = data;
     
    });
  }
 
  
  setActiveShelf(shelf: User, index: number): void {
    this.currentShelf = shelf;
    this.currentIndex = index;
  }
  removeAllShelves(): void {
    this.profileService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
   
  }
  remove(shelves): void {
    for(let i of shelves){
      if(i.email == this.authservice.currentUserName){
        console.log(i.lastName)
      }
    }
  }

}
