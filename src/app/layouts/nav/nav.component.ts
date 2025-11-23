import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  @Input() isScrolled = false;
  mobileMenuOpen = false;


  navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'lovestory', label: 'Love Story' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'wishes', label: 'Wishes' },
    { id: 'rsvp', label: 'RSVP' },
    { id: 'gift', label: 'Gifts' },
    { id: 'faq', label: 'FAQ' }
  ];


  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }


  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
