import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  ogType?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly siteName = 'NogueTech';
  private readonly defaultOgImage = '/assets/og-default.jpg';

  updateMeta(config: SeoConfig): void {
    const fullTitle = `${config.title} | ${this.siteName}`;

    this.titleService.setTitle(fullTitle);

    this.meta.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Open Graph
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: config.ogType ?? 'website' });
    this.meta.updateTag({ property: 'og:image', content: config.ogImage ?? this.defaultOgImage });
    this.meta.updateTag({ property: 'og:url', content: config.canonical ?? this.document.URL });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.ogImage ?? this.defaultOgImage });

    this.setCanonical(config.canonical);
  }

  private setCanonical(url?: string): void {
    const href = url ?? this.document.URL;
    let linkEl = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!linkEl) {
      linkEl = this.document.createElement('link');
      linkEl.setAttribute('rel', 'canonical');
      this.document.head.appendChild(linkEl);
    }
    linkEl.setAttribute('href', href);
  }

  injectJsonLd(schema: Record<string, unknown>): void {
    const existing = this.document.querySelector('script[data-json-ld]');
    if (existing) existing.remove();

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-json-ld', 'true');
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }
}
