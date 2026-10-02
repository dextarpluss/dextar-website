# Dextar++ Website Oficial (v1.0)

Website institucional e comercial da **Dextar Soluções em Tecnologia (Dextar++)**, desenvolvido em **Next.js 16 (App Router)** com **TypeScript** e **Design System nativo em CSS Custom Properties (Tokens)**.

---

## 🚀 1. Stack Tecnológica & Arquitetura

* **Framework:** Next.js 16+ (App Router)
* **Linguagem:** TypeScript
* **Estilização:** Vanilla CSS Modules + CSS Custom Properties oficiais (`globals.css`)
* **Renderização:** SSG (Static Site Generation) para máxima velocidade de carregamento e pontuação perfeita no Google Core Web Vitals.
* **Acessibilidade:** Conformidade com a meta WCAG 2.2 AA (navegação por teclado, skip link, contraste adequado e focus-visible).
* **SEO:** Metadados dinâmicos e Open Graph configurados em todas as rotas.

---

## 📁 2. Estrutura de Pastas

```text
website/
├── public/
│   └── images/
│       └── brand/             # Logos oficiais Dextar++ (claro e escuro)
├── src/
│   ├── app/                   # Rotas da aplicação (App Router)
│   │   ├── cases/             # Lista e páginas estáticas dinâmicas /cases/[slug]
│   │   ├── contato/           # Página com formulário de atendimento
│   │   ├── conteudos/         # Lista e artigos estáticos /conteudos/[slug]
│   │   ├── integracoes/       # Página dedicada do pilar Integrações
│   │   ├── intelligence/      # Página dedicada do pilar Dextar Intelligence++
│   │   ├── privacidade/       # Minuta da Política de Privacidade e Governança LGPD
│   │   ├── sobre/             # História da Dextar, cronologia e valores
│   │   ├── solucoes/          # Visão geral do portfólio
│   │   ├── wms/               # Página dedicada do pilar WMS Dextar++
│   │   ├── globals.css        # Tokens oficiais do Dextar Digital Design System v1.0
│   │   ├── layout.tsx         # Layout raiz com fontes Inter, Header, Footer e CookieConsent
│   │   └── page.tsx           # Home page com as 10 seções oficiais
│   ├── components/            # Componentes reutilizáveis
│   │   ├── ContactForm/       # Form com validação e consentimento LGPD
│   │   ├── CookieConsent/     # Banner de cookies em conformidade LGPD
│   │   ├── Footer/            # Rodapé institucional
│   │   ├── Header/            # Cabeçalho sticky responsivo com gaveta mobile
│   │   └── Sections/          # Seções da Home (Hero, Diferenciais, WMS, Intelligence, etc.)
│   └── data/
│       └── dextarData.ts      # Data Store central (Soluções, WMS, IA, CMS de Cases e Conteúdos)
```

---

## ⚙️ 3. Como Executar e Fazer Deploy

### Instalação
```bash
cd website
npm install
```

### Executar em modo de desenvolvimento
```bash
npm run dev
```
O servidor estará acessível em `http://localhost:3000`.

### Gerar Build de Produção
```bash
npm run build
```

---

## 📝 4. Onde Alterar Dados e Substituir Imagens

1. **Alterar Textos, Copys e Conteúdos CMS:**
   * Edite o arquivo [`src/data/dextarData.ts`](file:///c:/Users/Marcelo/OneDrive/Smart%20Corporation/DextarTecnologia/Identidade%20Visual/DEXTAR_SITE_HANDOFF_FINAL_v1.0/website/src/data/dextarData.ts). Ele alimenta a lista de Soluções, os 6 passos do WMS, as capacidades do Dextar Intelligence++, os Estudos de Caso (Cases) e o Blog (Conteúdos).

2. **Alterar Contatos Oficiais e Canais:**
   * Edite o componente [`src/components/Footer/Footer.tsx`](file:///c:/Users/Marcelo/OneDrive/Smart%20Corporation/DextarTecnologia/Identidade%20Visual/DEXTAR_SITE_HANDOFF_FINAL_v1.0/website/src/components/Footer/Footer.tsx) e a página [`src/app/contato/page.tsx`](file:///c:/Users/Marcelo/OneDrive/Smart%20Corporation/DextarTecnologia/Identidade%20Visual/DEXTAR_SITE_HANDOFF_FINAL_v1.0/website/src/app/contato/page.tsx).

3. **Substituir Logos e Ativos da Marca:**
   * Substitua os arquivos PNG na pasta [`public/images/brand/`](file:///c:/Users/Marcelo/OneDrive/Smart%20Corporation/DextarTecnologia/Identidade%20Visual/DEXTAR_SITE_HANDOFF_FINAL_v1.0/website/public/images/brand).

---

## ⚠️ 5. Lista de Itens com Demarcação `[VALIDAR]`

Conforme as regras inegociáveis do projeto, as seguintes pendências foram identificadas com selos de aviso e **não devem ser tratadas como fatos públicos finais** até aprovação jurídica/comercial:

1. **ERP TOTVS Winthor:** Redação comercial e escopo público de integração.
2. **Dados Institucionais:** Nomes, datas exatas de marcos societários e cronologia no arquivo `sobre/page.tsx`.
3. **Contatos de Atendimento:** E-mail oficial, telefone/WhatsApp e endereço físico no arquivo `contato/page.tsx`.
4. **Clientes & Depoimentos:** Autorização de marca de terceiros nos estudos de caso em `dextarData.ts`.
5. **Encarregado DPO / LGPD:** Nome e canal direto do DPO na Política de Privacidade em `privacidade/page.tsx`.

---

## 🎨 6. Fidelidade ao Design System

O site utiliza o **Deep Navy (`#07090E`)**, **Cyan (`#06B6D4`)** e **Blue (`#3B82F6`)** como base.
As cores semânticas são aplicadas estritamente de acordo com o manual:
* **Emerald (`#10B981`):** Sucesso e auditabilidade.
* **Purple (`#8B5CF6`):** Insight++ e inteligência estratégica.
* **Amber (`#F59E0B`):** Avisos e pendências factuais (`[VALIDAR]`).
* **Rose (`#F43F5E`):** Alertas de gargalos operacionais.
