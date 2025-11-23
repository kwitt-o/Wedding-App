import { Component, signal } from '@angular/core';
import { WishlistItem } from '../../shared/models/wish-list';
import { WishListModalComponent } from '../wish-list-modal/wish-list-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gift',
  imports: [CommonModule, WishListModalComponent],
  templateUrl: './gift.component.html',
  styleUrl: './gift.component.scss'
})
export class GiftComponent {
  wishList = signal<WishlistItem[]>([]);
  showModal = false;

  copyNumber() {
    const textarea = document.createElement('textarea');
    textarea.value = '123456789012';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    // Toast logic could go here
  }
}
