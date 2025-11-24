import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, orderBy, query } from 'firebase/firestore';
import { WellWish } from '../shared/models/well-wishes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  private firestore = inject(Firestore);
  private wishesCollection = collection(this.firestore, 'wishes');

  constructor() { }

   saveWish(wish: WellWish) {
    const wishWithTimestamp = {
      ...wish,
      createdAt: new Date()
    };
    return addDoc(this.wishesCollection, wishWithTimestamp);
  }

  getWishes(): Observable<WellWish[]> {
    const wishesQuery = query(this.wishesCollection, orderBy('createdAt', 'desc'));
    return collectionData(wishesQuery, { idField: 'id' }) as Observable<WellWish[]>;
  }
}
