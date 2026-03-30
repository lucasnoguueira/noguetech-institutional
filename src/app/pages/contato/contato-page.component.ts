import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contato-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './contato-page.component.html',
  styleUrl: './contato-page.component.css',
})
export class ContatoPageComponent implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly fb = inject(FormBuilder);

  readonly isSubmitted = signal(false);
  readonly isSubmitting = signal(false);

  readonly form = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(3)]],
    email:   ['', [Validators.required, Validators.email]],
    phone:   ['', [Validators.pattern(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/)]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  hasError(field: string, error: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.touched && ctrl.hasError(error));
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    // Simulate async submission
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      this.form.reset();
    }, 1200);
  }

  ngOnInit(): void {
    this.seo.updateMeta({
      title: 'Contato',
      description: 'Entre em contato com a NogueTech. Solicite seu orçamento gratuito em instalações elétricas, projetos e energia solar.',
      keywords: 'contato NogueTech, orçamento instalação elétrica, fale conosco',
      canonical: 'https://www.noguetech.com.br/contato',
    });

    this.seo.injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://www.noguetech.com.br/#localbusiness',
      name: 'NogueTech Engenharia Elétrica',
      url: 'https://www.noguetech.com.br',
      telephone: '+55-00-00000-0000',
      email: 'contato@noguetech.com.br',
      image: 'https://www.noguetech.com.br/assets/og-default.jpg',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'R. Exemplo, 123',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        postalCode: '00000-000',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -23.5505,
        longitude: -46.6333,
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '12:00' },
      ],
    });
  }
}
