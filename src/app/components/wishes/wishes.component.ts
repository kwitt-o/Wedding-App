import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { WishModalComponent } from '../wish-modal/wish-modal.component';
import { WellWish } from '../../shared/models/well-wishes';
import { WishService } from '../../services/wish.service';

@Component({
  selector: 'app-wishes',
  imports: [CommonModule, WishModalComponent],
  templateUrl: './wishes.component.html',
  styleUrl: './wishes.component.scss'
})
export class WishesComponent implements OnInit {
  wishes = signal<WellWish[]>([]);
  showModal = false;
  visibleCount = signal(6);

  private wishService = inject(WishService);

  constructor() {
  }

  ngOnInit(): void {
    this.fetchWishes();
  }

  visibleWishes(): WellWish[] {
    return this.wishes().slice(0, this.visibleCount());
  }


  showMore() {
    // Increase by 3, but not exceeding total wishes
    const newCount = Math.min(this.visibleCount() + 3, this.wishes().length);
    this.visibleCount.set(newCount);
  }

  showLess() {
    this.visibleCount.set(6);
  }



  fetchWishes() {
    this.wishService.getWishes().subscribe({
      next: (data) => {
        console.log('Fetched wishes:', data); // Log the fetched wishes
        this.wishes.set(data);
      },
      error: (err) => {
        console.error('Error fetching wishes:', err);
      }
    });
  }


}
