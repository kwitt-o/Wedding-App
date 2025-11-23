import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rsvp',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent {
  rsvpForm: FormGroup;
  isSubmitting = false;
  success = false;
  error = false;

  private fb = inject(FormBuilder);
  // private auth = inject(getAuth);
  // private db: any;
  // private appId: string = 'default';

  constructor() {
    // const config = getFirebaseConfig();
    // if (config.apiKey) {
    //   this.appId = getAppId();
    //   const app = initializeApp(config);
    //   this.db = getFirestore(app);
    // }


    this.rsvpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      attendingTrad: [false],
      attendingWhite: [false],
      relationship: ['friend', Validators.required]
    });
  }

  touchedAndInvalid(field: string) {
    const control = this.rsvpForm.get(field);
    return control?.touched && control?.invalid;
  }


  // async onSubmit() {
  //   if (this.rsvpForm.invalid || !this.auth.currentUser) return;

  //   this.isSubmitting = true;
  //   this.success = false;
  //   this.error = false;


  //   try {
  //     await addDoc(collection(this.db, 'artifacts', this.appId, 'public', 'data', 'rsvps'), {
  //       ...this.rsvpForm.value,
  //       uid: this.auth.currentUser.uid,
  //       createdAt: serverTimestamp()
  //     });
  //     this.success = true;
  //     this.rsvpForm.reset();
  //     setTimeout(() => this.success = false, 5000);
  //   } catch (e) {
  //     console.error(e);
  //     this.error = true;
  //   } finally {
  //     this.isSubmitting = false;
  //   }
  // }


}
