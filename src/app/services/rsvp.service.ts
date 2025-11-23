import { inject, Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Rsvp } from '../shared/models/rsvp';
import { addDoc, collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class RsvpService {
  private firestore = inject(Firestore);

  constructor() { }

  submitRsvp(data: Rsvp) {
    const rsvpRef = collection(this.firestore, 'rsvps');
    return addDoc(rsvpRef, data);
  }

}
