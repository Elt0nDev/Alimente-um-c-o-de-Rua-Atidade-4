# ONG Alimente um Cão de Rua

Projeto web simples — acessível, responsivo e preparado para boas práticas de desenvolvimento.

## Estrutura do projeto
- `index.html` — Página inicial.
- `projeto.html` — Páginas com projetos e contato.
- `cadastro.html` — Formulário de cadastro/ações.
- `style.css` — Sistema de design, temas (claro, escuro, alto contraste) e acessibilidade.
- `script.js` — Lógica de temas, formulários e melhorias de acessibilidade.

## Acessibilidade implementada
- HTML5 semântico (`header`, `main`, `nav`, `section`, `footer`).
- `alt` descritivos para imagens.
- Skip link (`Pular para o conteúdo`) para navegação rápida por teclado.
- Foco visível e regras para alto contraste.
- Botões para alternar tema claro/escuro/alto-contraste.
- Compatível com leitores de tela — labels e `aria-*` onde apropriado.
- Contraste de cores pensado para atingir pelo menos 4.5:1 em textos principais.

## Otimização e deployment
- Código entregue em versão legível e comentada para estudo.
- Para produção, recomenda-se:
  - Minificar CSS/JS/HTML (ex.: `html-minifier`, `terser`, `cssnano`).
  - Compressão de imagens (ex.: `imagemin`, `svgo`, ou serviços como TinyPNG).
  - Habilitar `gzip`/`brotli` no servidor.
  - Usar `Cache-Control` adequado para assets.

### Exemplo simples de scripts npm para minificação
```json
{
  "scripts": {
    "minify:css": "cssnano style.css style.min.css",
    "minify:js": "terser script.js -o script.min.js -c -m",
    "minify:html": "html-minifier index.html -o index.min.html --collapse-whitespace --remove-comments"
  }
}
```

## GitFlow, commits semânticos e versionamento
### Branching (GitFlow simplificado)
- `main` — Código em produção (releases).
- `develop` — Integração de features para a próxima release.
- `feature/*` — Novas funcionalidades (ex: `feature/acessibilidade`).
- `release/*` — Preparação de release (ex: `release/1.0.0`).
- `hotfix/*` — Correções emergenciais na `main`.

### Histórico de commits semânticos (exemplos)
- `feat: adicionar tema escuro e alto contraste`
- `fix: corrigir foco do teclado no formulário`
- `docs: atualizar README com GitFlow`
- `style: ajustar cores para contraste`
- `chore: configurar scripts de build`

### Versionamento semântico
Use tagues no formato `vMAJOR.MINOR.PATCH`:
- `v1.0.0` — primeira release estável
- `v1.1.0` — novas features compatíveis
- `v1.1.1` — correções menores

Exemplo de fluxo para uma release:
1. Branch `develop` → criação de `release/1.0.0`
2. Testes e ajustes → merge em `main`
3. Tag `git tag -a v1.0.0 -m "Release v1.0.0"`
4. Merge `main` → `develop`

## Notas finais
- Código está em formato legível e comentado para aprendizado.
- Se quiser, posso também gerar a versão minificada dos arquivos e um `package.json` com scripts de build prontos.

---  
**ONG Alimente um Cão de Rua**
