import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  private readonly seo = inject(SeoService);

  readonly services = [
    {
      icon: 'bolt',
      title: 'Instalações Elétricas',
      description: 'Instalações residenciais, comerciais e industriais com materiais certificados e conformidade com NR-10.',
    },
    {
      icon: 'blueprint',
      title: 'Projetos Elétricos',
      description: 'Desenvolvimento de projetos técnicos completos: spda, automação, eficiência energética e mais.',
    },
    {
      icon: 'solar',
      title: 'Energia Solar',
      description: 'Sistemas fotovoltaicos dimensionados para máxima economia e retorno de investimento acelerado.',
    },
    {
      icon: 'shield',
      title: 'Laudos e Manutenção',
      description: 'Laudos técnicos, manutenção preventiva/corretiva e inspeções para manter sua instalação segura.',
    },
  ];

  readonly stats = [
    { value: '200+', label: 'Projetos Concluídos' },
    { value: '15',   label: 'Anos de Experiência' },
    { value: '98%',  label: 'Clientes Satisfeitos' },
    { value: '50+',  label: 'Cidades Atendidas' },
  ];

  readonly features = [
    { title: 'Engenheiros Certificados', description: 'Equipe com CREA ativo e formação especializada em sistemas elétricos de alta e baixa tensão.' },
    { title: 'Materiais de Qualidade', description: 'Trabalhamos somente com materiais de marcas certificadas pelo INMETRO para máxima durabilidade.' },
    { title: 'Prazo e Orçamento Garantidos', description: 'Cumprimos o prazo combinado e o orçamento sem surpresas, garantindo total transparência.' },
    { title: 'Suporte Pós-Obra', description: 'Atendimento rápido em caso de dúvidas ou ajustes após a conclusão do seu projeto.' },
  ];

  ngOnInit(): void {
    this.seo.updateMeta({
      title: 'Engenharia Elétrica com Excelência',
      description: 'NogueTech — soluções em engenharia elétrica para residências, comércios e indústrias. Instalações, projetos, energia solar e muito mais.',
      keywords: 'engenharia elétrica, instalações elétricas, energia solar, projetos elétricos, NogueTech',
      canonical: 'https://www.noguetech.com.br/',
    });

    this.seo.injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'NogueTech',
      description: 'Empresa de engenharia elétrica especializada em instalações, projetos e energia solar.',
      url: 'https://www.noguetech.com.br',
      telephone: '+55-00-00000-0000',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      areaServed: 'BR',
      serviceType: 'Engenharia Elétrica',
    });
  }
}
