import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { WishModalComponent } from '../wish-modal/wish-modal.component';
import { WellWish } from '../../shared/models/well-wishes';

@Component({
  selector: 'app-wishes',
  imports: [CommonModule, WishModalComponent],
  templateUrl: './wishes.component.html',
  styleUrl: './wishes.component.scss'
})
export class WishesComponent {
  wishes = signal<WellWish[]>([]);
  showAll = false;
  showModal = false;
  isSubmitting = false;


  // private auth = inject(getAuth); // Assuming provisioned in root
  // private db: any;
  // private appId: string = 'default';

  constructor() {
    // const config = getFirebaseConfig();
    // if (config.apiKey) {
    //   this.appId = getAppId();
    // Initialize firestore here or inject service
    // For this single file block, we do direct access
    // const app = initializeApp(config);
    // this.db = getFirestore(app);
    // Note: In real app, Auth is usually handled by a Service
  }

  // ngOnInit() {
  //   if (this.db) {
  //     this.fetchWishes();
  //   }
  // }


  // fetchWishes() {
  //   const q = query(
  //     collection(this.db, 'artifacts', this.appId, 'public', 'data', 'wishes'),
  //     orderBy('createdAt', 'desc')
  //   );


  //   onSnapshot(q, (snapshot) => {
  //     const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as WellWish));
  //     this.wishes.set(list);
  //   });
  // }


  // visibleWishes = computed(() => {
  //   const all = this.wishes();
  //   return this.showAll ? all : all.slice(0, 6);
  // });


  toggleViewAll() {
    this.showAll = !this.showAll;
  }


  // async handleWishSubmit(data: any) {
  //   if (!this.auth.currentUser) return;
  //   this.isSubmitting = true;
  //   try {
  //     await addDoc(collection(this.db, 'artifacts', this.appId, 'public', 'data', 'wishes'), {
  //       ...data,
  //       uid: this.auth.currentUser.uid,
  //       createdAt: serverTimestamp()
  //     });
  //     this.showModal = false;
  //   } catch (e) {
  //     console.error(e);
  //   } finally {
  //     this.isSubmitting = false;
  //   }
  // }


}
