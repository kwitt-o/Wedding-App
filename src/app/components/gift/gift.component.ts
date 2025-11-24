// import { Component, signal } from '@angular/core';
// import { WishlistItem } from '../../shared/models/wish-list';
// import { WishListModalComponent } from '../wish-list-modal/wish-list-modal.component';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-gift',
//   imports: [CommonModule, WishListModalComponent],
//   templateUrl: './gift.component.html',
//   styleUrl: './gift.component.scss'
// })
// export class GiftComponent {
//   wishList = signal<WishlistItem[]>([]);
//   showModal = false;

//   copyNumber() {
//     const textarea = document.createElement('textarea');
//     textarea.value = '123456789012';
//     document.body.appendChild(textarea);
//     textarea.select();
//     document.execCommand('copy');
//     document.body.removeChild(textarea);
//     // Toast logic could go here
//   }
// }


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

  readonly accountNumber = '123456789012';

  // Toast visibility + message
  toastMessage = signal<string | null>(null);

  async copyNumber(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.accountNumber);

      this.showToast('Account number copied!');
    } catch {
      this.showToast('Failed to copy number');
    }
  }

  private showToast(message: string): void {
    this.toastMessage.set(message);

    setTimeout(() => this.toastMessage.set(null), 2000);
  }
}
