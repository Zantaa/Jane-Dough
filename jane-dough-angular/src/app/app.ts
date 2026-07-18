import { afterNextRender, ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly instagramUrl = 'https://www.instagram.com/janedoughfoods/';
  protected readonly menuOpen = signal(false);
  protected readonly openFaq = signal<number | null>(0);
  protected readonly signedUp = signal(false);

  constructor() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    if (location.hash) {
      history.replaceState(null, '', `${location.pathname}${location.search}`);
    }

    afterNextRender(() => window.scrollTo(0, 0));
  }

  protected readonly signupForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  });

  protected readonly faqs: readonly FaqItem[] = [
    {
      question: 'What is Jane Dough making?',
      answer:
        'Jane Dough is developing gluten-free dumpling wrappers made for folding, filling, and sharing. Product details and the first available varieties will be announced before launch.',
    },
    {
      question: 'When will the first batch be available?',
      answer:
        'Soon! Join the first-batch list and follow Jane Dough on Instagram to be the first to hear about launch timing, early tastings, and where to buy.',
    },
    {
      question: 'Will you share ingredients and allergen information?',
      answer:
        'Yes. Complete ingredient, preparation, allergen, and certification information will be published before products become available.',
    },
    {
      question: 'Where will Jane Dough be sold?',
      answer:
        'The launch plan is still taking shape. First-batch subscribers will get location and ordering updates as soon as they are confirmed.',
    },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleFaq(index: number): void {
    this.openFaq.update((currentIndex) => (currentIndex === index ? null : index));
  }

  protected submitSignup(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    this.signedUp.set(true);
  }
}
