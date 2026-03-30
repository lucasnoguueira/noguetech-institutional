import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

type Category = 'Todos' | 'Residencial' | 'Comercial' | 'Industrial' | 'Solar';

interface Project {
  title: string;
  category: Exclude<Category, 'Todos'>;
  description: string;
  highlight: string;
  year: number;
}

@Component({
  selector: 'app-projetos-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projetos-page.component.html',
  styleUrl: './projetos-page.component.css',
})
export class ProjetosPageComponent implements OnInit {
  private readonly seo = inject(SeoService);

  readonly categories: Category[] = ['Todos', 'Residencial', 'Comercial', 'Industrial', 'Solar'];
  readonly activeCategory = signal<Category>('Todos');

  readonly projects: Project[] = [
    { title: 'Residência Alto Padrão — Alphaville', category: 'Residencial', description: 'Projeto e instalação elétrica completa com automação residencial, 42 circuitos e SPDA.', highlight: '42 Circuitos', year: 2024 },
    { title: 'Complexo Comercial — Moema', category: 'Comercial', description: 'Infraestrutura elétrica para galeria comercial com 22 lojas, subestação e QGBT.', highlight: '500 kVA', year: 2024 },
    { title: 'Planta Industrial — ABC Paulista', category: 'Industrial', description: 'SDMT e SDBT para indústria metalmecânica, incluindo cabine primária e transformadores.', highlight: '2.000 kVA', year: 2023 },
    { title: 'Sistema Fotovoltaico — Zona Sul SP', category: 'Solar', description: 'Instalação de 80 painéis solares on-grid com geração de 32 kWp e payback de 4,5 anos.', highlight: '32 kWp', year: 2024 },
    { title: 'Condomínio Residencial — Santana', category: 'Residencial', description: 'Retrofit elétrico completo de condomínio com 120 unidades, áreas comuns e interfones.', highlight: '120 Unidades', year: 2023 },
    { title: 'Supermercado — Grande São Paulo', category: 'Comercial', description: 'Projeto e execução do sistema elétrico de supermercado 3.200 m², incluindo sistema de alarme.', highlight: '3.200 m²', year: 2023 },
  ];

  readonly filteredProjects = computed(() => {
    const cat = this.activeCategory();
    return cat === 'Todos' ? this.projects : this.projects.filter(p => p.category === cat);
  });

  setCategory(cat: Category): void {
    this.activeCategory.set(cat);
  }

  ngOnInit(): void {
    this.seo.updateMeta({
      title: 'Projetos Realizados',
      description: 'Portfólio de projetos da NogueTech: instalações residenciais, comerciais, industriais e energia solar em todo o estado de São Paulo.',
      keywords: 'projetos elétricos realizados, portfólio engenharia elétrica, instalações elétricas SP',
      canonical: 'https://www.noguetech.com.br/projetos',
    });
  }
}
