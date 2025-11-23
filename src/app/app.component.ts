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
  imports: [RouterOutlet, NavComponent, HeroComponent, LoveStoryComponent, ScheduleComponent, WishesComponent, RsvpComponent, GiftComponent, FaqComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isScrolled = false;

  // Auth Logic
  // private auth = inject(getAuth);


  constructor() {
    // Initialize Auth
    // this.initAuth();
    // Scroll Listener
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }


  ngOnInit() { }


  // async initAuth() {
  //   const token = (window as any).__initial_auth_token;
  //   try {
  //     if (token) {
  //       await signInWithCustomToken(this.auth, token);
  //     } else {
  //       await signInAnonymously(this.auth);
  //     }
  //   } catch (err) {
  //     console.error("Auth failed", err);
  //   }
  // }


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
