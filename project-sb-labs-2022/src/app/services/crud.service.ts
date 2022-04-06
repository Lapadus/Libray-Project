import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { collection, doc, setDoc } from "firebase/firestore";
import { getDatabase, ref, set, onValue } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  db = getDatabase();
  name: string = '';
  
  constructor(public fireservices: AngularFirestore, 
    public authservice: AuthService) { }

  createNewUser(Record){
    return this.fireservices.collection('Users').add(Record)
    //return this.fireservices.collection('Users').doc(this.authservice.currentUserId)
    //.set(Record);
  }
  obtainName(field){
    const starCountRef = ref(this.db, 'Books/' + field);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();  
      this.name=data.first_name;
      return data.first_name;   
    }); 
  }

}
