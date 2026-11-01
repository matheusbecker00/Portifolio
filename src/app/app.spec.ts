import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio sections and project names', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Ideias que viram');
    expect(compiled.querySelector('#projetos')?.textContent).toContain('NaValidade');
    expect(compiled.querySelector('#projetos')?.textContent).toContain('OdontoGest');
    expect(compiled.querySelector('#projetos')?.textContent).toContain('O ponto de partida');
    expect(compiled.querySelector('#projetos')?.textContent).toContain('A solução');
    expect(compiled.querySelectorAll('#projetos .project-preview-image img').length).toBe(2);
    expect(compiled.querySelectorAll('#projetos a[href^="https://"]').length).toBe(2);
    expect(compiled.querySelectorAll('#design .art-card').length).toBe(4);
    expect(compiled.querySelectorAll('#design a[aria-label^="Ver arte completa:"]').length).toBe(4);
    expect(compiled.querySelector('#design .art-featured')).toBeTruthy();
    expect(compiled.querySelector('#sobre')?.textContent).toContain('Riomaframix');
    expect(compiled.querySelector('.site-nav a[href="curriculo-matheus-becker.pdf"]')).toBeTruthy();
    expect(compiled.querySelectorAll('#habilidades .skill-area').length).toBe(3);
    expect(compiled.querySelector('#contato')).toBeTruthy();
    expect(compiled.querySelector('#contato .contact-email')?.getAttribute('href')).toBe('mailto:matheusbecker484@gmail.com');
    expect(compiled.querySelector('#contato .contact-whatsapp')?.getAttribute('href')).toBe('https://wa.me/5547984216946');
    expect(compiled.querySelector('#contato a[href="https://www.instagram.com/_xbecker"]')).toBeTruthy();
  });

  it('should expand and collapse skill details', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const button = fixture.nativeElement.querySelector('#habilidades .skill-area-button') as HTMLButtonElement;

    expect(button.getAttribute('aria-expanded')).toBe('false');
    button.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(fixture.nativeElement.querySelectorAll('#skill-panel-sites .skill-tool').length).toBe(4);

    button.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(fixture.nativeElement.querySelector('#skill-panel-sites')).toBeNull();
  });
});
