import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ShelfModule } from '../models/shelf-module.model';

@Injectable({
  providedIn: 'root'
})
export class ShelfCollectionService {

  private dbPath = '/Shelves';
  shelvesRef: AngularFireList<ShelfModule>;
  constructor(private db: AngularFireDatabase) {
    this.shelvesRef = db.list(this.dbPath);
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
}
