import {
  Component,
  signal,
  HostListener,
  inject,
  PLATFORM_ID,
  OnInit,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

interface NavItem {
  label: string;
  path: string;
  exact: boolean;
}

@Component({
  selector: 'app-global-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.css',
})
export class GlobalHeaderComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  readonly isMenuOpen = signal(false);
  readonly isScrolled = signal(false);

  readonly navItems: NavItem[] = [
    { label: 'Início', path: '/', exact: true },
    { label: 'Sobre', path: '/sobre', exact: false },
    { label: 'Serviços', path: '/servicos', exact: false },
    { label: 'Projetos', path: '/projetos', exact: false },
    { label: 'Contato', path: '/contato', exact: false },
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 10);
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 10);
    }
  }

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
