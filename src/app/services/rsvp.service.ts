import { inject, Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Rsvp } from '../shared/models/rsvp';
import { addDoc, collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class RsvpService {
  private firestore = inject(Firestore);
  private rsvpCollection = collection(this.firestore, 'rsvps');

  constructor() { }

  submitRsvp(data: Rsvp) {
     const rsvpWithTimestamp = {
      ...data,
      createdAt: new Date()
    };
    const rsvpRef = collection(this.firestore, 'rsvps');
    return addDoc(this.rsvpCollection, rsvpWithTimestamp);
  }

}
