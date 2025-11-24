import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WishService } from '../../services/wish.service';


@Component({
  selector: 'app-wish-modal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './wish-modal.component.html',
  styleUrl: './wish-modal.component.scss'
})
export class WishModalComponent {
  @Output() close = new EventEmitter<void>();
  @Input() isSubmitting = false;

  wishForm: FormGroup;
  success = false;
  error = false;

  private fb = inject(FormBuilder);
  private wishService = inject(WishService)

  constructor() {
    this.wishForm = this.fb.group({
      name: ['', Validators.required],
      relationship: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  async submit() {
    if (this.wishForm.invalid) {
      this.wishForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.success = false;
    this.error = false;

    const wishData = this.wishForm.value;

    try {
      await this.wishService.saveWish(wishData);
      this.isSubmitting = false;
      this.success = true;
      this.wishForm.reset();
    } catch (err) {
      console.error('Error posting wish:', err);
      this.isSubmitting = false;
      this.error = true;
    }
  }

}
