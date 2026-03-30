import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalHeaderComponent } from './components/global-header/global-header.component';
import { GlobalFooterComponent } from './components/global-footer/global-footer.component';
import { SkipLinkComponent } from './components/skip-link/skip-link.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GlobalHeaderComponent, GlobalFooterComponent, SkipLinkComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
