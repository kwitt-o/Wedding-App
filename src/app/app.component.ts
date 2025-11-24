import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './layouts/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoveStoryComponent } from './components/love-story/love-story.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { WishesComponent } from './components/wishes/wishes.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { GiftComponent } from './components/gift/gift.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './layouts/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent, HeroComponent, LoveStoryComponent, ScheduleComponent, WishesComponent, RsvpComponent, GiftComponent, FaqComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isScrolled = false;

  constructor() {
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  ngOnInit() { }

  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
