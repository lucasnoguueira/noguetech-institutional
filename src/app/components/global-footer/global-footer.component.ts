import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'global-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './global-footer.component.html',
  styleUrl: './global-footer.component.css',
})
export class GlobalFooterComponent {
  readonly footerYear = new Date().getFullYear();
}
