import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { getCountdown } from '../../shared/utils/countdown.util';
import { interval } from 'rxjs';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Output() scrollToRSVP = new EventEmitter<void>();
  @Output() scrollToGift = new EventEmitter<void>();

  targetDate = new Date('2025-12-19T15:00:00'); // set wedding date
  countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };


  images = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1920&q=80'
  ];


  currentSlide = 0;
  time = signal({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  private timerId: any;
  private slideId: any;


  ngOnInit() {
    this.startCountdown();
    this.startCarousel();
  }


  ngOnDestroy() {
    clearInterval(this.timerId);
    clearInterval(this.slideId);
  }


  startCarousel() {
    this.slideId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    }, 5000);
  }


  startCountdown() {
    // const calculate = () => {
    //   const diff = WEDDING_DATE.getTime() - new Date().getTime();
    //   if (diff > 0) {
    //     this.time.set({
    //       days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    //       hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    //       minutes: Math.floor((diff / 1000 / 60) % 60),
    //       seconds: Math.floor((diff / 1000) % 60)
    //     });
    //   }
    // };
    // calculate();
    // this.timerId = setInterval(calculate, 1000);

    interval(1000).subscribe(() => {
      const { days, hours, minutes, seconds, distance } = getCountdown(this.targetDate);
      if (distance < 0) {
        this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      } else {
        this.countdown = { days, hours, minutes, seconds };
      }
    });
  }
}
