import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BooksCollectionService {

  private dbPath = '/Books';
  tutorialsRef: AngularFireList<Book>;
  constructor(private db: AngularFireDatabase) {
    this.tutorialsRef = db.list(this.dbPath);
  }
  getAll(): AngularFireList<Book> {
    return this.tutorialsRef;
  }
  create(tutorial: Book): any {
    return this.tutorialsRef.push(tutorial);
  }
  update(key: string, value: any): Promise<void> {
    return this.tutorialsRef.update(key, value);
  }
  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }
  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }
 

}

