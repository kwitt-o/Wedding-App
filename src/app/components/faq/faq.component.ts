import { Component } from '@angular/core';
import { FAQ } from '../../shared/models/faq';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs: FAQ[] = [
    { question: 'Is it manadatory to RSVP?', answer: 'Yes it is. This is because it helps us plan better', isOpen: false },
    { question: 'What is the dress code?', answer: 'The Traditional Wedding requires traditional attire. The White Wedding is Black Tie formal.', isOpen: false },
    { question: 'Are children allowed?', answer: 'While we love your little ones, our wedding is an adults-only event so that everyone can relax and enjoy the evening.', isOpen: false },
    { question: 'Can I bring a plus one?', answer: 'Due to venue restrictions, please refer to the number of seats reserved in your honor on your formal invitation.', isOpen: false },
    { question: 'Is there parking available?', answer: 'Yes, valet parking is available at both venues.', isOpen: false }
  ];


  toggle(index: number) {
    this.faqs = this.faqs.map((f, i) =>
      i === index ? { ...f, isOpen: !f.isOpen } : { ...f, isOpen: false }
    );
  }

}
