import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-wish-modal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './wish-modal.component.html',
  styleUrl: './wish-modal.component.scss'
})
export class WishModalComponent {
  @Output() close = new EventEmitter<void>();
  @Input() isSubmitting = false;

  form: FormGroup;
  private fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      relationship: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      // Emit event through a parent or handle service call here
      // For this refactor, we trigger a service call in parent
      // but to keep it clean we'll emit the value
      this.postWish(this.form.value);
    }
  }


  // Quick helper for the emit since we need to pass data up
  // Ideally this uses a service, but we are simulating the architecture
  // We'll inject the functionality from the parent via an event or service
  // Let's use a custom event for simplicity in this specific file block
  @Output() submitWish = new EventEmitter<any>();

  postWish(data: any) {
    this.submitWish.emit(data);
  }


}
