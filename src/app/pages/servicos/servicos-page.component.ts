import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

interface Service {
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

@Component({
  selector: 'app-servicos-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './servicos-page.component.html',
  styleUrl: './servicos-page.component.css',
})
export class ServicosPageComponent implements OnInit {
  private readonly seo = inject(SeoService);

  readonly services: Service[] = [
    { title: 'Instalações Residenciais', description: 'Instalação completa de sistemas elétricos residenciais: quadros, tomadas, iluminação e SPDA, com laudo de conformidade.', tags: ['Residencial', 'NR-10'], icon: '🏠' },
    { title: 'Instalações Comerciais', description: 'Projetos e instalações para lojas, escritórios e condomínios comerciais com dimensionamento correto e segurança total.', tags: ['Comercial', 'ABNT'], icon: '🏢' },
    { title: 'Instalações Industriais', description: 'Infraestrutura elétrica industrial de alta e baixa tensão: SDMT, SDBT, cabines primárias e subestações.', tags: ['Industrial', 'Alta Tensão'], icon: '🏭' },
    { title: 'Projetos Elétricos', description: 'Desenvolvimento de projetos técnicos completos com ART/RRT, dimensionamento de cargas e memorial de cálculo.', tags: ['Projeto', 'ART'], icon: '📐' },
    { title: 'Energia Solar Fotovoltaica', description: 'Dimensionamento, fornecimento e instalação de sistemas fotovoltaicos on-grid e off-grid com máximo retorno sobre investimento.', tags: ['Solar', 'Renovável'], icon: '☀️' },
    { title: 'Automação e Domótica', description: 'Integração de sistemas de automação residencial e predial: iluminação inteligente, tomadas USB, persianas e segurança.', tags: ['Automação', 'IoT'], icon: '🤖' },
    { title: 'Manutenção Preventiva', description: 'Inspeções periódicas, análise termográfica, aferição de disjuntores e substituição preventiva de componentes críticos.', tags: ['Manutenção', 'Preventiva'], icon: '🔧' },
    { title: 'Laudos e NR-10', description: 'Emissão de laudos técnicos, relatórios de conformidade, PPRA e treinamentos NR-10 para equipes de manutenção.', tags: ['Laudo', 'NR-10', 'ART'], icon: '📋' },
  ];

  ngOnInit(): void {
    this.seo.updateMeta({
      title: 'Nossos Serviços',
      description: 'Conheça todos os serviços da NogueTech: instalações elétricas, projetos técnicos, energia solar, automação, manutenção preventiva e laudos técnicos.',
      keywords: 'instalações elétricas, projetos elétricos, energia solar, automação residencial, laudo NR-10, manutenção elétrica',
      canonical: 'https://www.noguetech.com.br/servicos',
    });
  }
}
