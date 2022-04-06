import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ShelfModule } from '../models/shelf-module.model';
import { AuthService } from './auth.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private dbPath = '/Users';
  
  usersRef: AngularFireList<User>;

  constructor(private db: AngularFireDatabase, private authservice: AuthService) {
    this.usersRef = db.list(this.dbPath);
  }
  getAll(): AngularFireList<User> {
    return this.usersRef;
  }
  create(tutorial: User): any {
      return this.usersRef.push(tutorial);
  }
  update(key: string, value: any): Promise<void> {
    return this.usersRef.update(key, value);
  }
  delete(key: string): Promise<void> {
    return this.usersRef.remove(key);
  }
  deleteAll(): Promise<void> {
    return this.usersRef.remove();
  }
}
