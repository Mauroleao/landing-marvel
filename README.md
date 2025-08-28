# Landing Marvel — Guia de Execução

Este projeto é um site estático que usa Gulp + Dart Sass para compilar os arquivos SCSS em CSS (saída em `dist/css`). O HTML principal é `index.html` na raiz do projeto.

## Pré‑requisitos

- Node.js (recomendado LTS) e npm instalados
- (Opcional) Extensão Live Server no VS Code, ou um servidor estático simples via `npx`

## Instalação

No diretório do projeto:

```powershell
npm install
```

## Build (compilar SCSS para CSS)

```powershell
npm run build
```

- Gera `dist/css/main.css` a partir de `src/styles/*.scss`.
- As imagens esperadas pelo CSS devem estar em `dist/img`.

## Servir o site (abrir no navegador)

Recomendado usar um servidor estático para que os caminhos funcionem corretamente (especialmente porque o CSS pode referenciar imagens com caminho absoluto como `/dist/img/...`). Algumas opções:

1) Live Server (VS Code)
- Clique com o botão direito no `index.html` > "Open with Live Server"
- Certifique‑se de que a raiz do servidor é a pasta do projeto (onde está o `index.html`).

2) `npx http-server` (sem instalar nada global)
```powershell
npx http-server . -p 5501
```
Acesse: http://127.0.0.1:5501/

3) `npx serve` (alternativa)
```powershell
npx serve -l 5501 .
```
Acesse: http://127.0.0.1:5501/

> Dica: Evite abrir o `index.html` com duplo clique (protocolo `file://`). Caminhos absolutos como `/dist/img/...` não funcionarão nesse modo.

## Desenvolvimento (watch)

Para recompilar o SCSS automaticamente ao salvar arquivos:

```powershell
npx gulp watch
```

- Observa mudanças em `src/styles/*.scss` e recompila para `dist/css`.
- Você pode deixar um servidor estático rodando em outra aba do terminal enquanto edita.

## Estrutura do projeto (resumo)

```
landing-marvel/
├─ index.html                # HTML principal
├─ gulpfile.js               # Tarefas Gulp (styles, watch)
├─ package.json              # Scripts npm
├─ src/
│  ├─ styles/                # SCSS de origem
│  │  ├─ main.scss
│  │  ├─ _colors.scss
│  │  ├─ _header.scss
│  │  └─ _layout.scss
│  └─ img/                   # Imagens de origem (opcional)
└─ dist/
   ├─ css/
   │  └─ main.css            # CSS gerado
   └─ img/
      └─ bg-home.jpg         # Imagens consumidas pelo CSS/HTML
```

## Solução de problemas

- CSS não aparece na página
  - Verifique se `dist/css/main.css` foi gerado após `npm run build`.
  - No DevTools (Network), confirme que `dist/css/main.css` não retorna 404.
  - Force recarregar sem cache (Ctrl+F5) e/ou marque "Disable cache" na aba Network.

- Imagem de fundo não aparece
  - Confirme no DevTools (Network) que `dist/img/bg-home.jpg` carrega (status 200/304).
  - Atenção à raiz do servidor: se o CSS usa caminho absoluto `/dist/img/...`, o servidor deve servir a raiz na pasta do projeto. Use Live Server ou `http-server`/`serve` como acima.
  - No DevTools (Elements → Styles), verifique se a regra de `.bg-home` está ativa e se `background-image` mostra a URL correta.

- `npm run build watch` falha
  - O projeto só tem o script `build`. Para observar mudanças, use `npx gulp watch`.

## Comandos úteis

```powershell
# Instalar dependências
npm install

# Build (compila SCSS)
npm run build

# Observar mudanças em SCSS (watch)
npx gulp watch

# Subir um servidor estático (opção 1)
npx http-server . -p 5501

# Subir um servidor estático (opção 2)
npx serve -l 5501 .
```

Qualquer dúvida, abra uma issue no repositório ou me chame — feliz em ajudar! ✂️🧔‍♂️
