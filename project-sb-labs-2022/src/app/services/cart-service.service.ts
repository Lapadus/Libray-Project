import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ShelfModule } from '../models/shelf-module.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private dbPath = '/Cart';
  private dbPath1 = '/Orders';
  shelvesRef: AngularFireList<Book>;
  ordersRef: AngularFireList<Book>;
  constructor(private db: AngularFireDatabase, private authservice: AuthService) {
    this.shelvesRef = db.list(this.dbPath);
    this.ordersRef = db.list(this.dbPath1);

  }
  getAll(): AngularFireList<ShelfModule> {
    return this.shelvesRef;
  }
  create(tutorial: ShelfModule): any {
      return this.shelvesRef.push(tutorial);
  }
  update(key: string, value: any): Promise<void> {
    return this.shelvesRef.update(key, value);
  }
  delete(key: string): Promise<void> {
    return this.shelvesRef.remove(key);
  }
  deleteAll(): Promise<void> {
    return this.shelvesRef.remove();
  }

  create2(tutorial: ShelfModule): any {
    return this.ordersRef.push(tutorial);
  }
  deleteAll1(): Promise<void> {
    return this.ordersRef.remove();
  }
  delete2(key: string): Promise<void> {
    return this.ordersRef.remove(key);
  }
}
