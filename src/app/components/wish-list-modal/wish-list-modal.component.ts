import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { WishlistItem } from '../../shared/models/wish-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wish-list-modal',
  imports: [CommonModule],
  templateUrl: './wish-list-modal.component.html',
  styleUrl: './wish-list-modal.component.scss'
})
export class WishListModalComponent {
  @Output() close = new EventEmitter<void>();


  wishlistItems: WishlistItem[] = [
    {
      name: 'Kitchen Stand Mixer',
      description: 'A classic matte black mixer for our weekend baking adventures.',
      link: 'https://example.com/mixer'
    },
    {
      name: 'Ceramic Dinner Set',
      description: 'Handcrafted plates in organic white and gold trim.',
      link: 'https://example.com/dinner-set'
    },
    {
      name: 'Espresso Machine',
      description: 'To fuel our early mornings together.',
      link: 'https://example.com/espresso'
    },
    {
      name: 'Honeymoon Fund',
      description: 'Contribute to our dream trip to the Maldives.',
      link: 'https://example.com/honeymoon'
    }
  ];


  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent) {
    this.closeModal();
  }


  closeModal() {
    this.close.emit();
  }

}
