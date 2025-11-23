import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RsvpService } from '../../services/rsvp.service';
import { Rsvp } from '../../shared/models/rsvp';

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
  private rsvpService = inject(RsvpService);

  constructor() {
  
    this.rsvpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: [''],
      relationship: ['', Validators.required],
      comingFor: ['', Validators.required],
      eventAttending: ['', Validators.required],
    });
  }

  touchedAndInvalid(field: string) {
    const control = this.rsvpForm.get(field);
    return control?.touched && control?.invalid;
  }

 async onSubmit() {
    if (this.rsvpForm.invalid) {
      this.rsvpForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.success = false;
    this.error = false;

    const rsvpData: Rsvp = {
      ...this.rsvpForm.value,
      createdAt: Date.now(),
    };

    try {
      await this.rsvpService.submitRsvp(rsvpData);
      this.success = true;
      this.rsvpForm.reset();
    } catch (err) {
      console.error(err);
      this.error = true;
    } finally {
      this.isSubmitting = false;
    }
  }


}
