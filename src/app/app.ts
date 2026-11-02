import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  menuOpen = false;
  selectedSkill: string | null = null;

  readonly profile = {
    name: 'Matheus Becker',
    role: 'Engenharia de software · Design gráfico · Conteúdo',
    intro: 'Sou Matheus Becker. Combino desenvolvimento, design e criação de conteúdo para transformar ideias em experiências digitais.',
    about: 'Minha trajetória começou aos 17 anos, como estagiário no Riomaframix. Eu publicava materiais de clientes e, após ser efetivado, passei a criar peças e captar vídeos. Foi nesse período que desenvolvi minhas habilidades com Photoshop, CapCut e OBS Studio.',
    journey: 'Depois, assumi o marketing da Odonto Company e também realizei projetos como freelancer. O interesse por entender como as coisas funcionam me levou à Engenharia de Software, curso que faço atualmente. Hoje reúno essa experiência criativa e técnica no desenvolvimento de sites e aplicativos, incluindo OdontoGest e NaValidade.',
    location: 'Rio Negro, Paraná',
    email: 'matheusbecker484@gmail.com',
    phone: '47 98421-6946',
    whatsapp: 'https://wa.me/5547984216946',
    linkedin: 'https://www.linkedin.com/in/matheus-becker-759692324/',
    instagram: 'https://www.instagram.com/_xbecker',
  };

  readonly projects = [
    {
      number: '01',
      name: 'NaValidade',
      category: 'Aplicativo para o varejo',
      description: 'Nasceu de uma necessidade prática: acompanhar os vencimentos dos produtos e organizar essa rotina no comércio.',
      solution: 'Cadastro por grupos, busca, filtros e alertas ajudam a identificar itens vencidos ou próximos do prazo.',
      tags: ['Problema real', 'Controle de validade'],
      url: 'https://navalidade.vercel.app/',
      image: 'projetos/navalidade.png',
      theme: 'navalidade',
    },
    {
      number: '02',
      name: 'OdontoGest',
      category: 'SaaS para clínicas',
      description: 'Uma plataforma pensada para reunir a gestão de clínicas odontológicas em um único lugar.',
      solution: 'Agenda, pacientes, financeiro, estoque e relatórios fazem parte da proposta de gestão integrada.',
      tags: ['Gestão clínica', 'Produto em evolução'],
      url: 'https://odontogest-web.vercel.app/',
      image: 'projetos/odontogest.png',
      theme: 'odontogest',
    },
  ];

  readonly artworks = [
    { number: '01', title: 'Purple Digital', format: 'Story · marketing digital', image: 'artes/purple-digital.png' },
    { number: '02', title: 'Fogareiro Master', format: 'Peça promocional', image: 'artes/fogareiro-master.png' },
    { number: '03', title: 'Tech Pro', format: 'Peça para redes sociais', image: 'artes/tech-pro.png' },
    { number: '04', title: 'Dental Protection', format: 'Peça para redes sociais', image: 'artes/dental-protection.png' },
  ];

  readonly contentSkills = [
    { number: '01', title: 'Conceito & narrativa', text: 'Transformar uma ideia em mensagem clara, com voz e propósito.' },
    { number: '02', title: 'Planejamento editorial', text: 'Organizar temas, formatos e ritmo para uma comunicação consistente.' },
    { number: '03', title: 'Criação visual', text: 'Conectar texto, imagem e composição em peças que comunicam.' },
  ];

  readonly skills = ['Engenharia de Software', 'Angular', 'HTML & CSS', 'Photoshop', 'CapCut', 'OBS Studio', 'Marketing', 'Criação de conteúdo', 'Captação de vídeo'];

  readonly skillAreas = [
    {
      id: 'sites',
      number: '01',
      title: 'Desenvolvimento de sites',
      summary: 'Interfaces responsivas e aplicações que transformam necessidades em soluções digitais.',
      level: 82,
      tools: [
        { name: 'HTML & CSS', level: 88 },
        { name: 'Angular', level: 82 },
        { name: 'TypeScript', level: 78 },
        { name: 'Design responsivo', level: 86 },
      ],
    },
    {
      id: 'video',
      number: '02',
      title: 'Vídeo & conteúdo',
      summary: 'Da captação à edição, com atenção ao ritmo, à mensagem e ao formato.',
      level: 84,
      tools: [
        { name: 'CapCut', level: 88 },
        { name: 'OBS Studio', level: 82 },
        { name: 'Captação de vídeo', level: 80 },
        { name: 'Roteiro de conteúdo', level: 76 },
      ],
    },
    {
      id: 'artes',
      number: '03',
      title: 'Artes & design',
      summary: 'Peças visuais para marcas e redes sociais que comunicam com clareza.',
      level: 86,
      tools: [
        { name: 'Photoshop', level: 86 },
        { name: 'Peças para redes sociais', level: 88 },
        { name: 'Composição visual', level: 84 },
        { name: 'Identidade visual', level: 78 },
      ],
    },
  ];

  toggleSkill(id: string): void {
    this.selectedSkill = this.selectedSkill === id ? null : id;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
