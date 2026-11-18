# Vértice Digital — Criação de Sites Profissionais

Site institucional da **Vértice Digital** no padrão **Nível Essencial**, desenvolvido com React, TypeScript, Vite, Tailwind CSS e Framer Motion (`motion`).

## Recursos incluídos

- Apresentação da marca e diferenciais (**Criamos seu site em até 24hs!** e **Fornecemos para todo o Brasil**)
- Seção **Sobre** com retrato do fundador, missão, segmentos atendidos e CNPJ (`69752105/0001-01`)
- Seção **Serviços** com passo a passo em 3 etapas e lista de entregas
- Tabela de **Planos** (`Básico`, `Essencial`, `Premium` e `Gold`) com seleção integrada ao orçamento
- Carrossel de **Depoimentos** com animações suaves ao rolar a página
- Formulário validado integrado ao **WhatsApp** `(34) 99794-8468`

## Como rodar localmente

```bash
npm install
npm run dev
```

Para gerar os arquivos finais de produção na pasta `dist/`:

```bash
npm run build
```

## Como publicar seu domínio pelo GitHub

1. Crie um repositório no GitHub e envie os arquivos deste projeto (pelo site do GitHub em **Add file > Upload files** ou via `git push`).
2. Conecte o repositório na **Vercel**, **Netlify** ou **Cloudflare Pages** (comando de build `npm run build` e pasta de saída `dist`).
3. Nas configurações do provedor escolhido, adicione o seu **domínio próprio** e aponte o DNS conforme indicado.
