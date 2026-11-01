# Portfólio criativo em Angular

Site responsivo com projetos web, galeria de design gráfico, criação de conteúdo, apresentação, habilidades interativas e contato.

## Executar

Requer Node.js 20.19 ou mais recente.

```bash
npm install
npm start
```

Abra `http://localhost:4200/`. Para validar a versão de produção, execute `npm run build`. Os testes rodam com `npm test -- --watch=false`.

O workflow em `.github/workflows/pages.yml` publica automaticamente no GitHub Pages após alterações na branch `main`, em `https://matheusbecker00.github.io/Portifolio/`.

## Personalizar

Edite `src/app/app.ts`:

- `profile`: apresentação de Matheus, trajetória, localização, e-mail e redes sociais. Enquanto e-mail e links estiverem como `null`, a página mostra avisos explícitos no lugar de links fictícios.
- `projects`: descrições, etiquetas, URLs e capturas de NaValidade e OdontoGest. As imagens enviadas estão em `public/projetos/`.
- `artworks`: títulos, formatos e imagens da galeria. Quatro peças da pasta `D:\- PORTIFOLIO` foram copiadas para `public/artes/`; novos arquivos podem ser adicionados ali e referenciados com `artes/nome-do-arquivo.png`.
- `contentSkills` e `skills`: serviços e habilidades.
- `skillAreas`: percentuais de autoavaliação das três áreas e domínio de cada ferramenta ou linguagem. Clique nos cartões da seção Habilidades para abrir as barras detalhadas.

Atualize também o título e a descrição em `src/index.html` e, se desejar, as cores em `src/styles.scss`.

Os botões “Visitar projeto” abrem os endereços informados em `projects` em uma nova guia.
