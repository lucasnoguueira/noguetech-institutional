import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-sobre-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sobre-page.component.html',
  styleUrl: './sobre-page.component.css',
})
export class SobrePageComponent implements OnInit {
  private readonly seo = inject(SeoService);

  readonly values = [
    { icon: '🔒', title: 'Segurança', description: 'Cumprimos rigorosamente todas as normas técnicas (ABNT, NR-10) para garantir instalações 100% seguras.' },
    { icon: '⚙️', title: 'Qualidade', description: 'Materiais certificados pelo INMETRO e processos auditados em cada etapa do projeto.' },
    { icon: '💡', title: 'Inovação', description: 'Mantemo-nos atualizados com as últimas tecnologias em automação, eficiência energética e energia solar.' },
    { icon: '🤝', title: 'Comprometimento', description: 'Cumprimos prazos e orçamentos com total transparência, construindo relações de longa duração com nossos clientes.' },
  ];

  readonly team = [
    { name: 'Ricardo Nogue', role: 'Engenheiro Elétrico — Fundador', crea: 'CREA-SP 000.000-0' },
    { name: 'Ana Ferreira', role: 'Engenheira de Projetos', crea: 'CREA-SP 000.001-0' },
    { name: 'Carlos Lima', role: 'Técnico em Eletrotécnica', crea: 'CREA-SP 000.002-0' },
  ];

  ngOnInit(): void {
    this.seo.updateMeta({
      title: 'Sobre Nós',
      description: 'Conheça a NogueTech: nossa história, missão, visão, valores e a equipe de engenheiros especializados em soluções elétricas.',
      keywords: 'sobre NogueTech, engenheiros elétricos, missão visão valores, empresa de engenharia elétrica',
      canonical: 'https://www.noguetech.com.br/sobre',
    });

    this.seo.injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'NogueTech',
      url: 'https://www.noguetech.com.br',
      logo: 'https://www.noguetech.com.br/assets/logo.png',
      foundingDate: '2010',
      description: 'Empresa de engenharia elétrica especializada em instalações, projetos e energia solar.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
    });
  }
}
